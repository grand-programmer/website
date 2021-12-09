<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appeal;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\Input;

class AppealController extends Controller
{
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'surname',
                'name',
                'lastname',
                'address',
                'email',
                'state',
                'retry',
                'work',
                'phone',
                'text',
                'date_birth',
                'yur_shaxs'
            );
            $validator = Validator::make($data, [
                'surname' => 'required|min:3|max:255',
                'name' => 'required|min:3|max:255',
                'lastname' => 'required|min:3|max:255',
                'address' => 'required|min:3|max:255',
                'email' => 'email|nullable',
                'state' => 'required',
                'retry' => 'nullable',
                'work' => 'required',
                'phone' => 'required',
                'text' => 'required|min:3',
                'date_birth' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            $appeal = Appeal::create($data);
            if ($request->file()) {
                $file_ext = $request->file('file')->getClientOriginalExtension();
                $file_name = time() . "." . $file_ext;
                $request->file('file')->storeAs('uploads/appeals', $file_name, 'public');
                $appeal->file = $file_name;
            }
            $appeal->number = Str::random(10);
            $appeal->save();
            return response()->json([
                'number' => $appeal->id,
                'code' => $appeal->number,
                'created_at' => date('d-m-Y H:i:s', strtotime($appeal->created_at)),
            ], 200);
        }
    }

    public function index()
    {
        return Appeal::all()->toJson();//array_reverse($appeals);
    }

    public function check(Request $request): \Illuminate\Http\JsonResponse
    {
        $data = $request->only('appeal_id', 'appeal_code');
        if ($appeal = Appeal::find((int)$data['appeal_id'])) {
            if ($appeal->number == $data['appeal_code']) {
                return response()->json($appeal, 200);
            }
        }
        return response()->json([
            'error'
        ], 401);

    }

    public function destroy($id = null)
    {
        if (Appeal::find($id)) {
            Appeal::find($id)->delete();

            return response()->json([
                'success'
            ], 200);
        } else
            return response()->json([
                'error'
            ], 401);
    }
}
