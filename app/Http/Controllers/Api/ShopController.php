<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Shop as ShopResource;
use App\Shop;
use App\Menu;
//use App\Delivery;
use App\User;
use App\CreateTbl;
use Image;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
//use Auth;
class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $user = Auth::user();
        
        return ShopResource::collection(Shop::all());
         //return new ShopResource(Shop::all());
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
        $shop=new Shop;
       
        //$shop->user_id=Auth::id();auth('api')->user()
        //return "auth uer id ".Auth::id()."tttttttt";
        $shopName=$request->get('shopName');
        $area=$request->get('area');
        $shop->user_id=Auth::id();
        $shop->shop_id=$shopName.$area;
        $shop->name=$shopName;
        $shop->addr=$request->get('addr');
        $shop->area=$area;
        
        $shop->owner_name=$request->get('ownerName');
        $shop->owner_mobl=$request->get('ownerMobl');
        $shop->phone=$request->get('phone');
        $shop->cter_mobl=$request->get('cterMobl');
        $shop->order_mobl=$request->get('orderMobl');
        
        $shop->is_completed=false;
        $shop->week_open=$request->get('weekOpen');
        $shop->week_close=$request->get('weekClose');
        $shop->fri_open=$request->get('friOpen');
        $shop->fri_close=$request->get('friClose');
        $shop->sat_open=$request->get('satOpen');
        $shop->sat_close=$request->get('satClose');
        $shop->sun_open=$request->get('sunOpen');
        $shop->sun_close=$request->get('sunClose');
        $shop->prom_txt1=$request->get('promTxt1');
        $shop->prom_txt2=$request->get('promTxt2');
        $shop->prom_txt3=$request->get('promTxt3');
       
         // Handle File Upload
         if($request->hasFile('image')){
            
            $photo=$request->file('image');
            $filenameWithExt = $photo->getClientOriginalName();
        
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        
            $extension = $photo->getClientOriginalExtension();
        
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
            
            Image::make($photo)->resize(300,1200)->save(public_path('storage/shop_img/'.$fileNameToStore));                
           
          
            //Image::make($imgF)->resize(null,300)->save(public_path('test_img/'.$fileNameToStore));
        
            }
            else{
                //$fileNameToStore = 'no-user.jpg';
                $fileNameToStore='no-user.jpg';
            } 
            $shop->img=$fileNameToStore;

        if($request->hasFile('promPic')){
                             
                $photo=$request->file('promPic');
              
                $filenameWithExt = $photo->getClientOriginalName();
            
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            
                $extension = $photo->getClientOriginalExtension();
            
                $fileNameToStore= $filename.'_'.time().'.'.$extension;
                
                Image::make($photo)->resize(null,200)->save(public_path('storage/shop_img/'.$fileNameToStore));                
                
                //$tbl_img='img'.$i;
                $shop->img1=$fileNameToStore;     
            }  
            // else{
                
           
            //     $shop->img1='no-user.jpg'; 
            // }    
              
        if($request->hasFile('promPic2')){
                 
            $photo=$request->file('promPic2');
            $filenameWithExt = $photo->getClientOriginalName();
        
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        
            $extension = $photo->getClientOriginalExtension();
        
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
               
            Image::make($photo)->resize(null,200)->save(public_path('storage/shop_img/'.$fileNameToStore));                
            $shop->img2=$fileNameToStore;     
            
         }
        //else{
                
           
        //     $shop->img2='no-user.jpg'; 
        // } 
        if($request->hasFile('promPic3')){
                 
            $photo=$request->file('promPic3');
            $filenameWithExt = $photo->getClientOriginalName();
        
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        
            $extension = $photo->getClientOriginalExtension();
        
            $fileNameToStore= $filename.'_'.time().'.'.$extension;
               
            Image::make($photo)->resize(null,200)->save(public_path('storage/shop_img/'.$fileNameToStore));                
            $shop->img3=$fileNameToStore;     
            
        }
        // else{
                
           
        //     $shop->img3='no-user.jpg'; 
        // } 
         
        $shop->save();
        
        //create a menu tbl
        $newTbl=new CreateTbl();
        $newTbl->create_menu_tbl();
        $newTbl->create_menu_tbl();
        return "success post";
        //return view('client.forms');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //check if menu create

     

        $shops=User::find(Auth::id())->shops;
        foreach ($shops as $shop) {
            $sid=$shop->id;
            $sname=$shop->name;
            $sarea=$shop->area;
            $tbl_name='menu_'.$sname.$sarea.$sid;
            //check if menu is set
            $menu=new Menu();
            $menu->setTable($tbl_name);
            $noMenu="";
            if($menu->count()<5){
                $noMenu=$sname.$sarea.$sid;
            }
            //check if delivery is set
            //$deli=new Delivery();
            $noDeli="";
            $deli_bool=$shop->has('delivery')->count();
            if($deli_bool==0){
                $noDeli=$sname.$sarea.$sid;
            }
        }
                
        //return  ShopResource::collection($shops);
        return  ShopResource::collection($shops)->additional(['meta' => [
            'noMenu' => $noMenu,
            'noDeli' => $noDeli,
        ]]);
      
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
