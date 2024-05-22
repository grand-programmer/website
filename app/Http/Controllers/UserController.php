<?php

namespace App\Http\Controllers;

use App\Helpers\MainHelper;
use App\Models\Service;
use App\Models\StatService as ServiceStat;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

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

    public function update(Request $request)
    {
        if (!Auth::guard('api')->user()) {
            return response()->json([
                'status' => 'error',
                'errors' => 'You need to authorize!'
            ], 400);
        }
        $data = $request->all();
        $v = Validator::make($data, [
            'phone' => 'required|digits:12',
            'address' => 'required|min:3',
            'tin' => 'required|digits:9',
        ]);
        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 400);
        }

        $user = Auth::guard('api')->user();
        $user->phone = $data['phone'];
        $user->per_adr = $data['address'];
        $user->save();

        if ($dd = $user->save()) return response()->json(
            [
                'status' => 'success',
                'user' => $user->toArray()
            ], 200);
        return response()->json(
            [
                'status' => 'error',
            ], 400);
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

        $statServices = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id])->where('status', '<>', null)->get();
        if ($statServices->count() > 0)
            $statServices->transform(function ($statServices_item) use ($user_id) {
                global $services;
                $services[] = [
                    "app_id" => $statServices_item['id'],
                    "app_num" => $statServices_item['id'],
                    "created_at" => $statServices_item['created_at'],
                    "status" => $statServices_item['status'],
                    "link" => "/services/stat/" . $statServices_item['id'],
                    "statusNm" => $statServices_item['statusNm'],
                    "type" => 10,
                    "user_id" => $user_id,
                ];
            });
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
            $response1 = Http::timeout(10)->withBasicAuth('apiuser', 1)
                ->get('http://172.16.112.19:7191/nomzod/getAllArizaNomzod?pnfl=' . Auth::guard('api')->user()->pin);
            if ($response1->status() == 200) {
                $vi = $response1->json();
                if (is_array($vi) and isset($vi['allariza']) and isset($vi['allariza'][0])  and isset($vi['allariza'][0]['vak_id']) and isset($vi['allariza'][0]['vak_id'])) {
                    global $services;
                    $services[] = [
                        "app_id" => $vi['allariza'][0]['vak_id'],
                        "app_num" => $vi['allariza'][0]['app_num'],
                        "created_at" => isset($vi['allariza'][0]['created_at']) ? $vi['allariza'][0]['created_at'] : null,
                        "status" => $vi['allariza'][0]['status'],
                        "statusNm" => $vi['allariza'][0]['statusNm'],
                        "type" => 0,
                        "link" => "/services/vacancy/" . $vi['allariza'][0]['vak_id'] . '?status=show',
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
                            "created_at" => isset($data['appDate']) ? $data['appDate'] : null,
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

        /// Ppay
        try {
            $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s08appsrestapi/getresult', [
                "personPin" => Auth::guard('api')->user()->pin,
                "personTin" => Auth::guard('api')->user()->tin,
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
                            "created_at" => isset($data['appDate']) ? $data['appDate'] : null,
                            "status" => $data['status'],
                            "statusNm" => $data['statusNm'],
                            "type" => 7,
                            "link" => "/services/ppay/" . $data['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);

        } catch (\Exception $e) {

        };

        /// stamp
        try {
            $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s09appsrestapi/getresult', [
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
                            "created_at" => isset($data['appDate']) ? $data['appDate'] : null,
                            "status" => $data['status'],
                            "statusNm" => $data['statusNm'],
                            "type" => 8,
                            "link" => "/services/stamp/" . $data['id'],
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
        /// Vio
        try {
            $response = Http::asMultipart();
            $response = $response->timeout(10)
                ->get('http://192.168.214.152:7070/DECAPP/s10vio', ['pin' => Auth::guard('api')->user()->pin])->throw(function ($response, $e) {
                });
            if ($response->status() == 200) {
                $appealdata = $response->json();

                if (is_array($appealdata) and isset($appealdata[0]) and is_array($appealdata[0])) {
                    collect($appealdata)->transform(function ($appeal) use ($user_id) {

                        global $services;
                        $services[] = [
                            "app_id" => $appeal['id'],
                            "app_num" => $appeal['appNum'],
                            "created_at" => isset($appeal['insTime']) ? $appeal['insTime'] : null,
                            "status" => $appeal['status'],
                            "statusNm" => $appeal['statusNm'],
                            "type" => 11,
                            "link" => "/services/vio/" . $appeal['id'],
                            "user_id" => $user_id,
                        ];

                    });


                }

            } //else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);
        } catch (\Exception $e) {

        };
        /// TPO
        try {
            $response = Http::asMultipart();
            $response = $response->timeout(10)
                ->get('http://192.168.224.145:8080/api/v1/tpo/get/' + Auth::guard('api')->user()->pin)->throw(function ($response, $e) {
                    //
                });
            if ($response->status() == 200) {
                $appealdata = $response->json();

                if (is_array($appealdata) and isset($appealdata['data']) and isset($appealdata['data'][0]) and is_array($appealdata['data'][0])) {
                    collect($appealdata['data'])->transform(function ($appeal) use ($user_id) {
                        global $services;
                        $services[] = [
                            "app_id" => $appeal['id'],
                            "app_num" => $appeal['num'],
                            "created_at" => isset($appeal['insTime']) ? $appeal['insTime'] : null,
                            "status" => $appeal['status'],
                            "statusNm" => $appeal['status'],
                            "type" => 3,
                            "link" => "/services/bko/" . $appeal['id'],
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
                $user = Auth::guard('api')->user();
                $userDates = Http::acceptJson()->timeout(15)->withBody(json_encode([
                    "pinpp" => (string)$user->pin,
                    "document" => $user->pport_no,
                    "langId" => 1
                ]), 'application/json')
                    ->post('http://192.168.214.231:8084/api/passport',
                    );
                $dataUserDates = $userDates->json();
                $user->_pport_issue_date = $dataUserDates['docdatebegin'];
                $user->_pport_expr_date = $dataUserDates['docdateend'];
                $user->save();


                /*     $tdate1 = $date1 = MainHelper::getDateFromString($user->_pport_issue_date);
                     $tdate2 = $date2 = MainHelper::getDateFromString($user->_pport_expr_date);
                     if ($date1 and $date2) {
                         /*            $tdate1= new \Carbon\Carbon($user->_pport_issue_date);
                                     $tdate2=new \Carbon\Carbon($user->_pport_expr_date);
                                     $date2=new \Carbon\Carbon($user->_pport_expr_date);*/
                /*
                    if ($tdate1->subDay()->getTimestamp() !== $tdate2->subYears(10)->getTimestamp()) {
                        // dd($date1->year);
                        $user->_pport_issue_date = $date1->year . "-" . ($date1->day < 10 ? '0' . $date1->day : $date1->day) . "-" . ($date1->month < 10 ? '0' . $date1->month : $date1->month);
                        $user->_pport_expr_date = $date2->year . "-" . ($date2->day < 10 ? '0' . $date2->day : $date2->day) . "-" . ($date2->month < 10 ? '0' . $date2->month : $date2->month);
                        $user->save();
                    }
                } */
                try {
                    $userPhoto = Http::acceptJson()->timeout(15)->withBody(json_encode([
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

                    return Response::make($e->getMessage(), 404);
                }


            }
            $file = Storage::get($name);
            $type = Storage::mimeType($name);
            return Response::make($file, 200)->header("Content-Type", $type);
        }
        $pinData = $request->only('pnfl');
        if (isset($pinData) and !empty($pinData)) {
            $user = User::where(['pin' => $pinData['pnfl']])->first();
            if (!$user) return Response::make('User not found', 404);


            $name = "public/users/" . $user->id . ".jpg";

            try {
                if (Storage::get($name)) {
                    $file = Storage::get($name);
                    $type = Storage::mimeType($name);
                    return Response::make($file, 200)->header("Content-Type", $type);
                }
            } catch (\Exception $e) {

                try {

                    $userPhoto = Http::acceptJson()->timeout(15)->withBody(json_encode([
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
                    else {

                        $date1 = MainHelper::getDateFromString($user->_pport_issue_date);
                        $tdate1 = MainHelper::getDateFromString($user->_pport_issue_date);
                        $date2 = MainHelper::getDateFromString($user->_pport_expr_date);
                        $tdate2 = MainHelper::getDateFromString($user->_pport_expr_date);
                        $userDates = Http::acceptJson()->timeout(15)->withBody(json_encode([
                            "pinpp" => (string)$user->pin,
                            "document" => $user->pport_no,
                            "langId" => 1
                        ]), 'application/json')
                            ->post('http://192.168.214.231:8084/api/passport',
                            );
                        $dataUserDates = $userDates->json();
                        $user->_pport_issue_date = $dataUserDates['docdatebegin'];
                        $user->_pport_expr_date = $dataUserDates['docdateend'];
                        $user->save();

                        // if ($date1 and $date2) {
                        {
                            /*            $tdate1= new \Carbon\Carbon($user->_pport_issue_date);
                                        $tdate2=new \Carbon\Carbon($user->_pport_expr_date);
                                        $date2=new \Carbon\Carbon($user->_pport_expr_date);*/
                            if ($tdate1->subDay()->getTimestamp() !== $tdate2->subYears(10)->getTimestamp()) {

                                // dd($date1->year);
                                // $user->_pport_issue_date = $date1->year . "-" . ($date1->day < 10 ? '0' . $date1->day : $date1->day) . "-" . ($date1->month < 10 ? '0' . $date1->month : $date1->month);
                                //  $user->_pport_expr_date = $date2->year . "-" . ($date2->day < 10 ? '0' . $date2->day : $date2->day) . "-" . ($date2->month < 10 ? '0' . $date2->month : $date2->month);

                                try {
                                    $userPhoto = Http::acceptJson()->timeout(15)->withBody(json_encode([
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
                                    // $user->save();
                                    $file = Storage::get($name);
                                    $type = Storage::mimeType($name);
                                    return Response::make($file, 200)->header("Content-Type", $type);
                                } catch (\Exception $e) {

                                }
                            }
                        }
                    }
                } catch (\Exception $e) {
                    $date1 = MainHelper::getDateFromString($user->_pport_issue_date);
                    $tdate1 = MainHelper::getDateFromString($user->_pport_issue_date);
                    $date2 = MainHelper::getDateFromString($user->_pport_expr_date);
                    $tdate2 = MainHelper::getDateFromString($user->_pport_expr_date);


                    if ($date1 and $date2) {
                        /*            $tdate1= new \Carbon\Carbon($user->_pport_issue_date);
                                    $tdate2=new \Carbon\Carbon($user->_pport_expr_date);
                                    $date2=new \Carbon\Carbon($user->_pport_expr_date);*/
                        if ($tdate1->subDay()->getTimestamp() !== $tdate2->subYears(10)->getTimestamp()) {

                            // dd($date1->year);
                            //$user->_pport_issue_date = $date1->year . "-" . ($date1->day < 10 ? '0' . $date1->day : $date1->day) . "-" . ($date1->month < 10 ? '0' . $date1->month : $date1->month);
                            //$user->_pport_expr_date = $date2->year . "-" . ($date2->day < 10 ? '0' . $date2->day : $date2->day) . "-" . ($date2->month < 10 ? '0' . $date2->month : $date2->month);

                            $userDates = Http::acceptJson()->timeout(15)->withBody(json_encode([
                                "pinpp" => (string)$user->pin,
                                "document" => $user->pport_no,
                                "langId" => 1
                            ]), 'application/json')
                                ->post('http://192.168.214.231:8084/api/passport',
                                );
                            $dataUserDates = $userDates->json();
                            $user->_pport_issue_date = $dataUserDates['docdatebegin'];
                            $user->_pport_expr_date = $dataUserDates['docdateend'];
                            $user->save();
                            try {
                                $userPhoto = Http::acceptJson()->timeout(15)->withBody(json_encode([
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
                                $user->save();
                                $file = Storage::get($name);
                                $type = Storage::mimeType($name);
                                return Response::make($file, 200)->header("Content-Type", $type);
                            } catch (\Exception $e) {

                            }
                        }
                    }
                    return Response::make($e->getMessage(), 404);
                }
                print_r(111);
                return Response::make($e->getMessage(), 404);
            }


        }
        return Response::make('You need authorizate!', 400);

    }
}
