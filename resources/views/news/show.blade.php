@extends('layouts.app')

@section('content')
    <div class="min-h-screen bg-cover bg-gray-100 bg-center bg-no-repeat bg-fixed py-12 px-4 pt-24 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6 lg:gap-8">

            <!-- Konten Utama (Kiri) -->
            <div class="lg:w-2/3 bg-white shadow-md rounded-lg p-6 h-fit">
                <!-- Judul Berita -->
                <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">
                    {{ $news->title }}
                </h1>

                <!-- Gambar Berita -->
                @if($news->image)
                    <img src="{{ asset('storage/' . $news->image) }}" alt="{{ $news->title }}"
                        class="w-full h-64 sm:h-80 md:h-96 object-cover rounded mb-6">
                @endif
                <div
                    class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mb-4">
                    {{ $news->category }}
                </div>
                <!-- Konten Berita -->
                <div class="prose max-w-full mx-auto text-gray-700 mb-6">
                    {!! $news->content !!}
                </div>

                <div class="text-center">
                    <a href="{{ route('news.index') }}"
                        class="inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700 transition">
                        Kembali ke Berita
                    </a>
                </div>
            </div>

            <!-- Rekomendasi Berita -->
            <div class="lg:w-1/3">
                <div class="bg-white shadow-md rounded-lg p-6 sticky top-24">
                    <h2 class="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Rekomendasi Berita</h2>
                    <div class="space-y-6">
                        @foreach($recommendations as $item)
                            <a href="{{ route('news.show', $item->id) }}"
                                class="group flex gap-4 items-start hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors">
                                <!-- Gambar  -->
                                <div class="w-27 h-24 flex-shrink-0">
                                    @if($item->image)
                                        <img src="{{ asset('storage/' . $item->image) }}" alt="{{ $item->title }}"
                                            class="w-full h-full object-cover rounded-md group-hover:opacity-90 transition-opacity">
                                    @else
                                        <div
                                            class="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-gray-400 group-hover:opacity-90 transition-opacity">
                                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                        </div>
                                    @endif
                                </div>
                                <!-- Judul & Deskripsi -->
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-sm font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2 mb-1">
                                        {{ $item->title }}
                                    </h3>
                                    <p class="text-xs text-gray-500 line-clamp-2">
                                        {{ strip_tags($item->content) }}
                                    </p>
                                    <span class="text-[10px] text-gray-400 mt-2 block">
                                        {{ $item->created_at->diffForHumans() }}
                                    </span>
                                </div>
                            </a>
                        @endforeach

                        @if($recommendations->isEmpty())
                            <p class="text-sm text-gray-500 text-center py-4">Belum ada rekomendasi berita.</p>
                        @endif
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection