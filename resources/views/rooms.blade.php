@extends('layouts.layout')

@section('content')
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Rooms</h1>
            @if(session('success'))
                <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div class="flex">
                        <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                            <p class="font-bold">{{ session('success') }}</p>
                        </div>
                    </div>
                </div>
            @endif
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
                                Find the room of your dream
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            <form action="/rooms" class="filter-form" method="get">
                                <input type="text" name="dates" id="datepicker" class="border-blue-500 border-2 rounded-lg  pl-5 pr-5 pb-1 pt-1"/>
                                <button type="submit" class="bg-blue-500 text-white pl-5 pr-5 pb-2 pt-2 rounded-lg hover:bg-blue-600 transition-all">Check Dates</button>
                            </form>
                            <span>Available rooms: {{$rooms->total()}}</span>
                            </p>
                        </div>
                        @if(!empty($rooms))
                            <div class="mt-10 mb-10">
                                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                    @foreach($rooms as $room)
                                        <div class="relative bg-gray-200 p-5 rounded-md ">
                                            <div class="absolute right-5 top-5">
                                                @if($room->price == $bestPrice)
                                                    <span style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-orange-200 text-orange-800 rounded-full ">Good Price</span>
                                                @endif

                                                @if($bigRoom == $room->facilities->size)
                                                    <span style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-sm px-3 bg-blue-200 text-blue-800 rounded-full ">Big Room</span>
                                                @endif
                                            </div>
                                            <div class="flex justify-content-between ">


                                                <div class="flex items-center justify-center h-20 w-20 rounded-md overflow-hidden  text-white">
                                                    <img src="{{$room->thumbnail}}" style="object-fit: cover;" class="h-20 w-20" alt="">
                                                </div>
                                                <div><p class="ml-2 text-lg leading-6 font-medium text-gray-900">{{$room->name}}</p>
                                                    <p class="ml-2 text-lg leading-6 font-medium text-gray-400">Price: <span class="text-gray-500">{{$room->price}} $</span></p>
                                                </div>
                                            </div>
                                            <div class="mt-2 ml-24 text-base text-gray-500">
                                                <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-1 mb-10">
                                                    <li>Size: {{$room->facilities->size}}</li>
                                                    <li>Bedrooms: {{ $room->facilities->bedrooms }}</li>
                                                    <li>Parking: @if($room->facilities->parking == 1) yes @else no @endif </li>
                                                    <li>Wi-Fi: @if($room->facilities->wi_fi == 1) yes @else no @endif </li>
                                                </ul>
                                                @php
                                                    $url = parse_url(url()->full());
                                                    $params = (isset($url['query']))? '?'.$url['query'] : '';
                                                @endphp

                                                <a href="/room/{{$room->id.$params}}" class="bg-green-500 text-white pl-5 pr-5 pb-2 pt-2 rounded-lg hover:bg-green-600 transition-all mt-20">Details</a>
                                            </div>
                                        </div>
                                    @endforeach
                                </dl>
                            </div>
                        @endif
                    </div>
                </div>
                <div class="ml-auto mr-auto">{{ $rooms->withQueryString()->links() }}</div>
            </div>
            <!-- /End replace -->
        </div>
    </main>
@endsection
