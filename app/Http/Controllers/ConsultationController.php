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
            'attachment' => ['nullable', 'file', 'max:5120', 'mimes:jpg,jpeg,png,webp,pdf'],
        ]);

        try {
            if ($request->hasFile('attachment')) {
                $validated['attachment_path'] = $request->file('attachment')->store('consultations', 'public');
            }

            $validated['user_id'] = $request->user()->id;

            Consultation::create($validated);
        } catch (\Throwable $e) {
            report($e);

            return back()
                ->withErrors(['attachment' => 'Upload gagal. Coba gunakan file lain atau ulangi kembali.'])
                ->withInput();
        }

        return redirect()
            ->route('consultations.create', ['sent' => 1])
            ->with('success', 'Konsultasi berhasil dikirim.');
    }

    public function index()
    {
        $consultations = Consultation::latest()->get();

        return view('dashboard.consultations.index', compact('consultations'));
    }
}
