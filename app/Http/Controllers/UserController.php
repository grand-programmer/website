<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(
            [
                'status' => 'success',
                'users' => $users->toArray()
            ], 200);
    }

    public function show(Request $request, $id)
    {
        $user = User::with('services')->find($id);
        return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ], 200);
    }

    /**
     * @throws \Illuminate\Http\Client\RequestException
     */
    public function getServices(): \Illuminate\Http\JsonResponse
    {
        global $services;
        $services = [];
        $user_id = Auth::guard('api')->user()->id;
        ///
        /// Dastlabki qaror
        //dd(["personPin" => Auth::guard('api')->user()->pin]);
        try {
            $response = Http::withoutVerifying()->timeout(10)->get(env('MIX_BASE_URL') . '/api/v1/ex_api/customprice-apps', ["pnfl" => Auth::guard('api')->user()->pin]);
            if ($response->status() == 200) {

                $dq = $response->json();
                if (is_array($dq) and count($dq) > 0) {
                    collect($dq)->transform(function ($dq_item) use ($user_id) {
                        global $services;
                        $services[] = [
                            "app_id" => $dq_item['id'],
                            "app_num" => $dq_item['appNum'],
                            "created_at" => $dq_item['insTime'],
                            "status" => $dq_item['status'],
                            "link" => "/services/decisions/" . $dq_item['id'],
                            "statusNm" => $dq_item['statusNm'],
                            "type" => 1,
                            "user_id" => $user_id,
                        ];
                    });
                }
            }
        } catch (\Exception $e) {

        };
        /// Ishga joylashish
        //dd(["personPin" => Auth::guard('api')->user()->pin]);
        try {
            $response1 = Http::asForm()->acceptJson()->timeout(10)
                ->get('http://192.168.214.159/vacancy/public/api/nomzodtotal/' . Auth::guard('api')->user()->pin);
            if ($response1->status() == 200) {

                $vi = $response1->json();
                if (is_array($vi) and isset($vi['nomzodlar']) and isset($vi['status']) and isset($vi['nomzodlar'][0]) and isset($vi['status'][0]) and isset($vi['nomzodlar'][0]['id']) and isset($vi['nomzodlar'][0]['kod'])) {
                    global $services;
                    $services[] = [
                        "app_id" => $vi['nomzodlar'][0]['id'],
                        "app_num" => $vi['nomzodlar'][0]['kod'],
                        "created_at" => isset($vi['nomzodlar'][0]['created_at']) ? $vi['nomzodlar'][0]['created_at'] : null,
                        "status" => ($vi['status'][count($vi['status']) - 1]['applied'] !== null) ? 'Тайёр' : 'Жараёнда',
                        "statusNm" => ($vi['status'][count($vi['status']) - 1]['applied'] !== null) ? 'Тайёр' : 'Жараёнда',
                        "type" => 0,
                        "link" => "/services/vacancy/" . $vi['nomzodlar'][0]['vakant_id'] . '?status=show',
                        "user_id" => $user_id,
                    ];

                }

            }
        } catch (\Exception $e) {

        };
        /// Appeal murojaat
        try {
            $response = Http::asMultipart();
            $response = $response->timeout(10)
                ->get('http://192.168.214.152:7070/DECAPP/s06appealrestapianswer/getResult', ['personPin' => Auth::guard('api')->user()->pin])->throw(function ($response, $e) {
                    //
                });

            if ($response->status() == 200) {
                $appealdata = $response->json();

                if (is_array($appealdata) and isset($appealdata['appeal']) and isset($appealdata['appeal'][0]) and is_array($appealdata['appeal'][0])) {
                    collect($appealdata['appeal'])->transform(function ($appeal) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $appeal['id'],
                            "app_num" => $appeal['appNum'],
                            "created_at" => isset($appeal['insTime']) ? $appeal['insTime'] : null,
                            "status" => $appeal['status'],
                            "statusNm" => $appeal['statusNm'],
                            "type" => 2,
                            "link" => "/services/appeals/" . $appeal['appNum'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);
        } catch (\Exception $e) {

        };
        /// Intellektual
        try {
            $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s01apiresponse/getresult', [
                "personPin" => Auth::guard('api')->user()->pin,
            ])->throw(function ($response, $e) {
                //
            });
            if ($response->status() == 200) {
                $responseData = $response->json();

                if (is_array($responseData) and isset($responseData['data']) and isset($responseData['data'][0]) and is_array($responseData['data'][0])) {
                    collect($responseData['data'])->transform(function ($data) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $data['id'],
                            "app_num" => $data['appNum'],
                            "created_at" => isset($data['insTime']) ? $data['insTime'] : null,
                            "status" => $data['status'],
                            "statusNm" => $data['statusNm'],
                            "type" => 4,
                            "link" => "/services/intellectual/" . $data['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);

        } catch (\Exception $e) {

        };
        /// Recycle
        try {
            $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s03apiresponse/getresult', [
                "personPin" => Auth::guard('api')->user()->pin,
            ])->throw(function ($response, $e) {
                //
            });
            if ($response->status() == 200) {
                $responseData = $response->json();

                if (is_array($responseData) and isset($responseData['data']) and isset($responseData['data'][0]) and is_array($responseData['data'][0])) {
                    collect($responseData['data'])->transform(function ($data) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $data['id'],
                            "app_num" => $data['appNum'],
                            "created_at" => isset($data['insTime']) ? $data['insTime'] : null,
                            "status" => $data['status'],
                            "statusNm" => $data['statusNm'],
                            "type" => 6,
                            "link" => "/services/recycle/" . $data['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);

        } catch (\Exception $e) {

        };
        /// Refund
        try {
            $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s04apiresponse/getresult', [
                "personPin" => Auth::guard('api')->user()->pin,
            ])->throw(function ($response, $e) {
                //
            });
            if ($response->status() == 200) {
                $responseData = $response->json();

                if (is_array($responseData) and isset($responseData['data']) and isset($responseData['data'][0]) and is_array($responseData['data'][0])) {
                    collect($responseData['data'])->transform(function ($data) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $data['id'],
                            "app_num" => $data['appNum'],
                            "created_at" => isset($data['insTime']) ? $data['insTime'] : null,
                            "status" => $data['status'],
                            "statusNm" => $data['statusNm'],
                            "type" => 5,
                            "link" => "/services/refund/" . $data['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);

        } catch (\Exception $e) {

        };
        /// Tftn qaror
        try {
            $response = Http::asMultipart();
            $response = $response->timeout(10)
                ->get('http://192.168.214.152:7070/DECAPP/s05appealrestapi/getresult', ['personPin' => Auth::guard('api')->user()->pin])->throw(function ($response, $e) {
                    //
                });
            if ($response->status() == 200) {
                $appealdata = $response->json();

                if (is_array($appealdata) and isset($appealdata['data']) and isset($appealdata['data'][0]) and is_array($appealdata['data'][0])) {
                    collect($appealdata['data'])->transform(function ($appeal) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $appeal['id'],
                            "app_num" => $appeal['appNum'],
                            "created_at" => isset($appeal['insTime']) ? $appeal['insTime'] : null,
                            "status" => $appeal['status'],
                            "statusNm" => $appeal['statusNm'],
                            "type" => 3,
                            "link" => "/services/tftn/" . $appeal['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);
        } catch (\Exception $e) {

        };

        //  $user=User::with('services')->find($user_id);

//dd($user);


        /*        Service::create([
                    'type'=>1,
                    'app_id',
                    'status',
                    'user_id',
                    'app_num',
                ]);*/
        //dd($user);
        $services = collect($services)->sortByDesc('created_at')->values()->all();

        return response()->json([
            "status" => 'success',
            "services" => $services,
        ]);
    }

    public function showImage(Request $request): \Illuminate\Http\Response
    {

        if (Auth::guard('api')->user()) {
            $name = "/public/users/" . Auth::guard('api')->user()->id . ".jpg";
            if (!Storage::exists($name)) {
                return Response::make('File no found.', 404);
            }
            $file = Storage::get($name);
            $type = Storage::mimeType($name);
            return Response::make($file, 200)->header("Content-Type", $type);
        }
        $pinData = $request->only('pnfl');
        if (isset($pinData) and !empty($pinData)) {
            $user = User::where(['pin' => $pinData['pnfl']])->first();
            if(!$user) return Response::make('User not found', 404);
            $name = "/public/users/" . $user->id . ".jpg";
            if (!Storage::exists($name)) {
                return Response::make('File no found.', 404);
            }
            $file = Storage::get($name);
            $type = Storage::mimeType($name);
            return Response::make($file, 200)->header("Content-Type", $type);


        }
        return Response::make('You need authorizate!', 401);

    }
}
