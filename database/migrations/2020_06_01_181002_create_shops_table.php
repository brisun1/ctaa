<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('name',30);
            $table->string('shop_id');
            $table->string('addr',100);
            $table->string('area',50);
            $table->string('phone',30);
            $table->string('owner_name',30);
            $table->string('owner_mobl',30);
            $table->string('cter_mobl',30);
            $table->string('order_mobl',30);
            $table->string('img');
            $table->string('img1');
            $table->string('img2');
            $table->string('img3');
            $table->text('open_hours');
            $table->time('open_at',2);
            $table->time('close_at',2);
            $table->boolean('is_completed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shops');
    }
}
