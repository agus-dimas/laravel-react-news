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
Route::get('/media', function () {
    return view('media.index');
})->name('media.index');
Route::get('/about', function () {
    return view('about.index');
})->name('about.index');

// =======================
// ROUTE PUBLIC BERITA
// =======================
Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news.show');
Route::get('/api/news', [NewsController::class, 'apiIndex']);
Route::get('/api/news/categories', [NewsController::class, 'apiCategories']);

// =======================
// ROUTE PUBLIC KONSULTASI
// =======================
Route::get('/konsultasi', [ConsultationController::class, 'create'])->name('consultations.create');
Route::post('/konsultasi', [ConsultationController::class, 'store'])
    ->middleware('auth')
    ->name('consultations.store');



// =======================
// ROUTE UNTUK USER LOGIN
// =======================
Route::middleware(['auth'])->group(function () {

    // Dashboard user
    // Route::get('/dashboard', function () {
    //     $news = \App\Models\News::latest()->get(); // bisa tambahkan filter by user_id jika ingin
    //     return view('dashboard', compact('news'));
    // })->name('dashboard');

    Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->name('dashboard');

    // List konsultasi untuk user login
    Route::get('/dashboard/konsultasi', [ConsultationController::class, 'index'])
        ->middleware('admin')
        ->name('consultations.index');
    Route::post('/dashboard/konsultasi/{consultation}/response', [ConsultationController::class, 'respond'])
        ->middleware('admin')
        ->name('consultations.respond');


    // Form input berita
    Route::get('/dashboard/news/create', [NewsController::class, 'create'])->middleware('admin')->name('news.create');
    Route::post('/dashboard/news', [NewsController::class, 'store'])->middleware('admin')->name('news.store');

    // Hapus berita
    Route::delete('/dashboard/news/{id}', [NewsController::class, 'destroy'])->middleware('admin')->name('news.destroy');

    // Manajemen admin (super admin saja)
    Route::get('/dashboard/users', [App\Http\Controllers\AdminUserController::class, 'index'])
        ->middleware('super-admin')
        ->name('dashboard.users.index');
    Route::post('/dashboard/users', [App\Http\Controllers\AdminUserController::class, 'store'])
        ->middleware('super-admin')
        ->name('dashboard.users.store');
    Route::patch('/dashboard/users/{user}/password', [App\Http\Controllers\AdminUserController::class, 'resetPassword'])
        ->middleware('super-admin')
        ->name('dashboard.users.password');

    // Berita Actions (Like & Comment)
    Route::post('/news/{id}/like', [NewsController::class, 'toggleLike'])->name('news.like');
    Route::post('/news/{id}/comments', [\App\Http\Controllers\CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{id}', [\App\Http\Controllers\CommentController::class, 'destroy'])->name('comments.destroy');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// =======================
// Auth routes
// =======================
require __DIR__ . '/auth.php';
