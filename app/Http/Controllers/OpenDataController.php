<?php

namespace App\Http\Controllers;

use App\Exports\ByudExport;
use App\Http\Resources\OpenDataResource;
use App\Http\Resources\StatServiceResource;
use App\Models\OpenDataFile;
use App\Models\OpenDataItem;
use App\Models\StatData;
use App\Models\StatService as ServiceStat;
use App\Services\StatService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\Console\Input\Input;

class OpenDataController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->only(['search', 'page']);
        if(isset($data['search'])){
            $items=OpenDataItem::where('title','like', '%' . $data['search'] . '%')->where(['language'=>app()->getLocale()])->pluck('relation_id');
            $response=OpenDataItem::with('openDataFiles')->whereIn('id',$items)->where(['relation_id' => null])->orderBy('sort')->paginate(10);
        } else
        $response=OpenDataItem::with('openDataFiles')->where(['relation_id' => null])->orderBy('sort')->paginate(10);
        if(!$response) return response()->json([
            'data'=>[],
            'total'=> 0,
            'page'=> 1
        ]);
        return response()->json([
            'data'=>OpenDataResource::collection($response),
            'total'=> $response->total(),
            'page'=> $response->currentPage()
        ]);
    }
    public function show(OpenDataItem $opendata, Request $request)
    {
        $data = $request->only(['year', 'quarter']);
        $years=OpenDataFile::where(['item_id'=>$opendata->id])->groupBy('year')->get( 'year');
        if(isset($data['quarter']))
        $response=OpenDataFile::where(['item_id'=>$opendata->id, 'year'=>isset($data['year'])?$data['year']:Carbon::now()->year, 'quarter'=>$data['quarter']?$data['quarter']:null])->first();
        else $response=OpenDataFile::where(['item_id'=>$opendata->id, 'year'=>isset($data['year'])?$data['year']:Carbon::now()->year])->first();
        if(!$response) return response()->json(["data"=>null],404);
        return response()->json(["data"=>$response, "years"=>$years]);
    }

}
