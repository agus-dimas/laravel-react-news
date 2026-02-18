<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    public function create()
    {
        return view('consultations.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string', 'max:2000'],
        ]);

        Consultation::create($validated);

        return redirect()
            ->route('consultations.create')
            ->with('success', 'Konsultasi berhasil dikirim.');
    }

    public function index()
    {
        $consultations = Consultation::latest()->get();

        return view('dashboard.consultations.index', compact('consultations'));
    }
}
