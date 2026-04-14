@extends('layouts.app')

@section('content')
    <div class="max-w-4xl mx-auto pt-24 p-6">
        <h1 class="text-2xl font-bold mb-6">Daftar Konsultasi Publik</h1>

        @if ($consultations->isEmpty())
            <div class="bg-white rounded shadow p-6 text-gray-600">
                Belum ada inputan konsultasi.
            </div>
        @else
            <div class="space-y-4">
                @foreach ($consultations as $consultation)
                    <div class="bg-white rounded shadow p-4">
                        <p class="font-semibold text-gray-900">{{ $consultation->name }}</p>
                        <p class="text-sm text-gray-500 mb-2">
                            {{ $consultation->created_at->format('d M Y H:i') }}
                        </p>
                        <p class="text-gray-700">{{ $consultation->description }}</p>
                        @if ($consultation->attachment_path)
                            @php
                                $attachmentUrl = \Illuminate\Support\Facades\Storage::url($consultation->attachment_path);
                                $isImage = \Illuminate\Support\Str::endsWith(strtolower($consultation->attachment_path), [
                                    '.jpg',
                                    '.jpeg',
                                    '.png',
                                    '.webp',
                                ]);
                            @endphp
                            <div class="mt-3">
                                @if ($isImage)
                                    <button type="button" data-attachment="{{ $attachmentUrl }}"
                                        class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition">
                                        <svg class="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21.44 11.05l-8.49 8.49a6 6 0 0 1-8.49-8.49l8.49-8.49a4 4 0 1 1 5.66 5.66l-8.49 8.49a2 2 0 1 1-2.83-2.83l8.49-8.49" />
                                        </svg>
                                        Lihat lampiran
                                    </button>
                                @else
                                    <a href="{{ $attachmentUrl }}" target="_blank" rel="noopener"
                                        class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition">
                                        <svg class="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                            stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21.44 11.05l-8.49 8.49a6 6 0 0 1-8.49-8.49l8.49-8.49a4 4 0 1 1 5.66 5.66l-8.49 8.49a2 2 0 1 1-2.83-2.83l8.49-8.49" />
                                        </svg>
                                        Lampiran
                                    </a>
                                @endif
                            </div>
                        @endif
                    </div>
                @endforeach
            </div>
        @endif
    </div>

    <div id="attachment-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/70 p-4">
        <div class="relative max-h-[90vh] w-full max-w-4xl">
            <button type="button" id="attachment-close"
                class="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-zinc-700 shadow hover:bg-zinc-100">
                &times;
            </button>
            <img id="attachment-modal-image" src="" alt="Lampiran konsultasi"
                class="h-auto max-h-[90vh] w-full rounded-xl object-contain bg-white" />
        </div>
    </div>

    <script>
        (function() {
            const modal = document.getElementById('attachment-modal');
            const modalImage = document.getElementById('attachment-modal-image');
            const closeBtn = document.getElementById('attachment-close');
            const thumbnails = document.querySelectorAll('[data-attachment]');

            const closeModal = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                modalImage.src = '';
                document.body.classList.remove('overflow-hidden');
            };

            thumbnails.forEach((img) => {
                img.addEventListener('click', () => {
                    modalImage.src = img.dataset.attachment;
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    document.body.classList.add('overflow-hidden');
                });
            });

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeModal();
            });
        })();
    </script>
@endsection
