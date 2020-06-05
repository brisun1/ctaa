<?php

namespace App;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Shop;

class CreateTbl extends Model
{
    public function create_memu_tbl(){
        $shops = App\Shop::find(1)->shops;
        foreach ($shops as $shop) {
            $sid=$shop->id;
            $sname=$shop->name;
            $sarea=$shop->area;
            $tbl_name=$sname.$sarea.$sid.'_menu';

                if (!Schema::hasTable($tbl_name)){
                    Schema::create($tbl_name, function($table)
                    {
                        $table->id();
                        $table->string('fid');
                        $table->string('fname');
                        $table->unsignedDecimal('price', 5, 2);
                        $table->string('cat',20);
                        $table->tinyInteger('note',120);
                        $table->timestamps();
                    });
                }
            }
        }
}
