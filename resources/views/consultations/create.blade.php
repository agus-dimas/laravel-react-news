@extends('layouts.app')
@viteReactRefresh
@vite(['resources/js/footer-mount.jsx'])

@section('content')
    <section class="relative overflow-hidden min-h-screen pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-[#f5f5f4]">
        <div
            class="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-red-300/40 blur-[90px] float-soft">
        </div>
        <div
            class="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-black/10 blur-[100px] float-soft-delayed">
        </div>
        <div
            class="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-red-200/40 blur-[110px] float-soft">
        </div>

        <div class="relative mx-auto w-full max-w-5xl">
            <div class="grid gap-6 lg:grid-cols-2 items-stretch">
                <article
                    class="lux-reveal reveal-1 lux-panel rounded-3xl border border-white/70 bg-white/65 backdrop-blur-xl shadow-[0_20px_60px_rgba(10,10,10,0.15)] p-7 md:p-10 overflow-hidden">
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

                <article
                    class="lux-reveal reveal-2 lux-panel rounded-3xl border border-white/80 bg-white/75 backdrop-blur-2xl shadow-[0_25px_70px_rgba(20,20,20,0.18)] p-6 md:p-8 overflow-hidden">
                    @php
                        $successMessage = session('success');
                        if (!$successMessage && request()->boolean('sent')) {
                            $successMessage = 'Konsultasi berhasil dikirim.';
                        }
                    @endphp
                    @if ($successMessage)
                        <div id="consultation-success"
                            class="mb-5 flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                            <span>{{ $successMessage }}</span>
                            <button type="button" id="consultation-success-close"
                                class="inline-flex h-7 w-7 items-center justify-center rounded-full text-emerald-700 hover:bg-emerald-100">
                                &times;
                            </button>
                        </div>
                    @endif
                    @guest
                        <div class="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700">
                            Login dibutuhkan untuk mengirim konsultasi.
                        </div>
                    @endguest

                    <form action="{{ route('consultations.store') }}" method="POST" enctype="multipart/form-data"
                        class="space-y-5">
                        @csrf

                        <div>
                            <label for="name" class="block text-sm font-medium text-zinc-700 mb-1.5">Nama</label>
                            <input id="name" name="name" type="text" value="{{ old('name') }}"
                                class="w-full rounded-xl border-zinc-300/90 focus:border-red-500 focus:ring-red-500/30 bg-white/90 transition duration-300"
                                placeholder="Nama :" required>
                            @error('name')
                                <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div>
                            <label for="description"
                                class="block text-sm font-medium text-zinc-700 mb-1.5">Deskripsi</label>
                            <textarea id="description" name="description" rows="5"
                                class="w-full rounded-xl border-zinc-300/90 focus:border-red-500 focus:ring-red-500/30 bg-white/90 transition duration-300"
                                placeholder="Tuliskan aspirasi, keluhan, atau saran Anda dengan detail..."
                                required>{{ old('description') }}</textarea>
                            @error('description')
                                <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div>
                            <label for="attachment" class="block text-sm font-medium text-zinc-700 mb-1.5">
                                Lampiran (opsional)
                            </label>
                            <div class="flex items-center gap-3">
                                <input id="attachment" name="attachment" type="file" accept=".jpg,.jpeg,.png,.webp,.pdf"
                                    class="sr-only" />
                                <label for="attachment"
                                    class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition cursor-pointer">
                                    <svg class="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21.44 11.05l-8.49 8.49a6 6 0 0 1-8.49-8.49l8.49-8.49a4 4 0 1 1 5.66 5.66l-8.49 8.49a2 2 0 1 1-2.83-2.83l8.49-8.49" />
                                    </svg>
                                    Pilih file
                                </label>
                                <span id="attachment-name" class="text-xs text-zinc-500">Belum ada file</span>
                            </div>
                            <p class="mt-2 text-xs text-zinc-500">Format: JPG, PNG, WEBP, atau PDF. Maks 5MB.</p>
                            <p id="attachment-error" class="mt-1 text-xs text-red-600 hidden"></p>
                            @error('attachment')
                                <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="flex justify-end">
                            <button type="submit"
                                class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-red-300/60">
                                <span
                                    class="absolute inset-0 bg-gradient-to-r from-[#d11b24] via-[#b3181f] to-[#7f0f15] transition-all duration-500 group-hover:scale-105"></span>
                                <span
                                    class="absolute -inset-y-1 -left-8 w-10 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[105%]"></span>
                                <span class="relative">Kirim Konsultasi</span>
                            </button>
                        </div>
                    </form>
                </article>
            </div>

            <article
                class="lux-reveal reveal-3 lux-panel mt-6 rounded-3xl border border-white/80 bg-white/75 backdrop-blur-2xl shadow-[0_25px_70px_rgba(30,30,30,0.14)] p-5 md:p-7 overflow-hidden">
                <p class="text-[11px] tracking-[0.28em] uppercase text-red-600 font-semibold mb-2">Lokasi Kantor</p>
                <h2 class="text-xl md:text-2xl font-bold text-zinc-900 mb-2">DPP Partai Garuda</h2>
                <p class="text-zinc-600 text-sm md:text-base mb-4">
                    Informasi lokasi kantor pusat disediakan untuk memudahkan masyarakat dan tamu dalam kunjungan,
                    koordinasi, serta keperluan administrasi, dengan akses yang mudah dan terbuka bagi publik.
                </p>

                <div class="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                    <iframe title="Lokasi Kantor Partai Garuda"
                        src="https://maps.google.com/maps?q=DPP%20PARTAI%20GARDA%20REPUBLIK%20INDONESIA%2C%20-6.2011289%2C106.8107504&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        class="w-full h-44 md:h-56" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <p class="mt-3 text-sm text-zinc-600">
                    Jl. Penjernihan I No.28, RT.2/RW.7, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah
                    Khusus Ibukota Jakarta 10210, Indonesia </p>
            </article>
        </div>
    </section>

    <style>
        @keyframes luxReveal {
            from {
                opacity: 0;
                transform: perspective(1200px) translateY(34px) scale(0.972) rotateX(7deg);
                filter: saturate(.82);
            }

            to {
                opacity: 1;
                transform: perspective(1200px) translateY(0) scale(1) rotateX(0deg);
                filter: saturate(1);
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

        .lux-reveal {
            will-change: transform, opacity, filter;
            transform-origin: center 80%;
            animation: luxReveal 1.15s cubic-bezier(.16, 1, .3, 1) both;
        }

        .lux-panel {
            position: relative;
            isolation: isolate;
        }

        .reveal-1 {
            animation-delay: .02s;
        }

        .reveal-2 {
            animation-delay: .16s;
        }

        .reveal-3 {
            animation-delay: .3s;
        }

        .float-soft {
            animation: floatSoft 7s ease-in-out infinite;
        }

        .float-soft-delayed {
            animation: floatSoft 8.4s ease-in-out infinite .55s;
        }

        @media (prefers-reduced-motion: reduce) {
            .lux-reveal,
            .float-soft,
            .float-soft-delayed {
                animation: none !important;
            }
        }
    </style>

    <script>
        (function() {
            const input = document.getElementById('attachment');
            const name = document.getElementById('attachment-name');
            const error = document.getElementById('attachment-error');
            if (!input || !name || !error) return;
            const maxBytes = 5 * 1024 * 1024;

            input.addEventListener('change', () => {
                error.classList.add('hidden');
                error.textContent = '';

                if (!input.files || !input.files.length) {
                    name.textContent = 'Belum ada file';
                    return;
                }

                const file = input.files[0];
                if (file.size > maxBytes) {
                    error.textContent = 'Ukuran file terlalu besar. Maksimal 5MB.';
                    error.classList.remove('hidden');
                    input.value = '';
                    name.textContent = 'Belum ada file';
                    return;
                }

                name.textContent = file.name;
            });
        })();
    </script>
    <script>
        (function() {
            const success = document.getElementById('consultation-success');
            const closeBtn = document.getElementById('consultation-success-close');
            if (!success || !closeBtn) return;

            closeBtn.addEventListener('click', () => {
                success.remove();
            });
        })();
    </script>
    <div id="react-root-footer"></div>
@endsection
