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
                <div class="text-lg font-semibold tracking-wide">Buat Berita Baru</div>
                <p class="mt-2 text-sm text-white/80">Mulai bagikan informasi terkini</p>

                <nav class="mt-8 space-y-2 text-sm">
                    <a href="{{ route('dashboard') }}"
                        class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Dashboard</a>
                    <a href="{{ route('news.create') }}" class="block rounded-lg px-3 py-2 bg-white/15">Input Berita</a>
                    <a href="{{ route('consultations.index') }}"
                        class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Konsultasi Masuk</a>
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

        <main class="flex-1 px-6 py-10 pt-24">
            <div class="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow">
                <h1 class="text-2xl font-semibold text-zinc-900 mb-6">Tambah Berita Baru</h1>

                <form action="{{ route('news.store') }}" method="POST" enctype="multipart/form-data" class="space-y-4">
                    @csrf

                    <div>
                        <label class="block text-sm font-medium text-zinc-700 mb-2">Judul</label>
                        <input type="text" name="title"
                            class="w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200"
                            required>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-zinc-700 mb-2">Kategori</label>
                        <input list="categories" name="category" placeholder="Pilih atau ketik kategori baru"
                            class="w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200"
                            required>
                        <datalist id="categories">
                            <option value="Politik"></option>
                            <option value="Nasional"></option>
                            <option value="Teknologi"></option>
                        </datalist>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-zinc-700 mb-2">Gambar</label>
                        <input type="file" name="image"
                            class="w-full rounded-lg border border-zinc-200 px-3 py-2 file:mr-4 file:rounded-md file:border-0 file:bg-zinc-900 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-zinc-800">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-zinc-700 mb-2">Isi Berita</label>
                        <textarea name="content" rows="6"
                            class="w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200"
                            required></textarea>
                    </div>

                    <div class="flex justify-end">
                        <button type="submit"
                            class="rounded-lg bg-[#b3181f] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#99141b]">
                            Simpan Berita
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
@endsection