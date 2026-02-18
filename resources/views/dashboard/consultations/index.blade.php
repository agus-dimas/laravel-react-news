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
                    </div>
                @endforeach
            </div>
        @endif
    </div>
@endsection
