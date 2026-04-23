<x-guest-layout>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-zinc-900">Selamat Datang Kembali</h2>
        <p class="text-sm text-zinc-500 mt-1">Silakan masuk ke akun Anda untuk melanjutkan.</p>
    </div>

    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div class="space-y-1">
            <x-input-label for="email" :value="__('Email Address')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />
            <x-text-input id="email" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl" type="email" name="email" :value="old('email')" required
                autofocus autocomplete="username" placeholder="name@example.com" />
            <x-input-error :messages="$errors->get('email')" class="mt-1" />
        </div>

        <!-- Password -->
        <div class="mt-6 space-y-1">
            <div class="flex items-center justify-between">
                <x-input-label for="password" :value="__('Password')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />
                @if (Route::has('password.request'))
                    <a class="text-xs font-semibold text-red-600 hover:text-red-700 transition"
                        href="{{ route('password.request') }}">
                        {{ __('Lupa password?') }}
                    </a>
                @endif
            </div>

            <x-text-input id="password" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl" type="password" name="password" required
                autocomplete="current-password" placeholder="••••••••" />

            <x-input-error :messages="$errors->get('password')" class="mt-1" />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center justify-between mt-6">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox"
                    class="rounded-md border-zinc-300 text-red-600 shadow-sm focus:ring-red-500 w-4 h-4" name="remember">
                <span class="ms-2 text-sm text-zinc-600 font-medium">{{ __('Ingat saya') }}</span>
            </label>
        </div>

        <div class="mt-8">
            <x-primary-button>
                {{ __('Masuk Sekarang') }}
            </x-primary-button>
        </div>

        <div class="mt-8 pt-6 border-t border-zinc-100 text-center">
            <p class="text-sm text-zinc-500">
                Belum punya akun? 
                <a href="{{ route('register') }}" class="font-bold text-red-600 hover:text-red-700 transition decoration-2 underline-offset-4 hover:underline">
                    Daftar di sini
                </a>
            </p>
        </div>
    </form>
</x-guest-layout>