<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use App\Models\MyEvent;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return EventResource::collection(MyEvent::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param MyEvent $event
     * @return EventResource
     */
    public function show(MyEvent $event)
    {
        return EventResource::make($event);
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
        $events =MyEvent::orderBy('date','asc')->get()->transform(function ($item) use ($request, $months) {
            $item=EventResource::make($item)->toArray($request);
            return [
                'month' => intval(date('m', strtotime($item['date']))),
                'day' => intval(date('d', strtotime($item['date']))),
                'title' => $item['title']
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
