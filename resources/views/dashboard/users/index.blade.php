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
            <p class="mt-2 text-sm text-white/80">Manajemen Sistem</p>

            <nav class="mt-8 space-y-2 text-sm">
                <a href="{{ route('dashboard') }}"
                    class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Dashboard</a>
                <a href="{{ route('news.create') }}"
                    class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Input Berita</a>
                <a href="{{ route('consultations.index') }}"
                    class="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10">Konsultasi Masuk</a>
                <a href="{{ route('dashboard.users.index') }}" class="block rounded-lg px-3 py-2 bg-white/15">Manajemen
                    User</a>
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
            <div class="mx-auto max-w-4xl">
                <h1 class="text-2xl font-semibold text-zinc-900">Manajemen User</h1>
                <p class="text-sm text-zinc-500 mt-1">Buat akun admin baru dan kelola password admin.</p>

                @if (session('success'))
                    <div class="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                        {{ session('success') }}
                    </div>
                @endif

                <div class="mt-6 grid gap-6 lg:grid-cols-2">
                    <div class="rounded-2xl bg-white shadow p-6">
                        <h2 class="text-lg font-semibold text-zinc-900 mb-4">Buat Admin</h2>
                        <form action="{{ route('dashboard.users.store') }}" method="POST" class="space-y-4">
                            @csrf
                            <div>
                                <label class="text-sm font-medium text-zinc-700">Nama</label>
                                <input type="text" name="name" required
                                    class="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200" />
                            </div>
                            <div>
                                <label class="text-sm font-medium text-zinc-700">Email</label>
                                <input type="email" name="email" required
                                    class="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200" />
                            </div>
                            <div>
                                <label class="text-sm font-medium text-zinc-700">Password</label>
                                <input type="password" name="password" required
                                    class="mt-2 w-full rounded-lg border border-zinc-200 px-3 py-2 focus:border-red-500 focus:ring-red-200" />
                            </div>
                            <button type="submit"
                                class="inline-flex items-center rounded-lg bg-[#b3181f] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#99141b]">Simpan
                                Admin</button>
                        </form>
                    </div>

                    <div class="rounded-2xl bg-white shadow p-6">
                        <h2 class="text-lg font-semibold text-zinc-900 mb-4">Daftar Admin</h2>
                        <div class="space-y-4">
                            @foreach ($admins as $admin)
                                <div class="rounded-xl border border-zinc-200 p-4">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <p class="text-sm font-semibold text-zinc-900">{{ $admin->name }}</p>
                                            <p class="text-xs text-zinc-500">{{ $admin->email }}</p>
                                            <span
                                                class="mt-2 inline-flex rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-semibold text-zinc-600">{{ $admin->role }}</span>
                                        </div>
                                    </div>
                                    @if ($admin->role === 'admin')
                                        <form action="{{ route('dashboard.users.password', $admin) }}" method="POST"
                                            class="mt-4 flex items-center gap-2">
                                            @csrf
                                            @method('PATCH')
                                            <input type="password" name="password" required placeholder="Password baru"
                                                class="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-red-500 focus:ring-red-200" />
                                            <button type="submit"
                                                class="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50">Reset</button>
                                        </form>
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
@endsection