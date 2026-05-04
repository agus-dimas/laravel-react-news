@extends('layouts.app')

@section('content')
    <div class="flex flex-col lg:flex-row min-h-screen bg-zinc-100">
        <x-dashboard-sidebar />

        <main class="flex-1 px-6 py-10">
            <div class="mx-auto max-w-5xl">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 class="text-2xl font-semibold text-zinc-900">Dashboard</h1>
                        <p class="text-sm text-zinc-500">
                            @if($isAdmin)
                                Ringkasan berita dan konsultasi terbaru.
                            @else
                                Riwayat konsultasi yang sudah kamu input.
                            @endif
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        @if($isAdmin)
                            <a href="{{ route('news.create') }}"
                                class="inline-flex items-center rounded-lg bg-[#b3181f] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#99141b]">Input
                                Berita</a>
                            <a href="{{ route('consultations.index') }}"
                                class="relative inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-zinc-800">
                                Konsultasi
                                <span
                                    class="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                    {{ $consultationCount }}
                                </span>
                            </a>
                        @else
                            <a href="{{ route('consultations.create') }}"
                                class="inline-flex items-center rounded-lg bg-[#b3181f] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#99141b]">Input
                                Konsultasi</a>
                        @endif
                    </div>
                </div>

                @if(session('success'))
                    <div class="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                        {{ session('success') }}
                    </div>
                @endif

                @if($isAdmin)
                    <div class="mt-8">
                        <h2 class="text-lg font-semibold text-zinc-900 mb-4">Berita</h2>
                        <div class="space-y-4">
                            @foreach($news as $item)
                                <div class="rounded-2xl bg-white p-5 shadow flex flex-col gap-4">
                                    <div>
                                        <div class="flex items-center gap-2">
                                            <h3 class="font-bold text-lg text-zinc-900">{{ $item->title }}</h3>
                                            <span
                                                class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{{ $item->category ?? 'Umum' }}</span>
                                        </div>
                                        <p class="text-sm text-zinc-600 mt-2">{{ Str::limit($item->content, 120) }}</p>
                                        <p class="text-xs text-zinc-400 mt-2">Oleh: {{ $item->user->name }}</p>
                                    </div>
                                    <div class="flex flex-wrap items-center gap-3">
                                        <a href="{{ route('news.show', $item->id) }}"
                                            class="text-sm font-semibold text-red-600 hover:text-red-700">Baca selengkapnya</a>
                                        <form action="{{ route('news.destroy', $item->id) }}" method="POST"
                                            onsubmit="return confirm('Apakah yakin ingin dihapus?');">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit"
                                                class="rounded-lg border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                        <div class="mt-6">
                            {{ $news->links() }}
                        </div>
                    </div>
                @else
                    <div class="mt-8">
                        <h2 class="text-lg font-semibold text-zinc-900 mb-4">Riwayat Konsultasi Saya</h2>
                        <div class="space-y-4">
                            @forelse($consultations as $consultation)
                                <div class="rounded-2xl bg-white p-5 shadow">
                                    <p class="text-sm text-zinc-500">{{ $consultation->created_at->format('d M Y H:i') }}</p>
                                    <p class="mt-2 text-zinc-800">{{ $consultation->description }}</p>
                                    @if ($consultation->response)
                                        <div
                                            class="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700 text-sm">
                                            <span class="font-semibold">Respon Admin:</span> {{ $consultation->response }}
                                        </div>
                                    @endif
                                </div>
                            @empty
                                <div class="rounded-2xl bg-white p-6 text-zinc-500">Belum ada konsultasi.</div>
                            @endforelse
                        </div>
                        @if($consultations->hasPages())
                            <div class="mt-6">
                                {{ $consultations->onEachSide(1)->links() }}
                            </div>
                        @endif
                    </div>
                @endif
            </div>
        </main>
    </div>
@endsection
