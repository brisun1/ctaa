<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function carOwner()
    {
        return $this->hasOneThrough(
            'App\Owner',
            'App\Menu',
            'shop_id', // Foreign key on menus table...
            'menu_id', // Foreign key on owners table...
            'id', // Local key on mechanics table...
            'id' // Local key on menus table...
        );
    }
}
