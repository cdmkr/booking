@extends('layouts.layout')

@section('content')
    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Main</h1>
        </div>
    </header>
    <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <div class="overflow-hidden border-4 border-dashed border-gray-200 rounded-lg h-96 relative">
                    <img src="{{asset('images/main.jpeg')}}" alt="" class="opacity-80">
                    <a href="/rooms" class="absolute text-xl z-10 bg-blue-500 text-white pl-20 pr-20 pb-2 pt-2 rounded-lg hover:bg-blue-600 transition-all" style="top:50%; width: fit-content; transform: translate(-50%, -50%); margin: auto; left: 50%; right: 50%;">Find a room</a>
                </div>
            </div>
            <!-- /End replace -->
        </div>
    </main>
@endsection
