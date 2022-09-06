<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminEventResource;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\MyEvent;
use App\Http\Controllers\Controller as ParentController;

class AdminEventController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return AdminEventResource::collection(MyEvent::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param MyEvent $event
     * @return AdminEventResource
     */
    public function show(MyEvent $event)
    {
        return AdminEventResource::make($event);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return AdminEventResource
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
            $this->extracted($data,$myevent);
            return AdminEventResource::make($myevent);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param MyEvent $event
     * @return AdminEventResource
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
            $this->extracted($data,$event);
            return AdminEventResource::make($event);
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
        $event_id=$event->id;
        if ($event->delete()) {
            $deleted = DB::table('event_translates')->where(["event_id" => $event_id])->delete();

            return response()->json([
                'success' => true], 200);
        }
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
        return AdminEventResource::collection($data);

    }
    /**
     * @param array $data
     * @param $page
     * @return void
     */
    public function extracted(array $data, $event): void
    {
        if (isset($data['translates'])) {
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
