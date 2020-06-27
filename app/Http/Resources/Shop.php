<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Shop extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'addr' => $this->addr,
            'shop_id' => $this->shop_id,
            'area' => $this->area,
            'phone' => $this->phone,
            'owner_name' => $this->owner_name,
            'owner_mobl' => $this->owner_mobl,
            'cter_mobl' => $this->cter_mobl,
            'order_mobl' => $this->order_mobl,
            'open_hours' => $this->open_hours,
            'open_at' => $this->open_at,
            'close_at' => $this->close_at,
            'img' => $this->img,
            'img1' => $this->img1,
            'prom_txt1'=>$this->prom_txt1,
            'img2' => $this->img2,
            'prom_txt2'=>$this->prom_txt2,
            'img3' => $this->img3,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
