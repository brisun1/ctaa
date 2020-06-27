<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Shop;
use App\Menu;
use App\Http\Resources\MenuCollection;
use Illuminate\Support\Facades\Schema;



class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    // function __construct(Request $request ,$shop_id)
    // {
        
    //     $shop=Shop::find($shop_id)->get();
    //     $sid=$shop->id;
    //     $sname=$shop->name;
    //     $sarea=$shop->area;
    //     $tbl_name='menu_'.$sname.$sarea.$sid;
    //     $this->setTable($tbl_name);
        
    // }
        
    public function index()
    {
       $menu=Menu::all();
        
        //  return response()->json($data);
        return view('client.menuForm')->with('menu',$menu);
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
    public function store(Request $request, $str_table)
    {
        // $menu=new Menu();

        // $menu->setTable("menu_".$str_table);
        $tbl_name="menu_".$str_table;
        //validation goes here
       if($request->has('fname')){        
        $cat=$request->cat;
        //return "here in contrller";
        $fid=$request->fid;
        $fname=$request->fname;
        $price=$request->price;
        $catNum=$request->catNum;
        $note=$request->note;
       }
        //$msg=var_dump($data));
       // $cat=json_encode($data);
       if(isset($fname)){
           for($i=0;$i<sizeof($fname);$i++){
            if(isset($fname[$i])){
                $menu=new Menu();
                $menu->setTable($tbl_name);
                $index=$catNum[$i];
                $menu->fid=$fid[$i];
                $menu->fname=$fname[$i];
                $menu->price=$price[$i];
                $menu->catNum=$index;
                $menu->cat=$cat[$index];
                if(isset($note[$i])){
                    $menu->note=$note[$i];
                }else{
                    $menu->note=""; 
                }
               
                $menu->save();
            }
                
           }
       }
            
        return "Helloppppppppppppppppppppppppppp";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($str_table)
    {
        // $tbl_bool=checkTable($shop_id);
        // if($tbl_bool==false){return;}
        //return;
        // $menus=new Menu();
        // $i=0;
        // foreach($menus->get() as $menu){
        //     if(isset($menu->fname)){
        //         $data[$i]=$menu;
        //     }
        // }
        $menu=new Menu();
        $tbl_name="menu_".$str_table;
        $menu->setTable($tbl_name);
        if (!Schema::hasTable($tbl_name))
        // return;
       //return response()->json($menu->get());
    
   
        
        //     $data=new MenuResource($food);
           
       return new MenuCollection($menu);
       else return;
       // return new MenuCollection($data);
      
    //   $data=Shop::find(1);
    //       return response()->json($data);
    
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
    // public function checkTable($shop_id){
    //     $shop=Shop::find($shop_id)->get();
    //     $sid=$shop->id;
    //     $sname=$shop->name;
    //     $sarea=$shop->area;
    //     $tbl_name='menu_'.$sname.$sarea.$sid;
    //     if (!Schema::hasTable($tbl_name)){
    //         $tbl_exist=false;
    //     }
    // }
}
