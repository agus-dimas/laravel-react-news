@extends('layouts.app')

@section('content')
    <div class="flex min-h-screen bg-zinc-100">
        <aside class="w-72 bg-[#b3181f] text-white px-6 py-8 hidden lg:flex lg:flex-col">
            <div>
                <div class="mb-8">
                    <a href="{{ url('/') }}">
                        <img src="{{ asset('images/update logo/LogoNavbar.png') }}" alt="Logo Navbar"
                            class="h-10 w-auto object-contain" />
                    </a>
                </div>
                <div class="text-lg font-semibold tracking-wide">Dashboard</div>
                <p class="mt-2 text-sm text-white/80">Ringkasan Aktivitas</p>

                <nav class="mt-8 space-y-2 text-sm">
                    <a href="{{ route('dashboard') }}" class="block rounded-lg px-3 py-2 bg-white/15">Dashboard</a>
                    @if($isAdmin)
                        <a href="{{ route('news.create') }}"
                            class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Input Berita</a>
                        <a href="{{ route('consultations.index') }}"
                            class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Konsultasi Masuk</a>
                    @else
                        <a href="{{ route('consultations.create') }}"
                            class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Input Konsultasi</a>
                    @endif
                    @if(auth()->user()->role === 'super_admin')
                        <a href="{{ route('dashboard.users.index') }}"
                            class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Manajemen User</a>
                    @endif
                </nav>
            </div>

            <!-- Profile Akun Login -->
            <div class="mt-auto pt-8 border-t border-white/20">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                        {{ substr(auth()->user()->name, 0, 1) }}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm font-semibold truncate">{{ auth()->user()->name }}</div>
                        <div class="text-xs text-white/70 truncate mb-1">
                            {{ auth()->user()->role === 'super_admin' ? 'Super Admin' : (auth()->user()->role === 'admin' ? 'Admin' : 'User') }}
                        </div>
                    </div>
                    <div>
                        <form method="POST" action="{{ route('logout') }}" class="mt-1">
                            @csrf
                            <button type="submit"
                                class="w-full text-left text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                    </path>
                                </svg>
                                Keluar
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </aside>

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
                            @forelse($consultations ?? [] as $consultation)
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
                    </div>
                @endif
            </div>
        </main>
    </div>
@endsection