@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/about.jsx', 'resources/css/app.css'])

@section('content')
    <div id="react-root-about"></div>
@endsection
