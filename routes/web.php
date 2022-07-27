<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/rooms', '\App\Http\Controllers\RoomController@index');
Route::get('/room/{id}', '\App\Http\Controllers\RoomController@show');
Route::post('/room/{id}', '\App\Http\Controllers\RoomController@booking');
