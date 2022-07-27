@extends('layouts.layout')

@section('content')
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Room</h1>
        </div>
    </header>
    <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {{$room->name}}
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            </p>
                        </div>
                        @if(!empty($room))
                            <div class="mt-10 mb-10">
                                <div class="space-y-10 md:space-y-0">
                                    <div class="relative bg-gray-200 p-5 rounded-md ">
                                        <dt class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-1 ">


                                            <div class="flex items-center justify-center rounded-md overflow-hidden  text-white">
                                                <img src="{{$room->thumbnail}}" style="object-fit: cover;" class="h-200 w-200" alt="">
                                            </div>
                                            <div><p class="ml-2 text-lg leading-6 font-medium text-gray-900"></p>
                                                <p class="text-lg leading-6 font-medium text-gray-900">Price: <span class="text-gray-500">{{$room->price}} $</span></p>
                                                <h2 class="mt-10 mb-10 text-xl">Facilities:</h2>
                                                <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-1 ">
                                                    @if(!empty($room->facilities))
                                                        <li>Size: {{ $room->facilities->size }}44</li>
                                                        <li>Bedrooms: {{ json_decode($room->facilities)->bedrooms }}</li>
                                                        <li>Parking: @if(json_decode($room->facilities)->parking == 1) yes @else no @endif </li>
                                                        <li>Wi-Fi: @if(json_decode($room->facilities)->wi_fi == 1) yes @else no @endif </li>
                                                    @endif
                                                </ul>
                                            </div>
                                        </dt>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                    <h1 class="text-3xl font-bold text-gray-900 mb-10" style="text-align: center">Booking form</h1>
                    @if($errors->any())
                        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                            @foreach ($errors->all() as $error)
                                <p>{{ $error }}</p>
                            @endforeach
                        </div>
                    @endif
                    <div class="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 flex justify-center">


                        <form action="/room/{{$room->id}}" method="POST" class="w-full max-w-xs booking-form">
                            @csrf

                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Full Name
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input value="{{@old('name')}}" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="name" id="name">
                                </div>
                            </div>


                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Phone Number
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input value="{{@old('phone')}}" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="phone" id="phone">
                                </div>
                            </div>


                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Email
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" name="email" id="email">
                                </div>
                            </div>


                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Check-in
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                           type="text"
                                           disabled
                                           name="check_in"
                                           value="@if($userDates) {{ $userDates[0] }} @else {{  $room->check_in }} @endif">
                                </div>
                            </div>

                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Check-out
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <input
                                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        type="text"
                                        disabled
                                        name="check_out"
                                        value="@if($userDates) {{ $userDates[1] }} @else {{  $room->check_out }} @endif">
                                </div>
                            </div>

                            <div class="md:flex md:items-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Guests
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    <select name="guests" id="guests" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                                        <option value="1">1</option>
                                        <option value=2>2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                    </select>
                                </div>
                            </div>
                            <input type="submit" value="Book Now" class="bg-green-500 text-white pl-5 pr-5 pb-2 pt-2 rounded-lg hover:bg-green-600 transition-all mt-10">
                        </form>
                    </div>
                </div>
            </div>
            <!-- /End replace -->
        </div>
    </main>
@endsection
