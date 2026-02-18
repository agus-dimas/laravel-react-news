@extends('layouts.app')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-6">Tambah Berita Baru</h1>

        <form action="{{ route('news.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <div class="mb-4">
                <label class="block font-semibold mb-2">Judul</label>
                <input type="text" name="title" class="w-full border rounded p-2" required>
            </div>

            <div class="mb-4">
                <label class="block font-semibold mb-2">Gambar</label>
                <input type="file" name="image" class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block font-semibold mb-2">Isi Berita</label>
                <textarea name="content" rows="6" class="w-full border rounded p-2" required></textarea>
            </div>

            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Simpan Berita
            </button>
        </form>
    </div>
@endsection