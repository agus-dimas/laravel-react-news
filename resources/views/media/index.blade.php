@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/media.jsx', 'resources/css/app.css'])

@section('content')
    <div id="react-root-media"></div>
@endsection
