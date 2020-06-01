<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Shop as ShopResource;
use App\Shop;
use App\User;
use App\CreateTbl;
use Image;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        

        return new ShopResource(Shop::find(1));
        // $data=Shop::all();
        //  return response()->json($data);
        //return view('client.forms');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function api()
    {
        //return ShopResource::collection(Shop::all());
        return new ShopResource(Shop::find(1));
    }
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
    
    public function store(Request $request)
    {
        $shop=new Shop();
        $shopName=$request->get('shopName');
        $area=$request->get('area');

        $shop->shop_id=$shopName.$area;
        $shop->name=$shopName;
        $shop->addr=$request->get('addr');
        $shop->area=$area;
        $shop->owner_name=$request->get('ownerName');
        $shop->owner_mobl=$request->get('ownerMobl');
        $shop->phone=$request->get('phone');
        $shop->cter_mobl=$request->get('cterMobl');
        $shop->order_mobl=$request->get('orderMobl');
        
        
        $shop->is_completed=true;
        $shop->open_hours=$request->get('openHours');
        $shop->open_at=$request->get('openAt');
        $shop->close_at=$request->get('closeAt');
        // $shop->prom_txt1=$request->get('promTxt1');
        // $shop->prom_txt2=$request->get('promTxt2');

                
        // $shop->img1="fffff";
        // $shop->img2="fffff";
        // $shop->img3="fffff";
        // /////////////
         // Handle File Upload
         if($request->hasFile('image')){
            
            $photo=$request->file('image');
            $filenameWithExt = $photo->getClientOriginalName();
        
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        
            $extension = $photo->getClientOriginalExtension();
        
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
            
            Image::make($photo)->resize(null,300)->save(public_path('shop_img/'.$fileNameToStore));                
           
          
            //Image::make($imgF)->resize(null,300)->save(public_path('test_img/'.$fileNameToStore));
        
            }
            else{
                //$fileNameToStore = 'no-user.jpg';
                $fileNameToStore='no-user.jpg';
            } 
            $shop->img=$fileNameToStore;

        if($request->hasFile('promPic')){
            
            //$photo=$request->file('promPic');
           
                $photo=$request->file('promPic');
              
                $filenameWithExt = $photo->getClientOriginalName();
            
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            
                $extension = $photo->getClientOriginalExtension();
            
                $fileNameToStore= $filename.'_'.time().'.'.$extension;
                
                Image::make($photo)->resize(null,200)->save(public_path('shop_img/'.$fileNameToStore));                
                
                
                //$tbl_img='img'.$i;
                $shop->img1=$fileNameToStore;     
            }  else{
                
           
                $shop->img1='no-user.jpg'; 
            }    
              
        if($request->hasFile('promPic2')){
                 
            $photo=$request->file('promPic2');
            $filenameWithExt = $photo->getClientOriginalName();
        
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        
            $extension = $photo->getClientOriginalExtension();
        
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
               
            Image::make($photo)->resize(null,200)->save(public_path('shop_img/'.$fileNameToStore));                
            $shop->img2=$fileNameToStore;     
            
        }else{
                
           
            $shop->img2='no-user.jpg'; 
        } 
        $shop->img3='no-user.jpg';    
        $shop->save();
        //create a menu tbl
        $newTbl=new CreateTbl;
        $newTbl->create_memu_tbl($shop_id);
        
        
       
        return view('client.forms');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //return new ShopResource(Shop::find(1));
       // $data=Shop::all();
       $data=Shop::find(1);
         return response()->json($data);
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
