<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrganisationResource;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrganizationController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->only(
            'slug',
        );
        if (isset($data['slug']))
            if ($org = Organization::where(['slug' => $data['slug']])->first())
                return response()->json(['data' => OrganisationResource::make($org)], 200); else return response()->json([
                'success' => false,
                'error' => "Маълумот топилмади",
            ]);
        return response()->json(['data' => OrganisationResource::collection(Organization::all())], 200);
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
                'manzil',
                'rahbariyat',
                'posts',
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'manzil' => 'array|required',
                'rahbariyat' => 'array|required',
                'posts' => 'array',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }


            if ($request->file()) {
                if($request->file('manzil.image')) {
                    $file_ext = $request->file('manzil.image')->getClientOriginalExtension();
                    $file_name = time() . "." . $file_ext;
                    $request->file('manzil.image')->storeAs('uploads/boshqarmalar/manzil', $file_name, 'public');
                    //dd($data);
                    $data['manzil']['image'] = $file_name;
                }
                if($request->file('rahbariyat.boshliq.image')) {
                    $file_ext = $request->file('rahbariyat.boshliq.image')->getClientOriginalExtension();
                    $file_name = time() . "." . $file_ext;
                    $request->file('rahbariyat.boshliq.image')->storeAs('uploads/boshqarmalar/boshliq', $file_name, 'public');
                    //dd($data);
                    $data['rahbariyat']['boshliq']['image'] = $file_name;
                }
                foreach($data['rahbariyat']['orinbosar'] as $k => $orinbosar):
                if($request->file('rahbariyat.orinbosar.'.$k.'.image')) {
//dd('aa');
                    $file_ext = $request->file('rahbariyat.orinbosar.'.$k.'.image')->getClientOriginalExtension();
                    $file_name = $k.time() . "." . $file_ext;
                    $request->file('rahbariyat.orinbosar.'.$k.'.image')->storeAs('uploads/boshqarmalar/orinbosar', $file_name, 'public');
                    //dd($data);
                    $data['rahbariyat']['orinbosar'][$k]['image'] = $file_name;
                }
                endforeach;



            }

            $mdata['title'] = $data['title'];
            $mdata['manzil'] = json_encode($data['manzil']);


            $mdata['rahbariyat'] = json_encode($data['rahbariyat']);
            if(isset($data['posts'])) $mdata['postlar'] = json_encode($data['posts']);
            $org = Organization::create($mdata);
            $org->save();
            return response()->json($org, 200);
        }

    }

    public function show(Organization $organization)
    {
        return response()->json(['data' => OrganisationResource::make($organization)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Organization $organization
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Organization $organization)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'manzil',
                'rahbariyat',
                'posts',
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'manzil' => 'array|required',
                'rahbariyat' => 'array|required',
                'posts' => 'array',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }


            if ($request->file()) {
                if($request->file('manzil.image')) {
                    $file_ext = $request->file('manzil.image')->getClientOriginalExtension();
                    $file_name = time() . "." . $file_ext;
                    $request->file('manzil.image')->storeAs('uploads/boshqarmalar/manzil', $file_name, 'public');
                    //dd($data);
                    $data['manzil']['image'] = $file_name;
                }
                if($request->file('rahbariyat.boshliq.image')) {
                    $file_ext = $request->file('rahbariyat.boshliq.image')->getClientOriginalExtension();
                    $file_name = time() . "." . $file_ext;
                    $request->file('rahbariyat.boshliq.image')->storeAs('uploads/boshqarmalar/boshliq', $file_name, 'public');
                    //dd($data);
                    $data['rahbariyat']['boshliq']['image'] = $file_name;
                }
                foreach($data['rahbariyat']['orinbosar'] as $k => $orinbosar):
                    if($request->file('rahbariyat.orinbosar.'.$k.'.image')) {
//dd('aa');
                        $file_ext = $request->file('rahbariyat.orinbosar.'.$k.'.image')->getClientOriginalExtension();
                        $file_name = $k.time() . "." . $file_ext;
                        $request->file('rahbariyat.orinbosar.'.$k.'.image')->storeAs('uploads/boshqarmalar/orinbosar', $file_name, 'public');
                        //dd($data);
                        $data['rahbariyat']['orinbosar'][$k]['image'] = $file_name;
                    }
                endforeach;



            }

            $organization->title = $data['title'];
            $organization->manzil = json_encode($data['manzil']);
            $organization->rahbariyat = json_encode($data['rahbariyat']);
            if(isset($data['posts'])) $organization->postlar = json_encode($data['posts']);
            //$appeal->number = Str::random(10);
            $organization->save();

            return response()->json($organization, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Organization $organization)
    {
        $organization->delete();
        return response()->json([
            'success'], 200);
    }

}
