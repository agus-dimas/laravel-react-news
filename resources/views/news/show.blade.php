@extends('layouts.app')

@section('content')
    <div class="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-4 pt-24 sm:px-6 lg:px-8">
        <div class="max-w-2xl w-full bg-white shadow-md rounded-lg p-6">
            <!-- Judul Berita -->
            <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">
                {{ $news->title }}
            </h1>

            <!-- Gambar Berita -->
            @if($news->image)
                <img src="{{ asset('storage/' . $news->image) }}" alt="{{ $news->title }}"
                    class="w-full h-64 sm:h-80 md:h-96 object-cover rounded mb-6">
            @endif

            <!-- Konten Berita -->
            <div class="prose max-w-full mx-auto text-gray-700 mb-6">
                {!! $news->content !!}
            </div>

            <!-- Tombol Kembali -->
            <div class="text-center">
                <a href="{{ route('news.index') }}"
                    class="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Kembali ke Berita
                </a>
            </div>
        </div>
    </div>
@endsection