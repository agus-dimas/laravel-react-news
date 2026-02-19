<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ConsultationController;


// =======================
// Halaman home
// =======================
Route::get('/', function () {
    return view('home');
});
Route::get('/struktur', function () {
    return view('struktur');
})->name('struktur');

// =======================
// ROUTE PUBLIC BERITA
// =======================
Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news.show');
Route::get('/api/news', [NewsController::class, 'apiIndex']);

// =======================
// ROUTE PUBLIC KONSULTASI
// =======================
Route::get('/konsultasi', [ConsultationController::class, 'create'])->name('consultations.create');
Route::post('/konsultasi', [ConsultationController::class, 'store'])->name('consultations.store');



// =======================
// ROUTE UNTUK USER LOGIN
// =======================
Route::middleware(['auth'])->group(function () {

    // Dashboard user
    // Route::get('/dashboard', function () {
    //     $news = \App\Models\News::latest()->get(); // bisa tambahkan filter by user_id jika ingin
    //     return view('dashboard', compact('news'));
    // })->name('dashboard');

    Route::get('/dashboard', function () {
        $news = \App\Models\News::where('user_id', auth()->id())->latest()->get();
        $consultationCount = \App\Models\Consultation::count();

        return view('dashboard', compact('news', 'consultationCount'));
    })->name('dashboard');

    // List konsultasi untuk user login
    Route::get('/dashboard/konsultasi', [ConsultationController::class, 'index'])->name('consultations.index');


    // Form input berita
    Route::get('/dashboard/news/create', [NewsController::class, 'create'])->name('news.create');
    Route::post('/dashboard/news', [NewsController::class, 'store'])->name('news.store');

    // Hapus berita
    Route::delete('/dashboard/news/{id}', [NewsController::class, 'destroy'])->name('news.destroy');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// =======================
// Auth routes
// =======================
require __DIR__ . '/auth.php';
