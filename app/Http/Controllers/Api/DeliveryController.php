<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Delivery as DeliveryResource;
use App\Delivery;
use App\Shop;

class DeliveryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$shopId)
    {
        $deli=new Delivery();
        //validation goes here
        $dist1=$request->dist1;
        $dist15=$request->dist15;
        $dist2=$request->dist1;
        $dist25=$request->dist1;
        $dist3=$request->dist1;
        $dist4=$request->dist1;
        $servLimit=$request->servLimit;
        if($dist1 && $dist15 && $dist2 && $dist25 && $dist3 && $dist4 && $servLimit)
        {
        $deli->dist1=$dist1;
        $deli->dist15=$dist15;
        $deli->dist2=$dist2;
        $deli->dist25=$dist25;
        $deli->dist3=$dist3;
        $deli->dist4=$dist4;
        $deli->servLimit=$servLimit;
        $deli->shop_id=$shopId;
        }
                $deli->save();
            
                
           
       
            
        return "delivery success";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=Shop::find($id)->delivery;
        
        return new DeliveryResource($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
