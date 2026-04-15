<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use App\Models\News;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $user = auth()->user();
        $isAdmin = in_array($user->role, ['admin', 'super_admin'], true);

        if ($isAdmin) {
            $news = News::latest()->get();
            $consultationCount = Consultation::count();
            $consultations = collect();
        } else {
            $news = News::where('user_id', $user->id)->latest()->get();
            $consultationCount = Consultation::where('user_id', $user->id)->count();
            $consultations = Consultation::where('user_id', $user->id)->latest()->get();
        }

        return view('dashboard', compact('news', 'consultationCount', 'consultations', 'isAdmin'));
    }
}
