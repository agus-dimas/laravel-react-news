@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/footer-mount.jsx'])

@section('content')
    <section class="relative overflow-hidden min-h-screen pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-[#f5f5f4]">
        <div class="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-red-300/40 blur-[90px] float-soft"></div>
        <div class="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-black/10 blur-[100px] float-soft-delayed"></div>
        <div class="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-red-200/40 blur-[110px] float-soft"></div>

        <div class="relative mx-auto w-full max-w-5xl">
            <div class="grid gap-6 lg:grid-cols-2 items-stretch">
                <article class="premium-reveal rounded-3xl border border-white/70 bg-white/65 backdrop-blur-xl shadow-[0_20px_60px_rgba(10,10,10,0.15)] p-7 md:p-10">
                    <p class="text-[11px] tracking-[0.28em] uppercase text-red-600 font-semibold mb-4">Konsultasi Publik</p>
                    <h1 class="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                        Sampaikan Aspirasi Anda Secara Langsung
                    </h1>
                    <p class="mt-4 text-zinc-600 leading-relaxed">
                        Kami membuka ruang konsultasi untuk menerima masukan masyarakat. Isi nama dan deskripsi secara
                        jelas agar tim kami dapat menindaklanjuti dengan cepat dan tepat.
                    </p>
                    <div class="mt-8 grid grid-cols-2 gap-4">
                        <div class="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3">
                            <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">Respon</p>
                            <p class="mt-1 text-lg font-semibold text-zinc-900">Terstruktur</p>
                        </div>
                        <div class="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3">
                            <p class="text-xs uppercase tracking-[0.2em] text-zinc-500">Privasi</p>
                            <p class="mt-1 text-lg font-semibold text-zinc-900">Terjaga</p>
                        </div>
                    </div>
                </article>

                <article class="premium-reveal premium-reveal-delay rounded-3xl border border-white/80 bg-white/75 backdrop-blur-2xl shadow-[0_25px_70px_rgba(179,24,31,0.18)] p-6 md:p-8">
                    @if (session('success'))
                        <div class="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                            {{ session('success') }}
                        </div>
                    @endif

                    <form action="{{ route('consultations.store') }}" method="POST" class="space-y-5">
                        @csrf

                        <div>
                            <label for="name" class="block text-sm font-medium text-zinc-700 mb-1.5">Nama</label>
                            <input id="name" name="name" type="text" value="{{ old('name') }}"
                                class="w-full rounded-xl border-zinc-300/90 focus:border-red-500 focus:ring-red-500/30 bg-white/90 transition duration-300"
                                placeholder="Contoh: Dimas Prasetyo" required>
                            @error('name')
                                <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div>
                            <label for="description" class="block text-sm font-medium text-zinc-700 mb-1.5">Deskripsi</label>
                            <textarea id="description" name="description" rows="5"
                                class="w-full rounded-xl border-zinc-300/90 focus:border-red-500 focus:ring-red-500/30 bg-white/90 transition duration-300"
                                placeholder="Tuliskan aspirasi, keluhan, atau saran Anda dengan detail..." required>{{ old('description') }}</textarea>
                            @error('description')
                                <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <button type="submit"
                            class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-red-300/60">
                            <span class="absolute inset-0 bg-gradient-to-r from-[#d11b24] via-[#b3181f] to-[#7f0f15] transition-all duration-500 group-hover:scale-105"></span>
                            <span class="absolute -inset-y-1 -left-8 w-10 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[105%]"></span>
                            <span class="relative">Kirim Konsultasi</span>
                        </button>
                    </form>
                </article>
            </div>
        </div>
    </section>

    <style>
        @keyframes premiumReveal {
            from {
                opacity: 0;
                transform: translateY(24px) scale(0.985);
                filter: blur(6px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes floatSoft {
            0%,
            100% {
                transform: translate3d(0, 0, 0);
            }
            50% {
                transform: translate3d(0, -10px, 0);
            }
        }

        .premium-reveal {
            animation: premiumReveal 1.05s cubic-bezier(.16, 1, .3, 1) both;
        }

        .premium-reveal-delay {
            animation-delay: .18s;
        }

        .float-soft {
            animation: floatSoft 6s ease-in-out infinite;
        }

        .float-soft-delayed {
            animation: floatSoft 7s ease-in-out infinite .4s;
        }
    </style>

    <div id="react-root-footer"></div>
@endsection
