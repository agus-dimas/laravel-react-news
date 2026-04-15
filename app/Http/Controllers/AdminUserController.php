<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    public function index()
    {
        $admins = User::whereIn('role', ['admin', 'super_admin'])->orderBy('role')->orderBy('name')->get();

        return view('dashboard.users.index', compact('admins'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'admin',
        ]);

        return redirect()->route('dashboard.users.index')->with('success', 'Admin berhasil dibuat.');
    }

    public function resetPassword(Request $request, User $user)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($user->role === 'super_admin') {
            return back()->withErrors(['password' => 'Tidak dapat mengganti password super admin.']);
        }

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('dashboard.users.index')->with('success', 'Password admin berhasil diperbarui.');
    }
}
