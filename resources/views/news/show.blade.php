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
                <div class="flex items-center justify-between mb-4">
                    <div
                        class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {{ $news->category }}
                    </div>
                    
                    <div class="flex items-center gap-4 text-gray-500">
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span class="text-xs">{{ $news->views }} Views</span>
                        </div>
                        
                        <div x-data="{ 
                            liked: {{ $news->isLikedBy(auth()->user()) ? 'true' : 'false' }}, 
                            count: {{ $news->likes->count() }},
                            toggleLike() {
                                fetch('{{ route('news.like', $news->id) }}', {
                                    method: 'POST',
                                    headers: {
                                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    },
                                })
                                .then(res => {
                                    if(res.status === 401) {
                                        window.location.href = '{{ route('login') }}';
                                        return;
                                    }
                                    return res.json();
                                })
                                .then(data => {
                                    if (data && data.count !== undefined) {
                                        this.liked = data.liked;
                                        this.count = data.count;
                                    }
                                });
                            }
                        }">
                            <button @click="toggleLike()" :class="liked ? 'text-red-600' : 'text-gray-500'" class="flex items-center gap-1 hover:text-red-600 transition outline-none">
                                <svg class="w-4 h-4" :fill="liked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span class="text-xs" x-text="count + ' Likes'"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Konten Berita -->
                <div class="prose max-w-full mx-auto text-gray-700 mb-10 overflow-hidden">
                    {!! $news->content !!}
                </div>

                <!-- Komentar Section -->
                <div class="mt-12 border-t pt-8">
                    <h3 class="text-xl font-bold mb-6 text-gray-800">Komentar ({{ $news->comments->count() }})</h3>
                    
                    @auth
                        <form action="{{ route('comments.store', $news->id) }}" method="POST" class="mb-8">
                            @csrf
                            <textarea name="content" rows="3" required class="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 text-sm" placeholder="Tulis komentar..."></textarea>
                            <button type="submit" class="mt-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition shadow-sm">
                                Kirim Komentar
                            </button>
                        </form>
                    @else
                        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-center">
                            <p class="text-sm text-gray-600 italic">
                                Silakan <a href="{{ route('login') }}" class="text-red-600 font-bold hover:underline">login</a> untuk memberikan komentar.
                            </p>
                        </div>
                    @endauth

                    <div class="space-y-4">
                        @foreach($news->comments as $comment)
                            <div class="bg-gray-50 border border-gray-100 p-4 rounded-xl shadow-sm">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                                            {{ strtoupper(substr($comment->user->name, 0, 1)) }}
                                        </div>
                                        <div>
                                            <div class="text-sm font-bold text-gray-900">{{ $comment->user->name }}</div>
                                            <div class="text-[10px] text-gray-400">{{ $comment->created_at->diffForHumans() }}</div>
                                        </div>
                                    </div>
                                    @if(auth()->check() && (auth()->user()->role === 'admin' || auth()->user()->role === 'super_admin'))
                                        <form action="{{ route('comments.destroy', $comment->id) }}" method="POST" onsubmit="return confirm('Hapus komentar ini?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="p-1 text-gray-400 hover:text-red-600 transition">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </form>
                                    @endif
                                </div>
                                <p class="text-sm text-gray-700 leading-relaxed pl-10">{{ $comment->content }}</p>
                            </div>
                        @endforeach

                        @if($news->comments->isEmpty())
                            <p class="text-sm text-gray-400 text-center py-6">Belum ada komentar. Jadilah yang pertama!</p>
                        @endif
                    </div>
                </div>

                <div class="text-center mt-12 pt-8 border-t">
                    <a href="{{ route('news.index') }}"
                        class="inline-block px-6 py-2.5 bg-zinc-800 text-white text-sm font-semibold rounded-lg hover:bg-zinc-900 transition shadow-md">
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