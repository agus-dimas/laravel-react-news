@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/news.jsx', 'resources/css/app.css'])

@section('content')
    <div id="react-root-news"></div>
@endsection
