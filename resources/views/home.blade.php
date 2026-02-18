{{-- resources/views/home.blade.php --}}
@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/app.jsx', 'resources/css/app.css'])

@section('content')
    <div id="react-root"></div>
@endsection