<?php

namespace App\Models;

use App\Filters\QueryFilter;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Room extends Model
{
    use HasFactory;
    use Sluggable;

    protected $fillable = ['name', 'slug', 'thumbnail', 'facilities', 'price', 'check_in', 'check_out', 'booked'];

    public function sluggable() :array{
        return [
            'slug'=> [
                'source'=> 'name'
            ]
        ];
    }
    public function facilities(){
        return $this->hasOne(RoomFacilities::class);
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter){
        return $filter->apply($builder);
    }


}
