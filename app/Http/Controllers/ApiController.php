<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Services\StatService;
use Carbon\Carbon;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Mockery\Exception;
use Ramsey\Collection\Collection;
use \Illuminate\Support\Facades\Http;
use Symfony\Component\Console\Input\Input;

class ApiController extends Controller
{
    /**
     * @throws \Exception
     */
    public function index($action = 'vakantlar', Request $request)
    {
        $data = $request->all();

        $myrequest = Http::asForm()->acceptJson();
        switch ($action) {
            case "vacancy-show":
                if (!($vacancy = (int)$request->get('vacancy')))
                    return response()->json([
                        'success' => false,
                        'message' => 'Вакансия коди киритилмади'], 401);
                if (Auth::guard('api')->user())
                    $response = $myrequest
                        ->get('http://192.168.214.159/vacancy/public/api/vakant_nomer/' . $vacancy . '?pnfl=' . Auth::guard('api')->user()->pin); else
                    $response = $myrequest->get('http://192.168.214.159/vacancy/public/api/vakant_nomer/' . $vacancy);
                if ($response->status() === 200) {
                    $data = $response->json();
                    if (Auth::guard('api')->user()) {

                        $response1 = $myrequest->get('http://192.168.214.159/vacancy/public/api/nomzodtotal/' . Auth::guard('api')->user()->pin);
                        if ($response1->status() == 200) {
                            $data = array_merge($response->json(), $response1->json());
                        }
                    }
                    return response()->json([
                        'success' => $response->status() === 200 ? true : false,
                        'data' => $data], $response->status());
                }
                break;
            case "boshqarma-show":
                if (!($boshqarma = (int)$request->get('boshqarma')))
                    return response()->json([
                        'success' => false,
                        'message' => 'Вакансия коди киритилмади'], 401);
                $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/hudud/' . $boshqarma);
                break;
            case "boshqarma":

                try {
                    $response = $myrequest
                        ->timeout(5)
                        ->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/custom/locations');
                    if ($response->status() == 200) {
                        $dataLocations = json_decode($response->body());
                        //dd($dataLocations->locations);
                        if (isset($dataLocations->locations)) {
                            $locations = collect($dataLocations->locations)->transform(function ($loc) {
                                if (isset($loc->id) and isset($loc->name))
                                    return [
                                        'kod_id' => $loc->id,
                                        'name' => $loc->name1,
                                        'address' => $loc->address
                                    ];
                                else return [];

                            });
                            return response()->json(['data' => $locations->all()]);
                        }
                    } else return response()->json(['error' => 'Malumot topilmadi']);

                } catch (\Exception $e) {

                    return response()->json(['data' => DB::connection('db2_odbc221')->select("Select id as kod_id, name_uzb as name From Location")]);
                    /*$response = $myrequest
                        ->get('http://192.168.214.159/vacancy/public/api/hudud');*/


                    ///return response()->json(['error' => 'Malumot topilmadi']);
                }
                break;
            case "resume":
                $response = $myrequest
                    ->post('http://192.168.214.159/vacancy/public/api/vacancynomzod', array_merge($request->all(), ['pasport' => Auth::guard('api')->user()['pport_no']]));
//dd($response);

                /*                $service=Service::create([
                                    'type'=>1,
                                    'app_id'=>$appId,
                                    'status'=>0
                                ]);
                                $service->save();*/

                break;
            //////tftn
            case "tftn-person":
                $this->middleware('auth:api');
                $user = Auth::guard('api')->user();
                if (!$user) return response()->json([
                    'success' => false,
                    'data' => 'Foydalanuvchi avtorizatsiyadan otishi talab etiladi'], 401);
                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.115:9080/labTifTn/personsrestapi', [
                    'body' => json_encode($request->all())
                ]);
                break;
            case "tftn-product":
                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.115:9080/labTifTn/appsrestapi', [
                    'body' => json_encode($request->all())
                ]);
                break;
            case "tftn-get":
                $appData = $request->only(['app_id', 'person_id', 'page', 'size']);
                if (isset($appData['app_id'])) {
                    $app_id = isset($appData['app_id']) ? $appData['app_id'] : null;
                    $response = Http::contentType("application/json")->get('http://192.168.214.115:9080/labTifTn/api/tutorials/commoditys', [
                        "appId" => $app_id,
                    ]);
                } elseif (isset($appData['person_id'])) {
                    $person_id = isset($appData['person_id']) ? $appData['person_id'] : null;
                    $page = $appData['page'] ?? 0;
                    $size = $appData['size'] ?? 50;
                    $response = Http::contentType("application/json")->get('http://192.168.224.18:9080/api/tutorials/published', [
                        "personPin" => $person_id,
                        "page" => $page,
                        "size" => $size,
                    ]);


                } else {
                    return response()->json(["error" => "Хато маълумот юборилди!", "status" => false], 200);
                }
                if ($response->status() == 200) {
                    return response()->json(["data" => $response->json()]);
                } else return response()->json(["error" => "Серверда хатолик юз берди!", "status" => false], 200);
                break;
            //////tftn end
            /// customsprice begin
            case "customprice-person":
                $this->middleware('auth:api');
                $user = Auth::guard('api')->user();
                if (!$user) return response()->json([
                    'success' => false,
                    'data' => 'Foydalanuvchi avtorizatsiyadan otishi talab etiladi'], 401);

                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.135:9090/CUSTOMSPRICE/personsrestapi', [
                    'body' => json_encode($request->all())
                ]);
                $this->middleware('auth:api');
                $user = Auth::guard('api')->user();
                if (!$user) return response()->json([
                    'success' => false,
                    'data' => 'Foydalanuvchi avtorizatsiyadan otishi talab etiladi'], 401);

                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.135:9090/CUSTOMSPRICE/personsrestapi', [
                    'body' => json_encode($request->all())
                ]);

                break;
            case "customprice-update":
                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.135:9090/CUSTOMSPRICE/appsrestapi/updateappsrestapi', [
                    'body' => json_encode($request->all())
                ]);
                break;
            case "customprice-yuk":
                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.135:9090/CUSTOMSPRICE/appsrestapi', [
                    'body' => json_encode($request->all())
                ]);
                break;
            case "customprice-product":
                $response = Http::contentType("application/json")->send('POST', 'http://192.168.214.135:9090/CUSTOMSPRICE/commodityrestapi', [
                    'body' => json_encode($request->all())
                ]);
                if ($response->status() === 200) {
                    if ($appId = json_decode($response->body())->data->appId) ;
                    //dd($request->appNum);
                    /* $service = Service::create([
                         'type' => 1,
                         'app_id' => $appId,
                         'app_num' => $request->appNum,
                         'status' => 0,
                         'user_id' => Auth::guard('api')->user()->id
                     ]);
                     $service->save();*/

                }
                break;
            case "customprice-get":
                $appData = $request->only('app_id');
                $app_id = isset($appData['app_id']) ? $appData['app_id'] : null;
                $response = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/commoditys', [
                    "page" => 0,
                    "size" => 1000,
                    "appId" => $app_id,
                ]);
                if ($response->status() == 200) {
                    $mydata = $response->json();
                    $returnData = [
                        'general' => isset($mydata['apps']) ? $mydata['apps'] : null,
                        'product' => isset($mydata['commodityList'][0]) ? $mydata['commodityList'][0] : null,
                    ];
                    $response2 = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/transporttype', [
                        "page" => 0,
                        "size" => 100,
                        "appId" => $app_id,
                    ]);
                    if ($response2->status() == 200) {
                        $transportdata = $response2->json();
                        $returnData['transports'] = isset($transportdata["transportTypeList"]) ? $transportdata["transportTypeList"] : null;
                    }
                    $response3 = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/earxivdocs', [
                        "page" => 0,
                        "size" => 100,
                        "appId" => $app_id,
                    ]);
                    if ($response3->status() == 200) {
                        $docdata = $response3->json();
                        if (isset($docdata["docsList"]) and is_array($docdata["docsList"]) and !empty($docdata["docsList"])) {

                            $docsList = collect($docdata["docsList"])->transform(function ($doc) {
                                $mydoc = (new StatService())->getFileFromEArxiv($doc['fileId']);
                                if ($mydoc and isset($mydoc[0])) {
                                    $doc['docTypeName'] = $mydoc[0]->cd_id . " - № " . $mydoc[0]->file_num;
                                }
                                return $doc;

                            });
                            $returnData['docs'] = $docsList;
                        } else $returnData['docs'] = null;

                        //
                    }
                    $response4 = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/historystatus', [
                        "page" => 0,
                        "size" => 100,
                        "appId" => $app_id,
                    ]);
                    if ($response4->status() == 200) {
                        $statusdata = $response4->json();

                        $returnData['statuses'] = isset($statusdata["statusAppHistoryList"]) ? $statusdata["statusAppHistoryList"] : null;
                        //$returnData['rollbackApp'] = isset($statusdata["rollbackApp"]) ? $statusdata["rollbackApp"] : null;
                        if (isset($returnData['statuses'])) {
                            $returnData['statuses'] = collect($returnData['statuses'])->transform(function ($status) {
                                if ((int)$status['status'] === 125) {
                                    $response5 = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/historyrollback', [
                                        "appId" => $status['appId'],
                                        "size" => 100,
                                        "page" => 0,
                                        "statusHId" => $status['id'],
                                    ]);
                                    if ($response5->status() == 200) {
                                        $status['rolback'] = $response5->json();
                                    }
                                }
                                return $status;
                            });
                        }
                    }

                    return response()->json(["data" => $returnData]);

                } else return response()->json(["error" => "Серверда хатолик юз берди!", "status" => false], 200);
                break;
            case "customprice-apps":
                $appData = $request->only('pnfl');
                $person_pnfl = isset($appData['pnfl']) ? $appData['pnfl'] : null;
                $response = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/tutorials/published', [
                    "personPin" => $person_pnfl,
                ]);
                if ($response->status() == 200) {
                    $dataApps = json_decode($response->body());
                    return isset($dataApps->appsList) ? $dataApps->appsList : [];
                }
                break;
            case "customprice-registries":
                $appData = $request->only(['hsCode', 'page', 'size', 'inDecNum', 'StartDate', 'EndDate', 'appNum', 'tradeName', 'terms', 'method']);

                //$appData['terms'] = isset($appData['terms'])?(float)($appData['terms']):null;
                //$appData = isset($appData['pnfl']) ? $appData['pnfl'] : null;
                $response = Http::contentType("application/json")->get('http://192.168.214.135:9090/CUSTOMSPRICE/api/custom/reestor', $appData);
                if ($response->status() == 200) {
                    //$dataApps = json_decode($response->body());
                    //return $response->json();
                    $stats = $response->json();
                    if (count($stats['inDecReestr']) > 0) $stats['inDecReestr'] = collect($stats['inDecReestr'])->transform(function ($decision) {
                        return [
                            "appNum" => $decision[0],
                            "appDate" => $decision[1],
                            "personFio" => $decision[2],
                            "terms" => $decision[3],
                            "termsNm" => $decision[4],
                            "hsCode" => $decision[5],
                            "hsName" => $decision[6],
                            "tradeName" => $decision[7],
                            "method" => str_replace(0, "", $decision[8]) . " - усул",
                            "inDecNum" => $decision[9],
                            "inDecDate" => $decision[10],
                            "inDecEndDate" => $decision[11],
                            "inDecLocationNm" => $decision[12],
                            "methodNm" => $decision[13],
                            "statusNm" => $decision[14],
                            "commentEnded" => $decision[15],
                        ];
                    });
                    return response()->json($stats);
                }
                return response()->json(['status'=>$response->status(),'data'=>$response->body()]); ;

                break;
            case "posts":
                $appData = $request->only('code');
                $code = isset($appData['code']) ? $appData['code'] : "";
                $response = Http::contentType("application/json")->get('http://192.168.214.115:9080/labTifTn/api/custom/postsWith', [
                    "code" => $code,
                ]);
                if ($response->status() == 200) {
                    return $response->json();
                } else return response()->json(['error' => 'Маълумот топилмади']);
                break;

                break;
/////customsprice end
            case "test":


                dd($request->only('body'));
                $response4 = Http::withoutVerifying()->withHeaders([
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json;charset=UTF-8',
                    'X-Ca-Key' => '29162414',
                    'X-Ca-Signature' => 'RBeHxlgUlh5ihcGytzOzV9wTJyqWPYX9XZ58hOUtz6Y='
                ])
                    ->asJson()
                    //->contentType("application/json;charset=UTF-8")->
                    //accept("application/json")->
                    ->withBody('
                    {
                        "faceGroupIndexCode": "3",
                        "faceInfo": {
                            "personGivenName": "aaa111given 878778",
                            "personFamilyName": "111family 32323",
                            "sex": "2",
                            "flight": "HY12345",
                            "passport": "AA2342323",
                            "taxnum": "454545343434345454",
                            "description": "ertertretretre  ertretre rt etertert ret rtretrr retretretr"
                        },
                        "facePic": {
                            "faceBinaryData": "/9j/4AAQSkZJRgABAQEAAAAAAAD/4QBCRXhpZgAATU.."
                        },
                        "produceName":""

                    }', 'application/json')
                    ->post('https://192.168.224.193/artemis/api/frs/v1/face/single/addition', [


                    ]);
                dd($response4->json());


                break;
            case "getPData":
                $data = $request->all();
                $pnum = isset($data['pasnum']) ? $data['pasnum'] : null;
                $pdate = isset($data['pasdata']) ? $data['pasdata'] : null;
                $pdate = Carbon::parse($pdate)->format("Y-m-d");
                $pnum = strtoupper($pnum);
                //dd($pnum);
                ///dd(md5("AA4774708(:1989-03-08"));
                $md = md5($pnum . "(:" . $pdate);
                $response = Http::get('http://192.168.214.132:8080/GCPInfo/GCP_getINFO', [
                    "pasnum" => $pnum,
                    "pasdata" => $pdate,
                    "key" => $md,
                ]);
                if ($response->status() == 200) {
                    $simpleXml = simplexml_load_string($response->body());
                    $json = json_encode($simpleXml); // convert the XML string to JSON
                    $array = json_decode($json); // convert the XML string to JSON
                    return response()->json(['data' => $array]);
                }
                break;
            case "appeal":
                $data = $request->all();
                //$data['positionNm']='asdasd ';
                if (!isset($data['positionNm'])) $data['positionNm'] = " ----- ";
                $data['phoneNumber'] = str_replace('-', "", $data['phoneNumber']);
                $data['phoneNumber'] = str_replace(' ', "", $data['phoneNumber']);
                $data['phoneNumber'] = "+998" . $data['phoneNumber'];
                $data['appealType'] = $data['appealType'] ? 1 : 0;
                $data['position'] = $data['appealType'] ? '02' : '01';
                unset($data['multipartFile']);
                $response = Http::asMultipart();
                // check file is present and has no problem uploading it
                if ($request->hasFile('multipartFile') && $request->file('multipartFile')->isValid()) {
                    // get Illuminate\Http\UploadedFile instance
                    $image = $request->file('multipartFile');
                    $response->attach('multipartFile', file_get_contents($image), $image->getClientOriginalName());
                }
                $response = $response
                    ->post('http://192.168.224.18:9090/appealrestapi/upload', $data);
                if ($response->status() === 200) {
                    $appeal = $response->json('data');

                    $response1 = Http::asMultipart()->acceptJson();
                    $response1 = $response1->get('http://192.168.224.18:9090/appealrestapianswer/getResult', [
                        'password' => isset($appeal['password']) ? $appeal['password'] : null,
                        'appNum' => isset($appeal['AppNum']) ? $appeal['AppNum'] : null
                    ]);


                    if ($response1->status() === 200) {
                        return response()->json([
                            'number' => isset($appeal['AppNum']) ? $appeal['AppNum'] : null,
                            'code' => isset($appeal['password']) ? $appeal['password'] : null,
                            'appeal' => $response1->json()
                            //'created_at' => date('d-m-Y H:i:s', strtotime($appeal->created_at)),
                        ], 200);
                    } else
                        return response()->json([
                            'number' => isset($appeal['AppNum']) ? $appeal['AppNum'] : null,
                            'code' => isset($appeal['password']) ? $appeal['password'] : null,
                            //'created_at' => date('d-m-Y H:i:s', strtotime($appeal->created_at)),
                        ], 200);
                } else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);
            case "appeal-check":
                $data = $request->only('appNum', 'password');
                if (Auth::guard('api')->user()) {
                    $data['personPin'] = Auth::guard('api')->user()['pin'];
                    //unset($data['password']);
                }
                $response = Http::asMultipart()->acceptJson()
                    ->get('http://192.168.224.18:9090/appealrestapianswer/getResult', $data);
                if ($response->status() == 200) {
                    return response()->json([
                        'data' => $response->json(),
                        'success' => $response->status() ? true : false
                        //'created_at' => date('d-m-Y H:i:s', strtotime($appeal->created_at)),
                    ], 200);
                } else return response()->json(['error' => 'Сервер билан уланишда муаммо бор!', 'status' => false]);
            case 'gen_session':
                //return (strin g) Str::uuid();
                if (!Auth::guard('api')->user()) return response()->json(['Not authorized'], 401);
                /*                $sessions = DB::connection("db2_odbcEA")->select("Select * from Log where USERINN='" . Auth::guard('api')->user()->tin . "' and  exit is null and Last > '" . Carbon::now()->subDays(1) . "'");
                                //if (!$sessions) */
                $query = "Insert into Log  (SESID,USERINN,NAME,SERIALNUMBER,TYPE) values ('" . Str::uuid() . "','" . Auth::guard('api')->user()->tin . "','" . Auth::guard('api')->user()->sur_name . " " . Auth::guard('api')->user()->first_name . " " . Auth::guard('api')->user()->mid_name . "','" . substr(Str::uuid(), 0, 8) . "',3)";
                DB::connection("db2_odbcEA")->insert($query);
                //else return response()->json(['data' => $sessions[0]]);
                $sessions = DB::connection("db2_odbcEA")->select("Select * from Log where USERINN='" . Auth::guard('api')->user()->tin . "' and exit is null and Last > '" . Carbon::now()->subDays(1) . "' order by last desc");
                return response()->json(['data' => $sessions[0]]);
            case 'arxiv':
                //return (string) Str::uuid();
                $data = $request->only(['file_id', 'pnfl']);
                if (count($data) < 2)
                    return response()->json([
                        'success' => false,
                        'message' => 'Файл IDси ва фойдаланувчи ЖШШИРи киритилмади'], 400);

                $data['file_id'] = (int)$data['file_id'];
                $data['pnfl'] = (int)$data['pnfl'];
                if ($data['file_id'] < 1 or $data['pnfl'] < 1)
                    return response()->json([
                        'success' => false,
                        'message' => 'Файл IDси ва фойдаланувчи ЖШШИРи майдонлари хато киритилди'], 400);

                return response()->json([
                    'count' => count((new StatService())->getFileFromEArxiv($data['file_id'], $data['pnfl'])) > 0,
                    'data' => (new StatService())->getFileFromEArxiv($data['file_id'], $data['pnfl']),
                ], 200);

            default:
                if (Auth::guard('api')->user())
                    $response = $myrequest
                        ->get('http://192.168.214.159/vacancy/public/api/vakantlar/?pnfl=' . Auth::guard('api')->user()->pin);
                else $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/vakantlar/');
                break;

        }
        return response()->json([
            'success' => $response->status() === 200 ? true : false,
            'data' => json_decode($response->body())], $response->status());
    }
}

