<?php

namespace App\Http\Controllers;

use App\Filters\DatesFilter;
use App\Models\Room;
use App\Models\RoomFacilities;
use App\Models\User;
use Illuminate\Http\Request;

class RoomController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DatesFilter $requset)
    {
        $baseRequest = Room::where('booked', '=', 0)->filter($requset);
        $bestPrice = $baseRequest->min('price');
        $bigRoom = RoomFacilities::all()->max('size');
        $rooms = $baseRequest->orderBy('price', 'asc')->paginate(4);

        return view('rooms', ['rooms'=>$rooms, 'bestPrice'=> $bestPrice, 'bigRoom'=> $bigRoom]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id){

        $datesParam = $request->input('dates');
        $userDates = ($datesParam)? explode("_", $datesParam) : false ;
        $room = Room::find($id);

        return view('room', ['room'=>$room, 'userDates'=> $userDates]);
    }


    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function booking(Request $request , $id){
        $request->validate([
            'name'=> 'required',
            'email' => 'required|email|',
            'phone' => 'required|numeric',
        ]);
        $room = Room::findOrFail($id);
        $room->update(['booked'=> 1]);
        return redirect('/rooms')->with('success', 'Booked successfully!');
    }


}
