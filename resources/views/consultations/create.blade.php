@extends('layouts.app')

@section('content')
    <div class="max-w-2xl mx-auto pt-24 p-6">
        <h1 class="text-2xl font-bold mb-6">Konsultasi Publik</h1>

        @if (session('success'))
            <div class="bg-green-200 text-green-800 p-3 rounded mb-4">
                {{ session('success') }}
            </div>
        @endif

        <form action="{{ route('consultations.store') }}" method="POST" class="bg-white rounded shadow p-6 space-y-4">
            @csrf

            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input id="name" name="name" type="text" value="{{ old('name') }}"
                    class="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500" required>
                @error('name')
                    <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea id="description" name="description" rows="5"
                    class="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500" required>{{ old('description') }}</textarea>
                @error('description')
                    <p class="text-red-600 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <button type="submit"
                class="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Kirim Konsultasi
            </button>
        </form>
    </div>
@endsection
