@extends('layouts.app')

@section('content')
    <div class="min-h-screen flex items-center justify-center bg-zinc-100 px-6">
        <div class="max-w-md rounded-2xl bg-white p-6 text-center shadow">
            <h1 class="text-3xl font-semibold text-zinc-900">403</h1>
            <p class="mt-2 text-zinc-600">Akses ditolak. Kamu tidak memiliki izin.</p>
            <a href="{{ route('dashboard') }}"
                class="mt-5 inline-flex items-center justify-center rounded-lg bg-[#b3181f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#99141b]">
                Kembali ke Dashboard
            </a>
        </div>
    </div>
@endsection
