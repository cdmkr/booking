<?php
namespace App\Filters;

class DatesFilter extends QueryFilter {
    public function dates($dates){
        return $this->builder->where('check_in', '<=', $dates[0])->where('check_out', ">=", $dates[1])->where('booked', '=', 0);
    }
}
