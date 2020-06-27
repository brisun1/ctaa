<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
           
            $table->string('shop_id');
            $table->string('cname',30)->nullable();
            $table->string('deliAddr',100);
       
            $table->string('contactPhone',30);
     
            $table->string('order_mobl',30)->nullable();
            $table->string('email');
            $table->boolean('cardPay');
            $table->boolean('delivery');
            $table->string('orderRef');
            $table->boolean('isComplete')->nullable();
            $table->boolean('cilentRes')->nullable();
            //$table->dateTime('created_at', 0);
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
        Schema::dropIfExists('orders');
    }
}
