<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3|confirmed',
        ]);
        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }
        $user = new User;
        $user->email = $request->email;

        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        /*        $user=User::where(['email'=>'great_programmer@mail.ru'])->first();
                $user->password = bcrypt(12345678);
                $user->save();*/


        if ($post = $request->only('code')) {

            return $this->oneid($post['code']);


        }

        $credentials = $request->only('email', 'password');
        if ($token = $this->guard()->attempt($credentials)) {
            return response()->json(['status' => 'success'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'login_error'], 401);
    }

    public function loginWithOneId(Request $request)
    {

        if ($this->guard()->user() != null) {
            return redirect('profile', 302, [], true);

        } else {
            if ($post = $request->only('code')) {

                $this->oneid($post['code']);
                return redirect('profile', 302, [], true);
            } else return redirect('login', 302, [], true);
        }

    }

    public function oneid($code): \Illuminate\Http\JsonResponse
    {
        $response = Http::asForm()->acceptJson()->post('https://sso.egov.uz/sso/oauth/Authorization.do', [
            'code' => $code,
            'grant_type' => 'one_authorization_code',
            'client_id' => 'customs_uz',
            'client_secret' => '9a6CDJ7PgK1Nb2nXhes4wH80'
        ]);

        if ($response->status() == 200) {
            $userAcces = $response->json();
            /*
             *    "scope" => "customs_uz"
                  "expires_in" => 1646981583980
                  "token_type" => "Bearer"
                  "refresh_token" => "e8662c0d-cec1-4efa-ae5a-044cbed68fd8"
                  "access_token" => "1821276c-6555-4e57-9286-ccadf6f3818a"
             *
             */

            $responseUser = Http::asForm()->acceptJson()
                ->post('https://sso.egov.uz/sso/oauth/Authorization.do',
                    [
                        'code' => $code,
                        'grant_type' => 'one_access_token_identify',
                        'client_id' => 'customs_uz',
                        'client_secret' => '9a6CDJ7PgK1Nb2nXhes4wH80',
                        'access_token' => $userAcces['access_token'],
                        'scope' => 'customs_uz',
                    ]);
            if ($responseUser->status() !== 200 or !isset($responseUser->json()['user_type'])) return response()->json(['error' => 'login_error'], 401);
            $type = 1;
            $legal_info = [];
            global $legals;
            if (isset($responseUser->json()['legal_info']) && !empty($responseUser->json()['legal_info'])) {
                $legal_info = $responseUser->json()['legal_info'];
                collect($legal_info)->transform(function ($item, $key) {
                    global $legals;
                    if ($item['is_basic'] === "true" || $item['is_basic']) {
                        $legals = $item;
                        return $item;
                    }
                })->all();
// dd(array_column($legals,'is_basic'));

                if (isset($legals['le_tin'])) $type = 2;
            }


            if (DB::table('users')->where(
                [
                    'pin' => (int)$responseUser->json()['pin'],
                    'type' => $type
                ])->exists()) {

                //$user=User::where(['email'=>$responseUser->json()['email']])->first();
                $d = $responseUser->json();

                $data = collect($d)->transform(function ($item, $key) {
                    $array = [
                        "first_name",
                        "sur_name",
                        "mid_name",
                        "birth_date",
                        "ctzn",
                        "per_adr",
                        "tin",
                        "gd",
                        "natn",
                        "_pport_issue_date",
                        "_pport_expr_date",
                        "pport_no",
                        "pin",
                        "birth_place",
                        "valid",
                        "user_type",
                        "ret_cd",
                        "legal_info",

                    ];
                    if ($key == "pin" or $key == "tin") {
                        $item = (int)$item;
                    }
                    if (in_array($key, $array)) {
                        return $item;
                    } else {
                        // dd($key. "sdf");
                        return null;
                    }
                })->reject(function ($name) {
                    return empty($name);
                });

                if ($type === 1) {
                    $user = User::where([
                        'pin' => (int)$responseUser->json()['pin'],
                        'type' => $type])->firstOrFail();
                    $user->update(array_merge($data->all(), ['type' => $type]));
                    $user->save();
                } else {
                    $user = User::where([
                        'pin' => (int)$responseUser->json()['pin'],
                        'type' => $type,
                        'legal_tin' => null
                    ])->first();

                    $user2 = User::where([
                        'pin' => (int)$responseUser->json()['pin'],
                        'type' => $type])->where('legal_tin', $legals['le_tin'])->first();
                    if ($user2) $user = $user2;
                    if ($user) {
                        $user->update(array_merge($data->all(), ['type' => $type, 'legal_info'=>json_encode([$legals]),'legal_tin' => $legals['le_tin']]));
                        $user->save();
                    } else {
                        $userData = $responseUser->json();
                        //dd(array_merge($userData, ['type' => $type, 'password' => 'password!!!$$$']));
                        if (isset($userData['legal_info'])) $userData['legal_info'] = json_encode([$legals]);
                        $user = User::create(array_merge($userData, [
                            'type' => $type,
                            'password' => 'password!!!$$$',
                            'legal_tin' => $legals['le_tin'],
                            'legal_info' =>  json_encode([$legals])
                        ]));

                    }
                }

                $png_url = $user->id . ".jpg";
                $path = public_path('storage/users/' . $png_url);
                if (!file_exists($path)) {

                    try {
                        $userPhoto = Http::acceptJson()->connectTimeout(15)->withBody(json_encode([
                            "pinfl" => (string)$user->pin,
                            "doc_give_date" => $user->_pport_issue_date,
                        ]), 'application/json')
                            ->post('http://192.168.214.124:9090/GetMIP2/rest/service_MIP2/getMipFoto',
                            );
                        //dd($userPhoto->json());
                        $userPhoto = $userPhoto->json();
                        $png_url = $user->id . ".jpg";
                        $path = public_path('storage/users/' . $png_url);
                        if (strlen($userPhoto['foto']) > 0)
                            Image::make(base64_decode($userPhoto['foto']))->save($path);
                    } catch (\Exception $e) {
                    }
                }

            } else {
                $userData = $responseUser->json();
                //dd(array_merge($userData, ['type' => $type, 'password' => 'password!!!$$$']));
                if (isset($userData['legal_info'])) $userData['legal_info'] =  json_encode([$legals]);

                // if (User::where(['email' => $responseUser->json()['email']])->exists()) $userData['email'] = "";

                if ($type === 1) {
                    $user = User::create(array_merge($userData, ['type' => $type, 'password' => 'password!!!$$$']));
                } else {
                    $user = User::create(array_merge($userData, [
                        'type' => $type,
                        'password' => 'password!!!$$$',
                        'legal_tin' => $legals['le_tin'],
                        'legal_info' =>  json_encode([$legals])
                    ]));
                }
                $user->save();

                $userPhoto = Http::acceptJson()->withBody(json_encode([
                    "pinfl" => (string)$user->pin,
                    "doc_give_date" => $user->_pport_issue_date,
                ]), 'application/json')
                    ->post('http://192.168.214.124:9090/GetMIP2/rest/service_MIP2/getMipFoto',
                    );

                $userPhoto = $userPhoto->json();
                $png_url = $user->id . ".jpg";
                $path = public_path('storage/users/' . $png_url);
                if (strlen($userPhoto['foto']) > 0)
                    Image::make(base64_decode($userPhoto['foto']))->save($path);

            }
            if ($type !== 1) {
                $returnData = DB::connection('db2_odbcInn')->select(
                    "select tin,name,shortname,streetname,registrationnumber from INN_ASOS WHERE tin = ?", [$legals['le_tin']]);
                if($returnData and $returnData[0]) {
                    $user->per_adr = $returnData[0]->streetname; 
                    $user->save();
                }
            }


            /*               dd(json_encode([
                               "pinfl" => (string)$user->pin,
                               "doc_give_date" => $user->_pport_issue_date,
                           ]));*/


            $token = $this->guard()->tokenById($user->id);
            return response()->json(['status' => 'success'], 200)
                ->header('Authorization', $token);


        } else {
            return response()->json(['error' => 'login_error'], 401);
        }
    }

    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        if (strlen($user->legal_tin) === 9) $user->tin = $user->legal_tin;
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'success'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }

    private function guard()
    {
        return Auth::guard('api');
    }
}
