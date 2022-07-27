<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Booking</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>
<body class="antialiased">
<div class="min-h-full">
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="92.071px" height="92.071px" viewBox="0 -4.99 92.071 92.071">
                            <g id="Group_21" data-name="Group 21" transform="translate(-285.564 -881.7)">
                                <path id="Path_63" data-name="Path 63" d="M361.5,925.2v25.9c0,5.7-3.4,10.2-7.5,10.2H306.9c-4.1,0-7.5-4.6-7.5-10.2V925.2" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                                <path id="Path_64" data-name="Path 64" d="M289.1,921.7l33.1-33.1s3.2-4.4,8.4-4.4,9.1,4.3,9.1,4.3l34.4,34.4" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                                <path id="Path_65" data-name="Path 65" d="M335.6,950.1H325.3a3.159,3.159,0,0,1-3.2-3.2v-14a3.159,3.159,0,0,1,3.2-3.2h10.3a3.159,3.159,0,0,1,3.2,3.2v14A3.159,3.159,0,0,1,335.6,950.1Z" fill="none" stroke="#2b4ea2" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5"/>
                            </g>
                        </svg>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="{{asset('/')}}" class="px-3 py-2 rounded-md text-sm font-medium  {{ (request()->is('/')) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }}" aria-current="page">Main</a>

                            <a href="{{asset('/rooms')}}" class="px-3 py-2 rounded-md text-sm font-medium  {{ (request()->is('rooms')) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }}">Rooms List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="{{asset('/')}}" class="px-3 py-2 block rounded-md text-base font-medium  {{ (request()->is('/')) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }}" >Main</a>

                <a href="{{asset('/rooms')}}" class="px-3 py-2 block rounded-md text-base font-medium  {{ (request()->is('rooms')) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' }}">Rooms List</a>
            </div>
        </div>
    </nav>

    @yield("content")
</div>
</body>

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</html>
