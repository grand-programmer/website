<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminEventResource;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Models\MyEvent;
use App\Http\Controllers\Controller as ParentController;

class AdminEventController extends ParentController
{
    public function setLocale(Request $request){
        $data=$request->only(['data','lang']);
        $mylanguage=[];
        //dd($data);
        if(is_array($data['data']))
        {
            foreach($data['data'] as $localItem){
                if(isset($localItem[$data['lang']])) $mylanguage[$data['lang']][$localItem['key']]=isset($localItem[$data['lang']])?$localItem[$data['lang']]:"";
                /*
                 * if(isset($localItem['ru'])) $mylanguage['ru'][$localItem['key']]=isset($localItem['ru'])?$localItem['ru']:"";
                if(isset($localItem['oz'])) $mylanguage['oz'][$localItem['key']]=isset($localItem['oz'])?$localItem['oz']:"";
                if(isset($localItem['en'])) $mylanguage['en'][$localItem['key']]=isset($localItem['en'])?$localItem['en']:"";*/
            }
        }


        File::put(base_path('resources/js/locales/dynamic/'. $data['lang'] .'.json'), json_encode($mylanguage[$data['lang']],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        /*File::put(base_path('resources/js/locales/dynamic/oz.json'), json_encode($mylanguage['oz'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        File::put(base_path('resources/js/locales/dynamic/uz.json'), json_encode($mylanguage['uz'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        File::put(base_path('resources/js/locales/dynamic/ru.json'), json_encode($mylanguage['ru'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));*/

        return response()->json(['success' => true], 200);
    }
    public function addLocale(Request $request){
        $data=$request->only(['key']);
        $translateKeys=json_decode(File::get(base_path('resources/js/locales/dynamic/uz.json')), JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        $translateKeys[$data['key']]= '';

        File::put(base_path('resources/js/locales/dynamic/uz.json'), json_encode($translateKeys,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        /*File::put(base_path('resources/js/locales/dynamic/oz.json'), json_encode($mylanguage['oz'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        File::put(base_path('resources/js/locales/dynamic/uz.json'), json_encode($mylanguage['uz'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
        File::put(base_path('resources/js/locales/dynamic/ru.json'), json_encode($mylanguage['ru'],JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));*/

        return response()->json(['success' => true], 200);
    }
    public function getLocales(Request $request){
        $data=[];
        $data['en']=json_decode(File::get(base_path('resources/js/locales/dynamic/en.json')));
        $data['uz']=json_decode(File::get(base_path('resources/js/locales/dynamic/uz.json')));
        $data['oz']=json_decode(File::get(base_path('resources/js/locales/dynamic/oz.json')));
        $data['ru']=json_decode(File::get(base_path('resources/js/locales/dynamic/ru.json')));
        return response()->json(['success' => true,'data'=>$data], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['success' => true, 'data' => MyEvent::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param MyEvent $event
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(MyEvent $event)
    {
        return response()->json(['status' => true, 'data' => AdminEventResource::make($event)], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'title',
                'date',
                'translates'
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3',
                'date' => 'date|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $data['date'] = date('Y-m-d', strtotime($data['date']));
            $myevent = MyEvent::create($data);
            //$appeal->number = Str::random(10);
            $myevent->save();
            $this->update_translates($data, $myevent);
            return response()->json($myevent, 200);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param MyEvent $event
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, MyEvent $event)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'date',
                'translates'
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3',
                'date' => 'date|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $data['date'] = date('Y-m-d', strtotime($data['date']));
            //dd(date('Y-m-d',$string));

            $event->update($data);
            //$appeal->number = Str::random(10);
            $event->save();
            $this->update_translates($data, $event);
            return response()->json($event, 200);
        }
        return response()->json('error', 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param MyEvent $event
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(MyEvent $event)
    {
        if ($event->delete())
            return response()->json([
                'success' => true], 200);
        else
            return response()->json([
                'success' => false], 401);
    }

    public function getForFront(Request $request)
    {
        $months = [
            1 => 'январ',
            2 => 'феврал',
            3 => 'март',
            4 => 'апрел',
            5 => 'май',
            6 => 'июнь',
            7 => 'июль',
            8 => 'август',
            9 => 'сентябр',
            10 => 'октябр',
            11 => 'ноябр',
            12 => 'декабр',
        ];
        $events = MyEvent::orderBy('date','asc')->get()->transform(function ($item) use ($months) {
            return [
                'month' => intval(date('m', strtotime($item->date))),
                'day' => intval(date('d', strtotime($item->date))),
                'title' => $item->title
            ];
        })->groupBy('month')->all();
        $data = (new Collection($months))->transform(function ($item, $key) use ($events) {
            return [
                'month' => $item,
                'items' => (isset($events[$key])) ? $events[$key]->all() : null,
            ];

        });
        return response()->json(['data' => $data], 200);

    }

    /**
     * @param array $data
     * @param $event
     * @return void
     */
    public function update_translates(array $data, $event)
    {
        if (isset($data['translates'])) {
            //$data['translates'] = json_decode($data['translates'], true);
            //dd($data['translates']);
            $translates = [];
            if (is_array($data['translates'])) {
                foreach ($data['translates'] as $language => $translate) {
                    if (is_array($translate)) {
                        if (strlen($translate['title']) > 3)
                            DB::table('event_translates')
                                ->updateOrInsert(
                                    ['language' => $language, 'event_id' => $event->id],
                                    [
                                        'title' => $translate['title'] ?? "",
                                    ]
                                );
                    }
                }
            }
        }
    }
}
