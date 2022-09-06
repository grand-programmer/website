<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use App\Models\MyEvent;
use App\Http\Controllers\Controller as ParentController;

class AdminEventController extends ParentController
{
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
        return response()->json(['status' => true, 'data' => $event], 200);
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
}
