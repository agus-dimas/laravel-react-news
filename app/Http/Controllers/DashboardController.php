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
            $news = News::latest()->paginate(3);
            $consultationCount = Consultation::count();
            $consultations = collect();
        } else {
            $news = News::where('user_id', $user->id)->latest()->paginate(3);
            $consultationCount = Consultation::where('user_id', $user->id)->count();
            $consultations = Consultation::where('user_id', $user->id)->latest()->paginate(5);
        }

        return view('dashboard', compact('news', 'consultationCount', 'consultations', 'isAdmin'));
    }
}
