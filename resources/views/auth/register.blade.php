<x-guest-layout>
    <div class="mb-8">
        <h2 class="text-2xl font-bold text-zinc-900">Gabung Bersama Kami</h2>
        <p class="text-sm text-zinc-500 mt-1">Buat akun untuk menjadi bagian dari pergerakan.</p>
    </div>

    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Name -->
        <div class="space-y-1">
            <x-input-label for="name" :value="__('Nama Lengkap')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />
            <x-text-input id="name" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" placeholder="Nama Anda" />
            <x-input-error :messages="$errors->get('name')" class="mt-1" />
        </div>

        <!-- Email Address -->
        <div class="mt-6 space-y-1">
            <x-input-label for="email" :value="__('Email')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />
            <x-text-input id="email" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl" type="email" name="email" :value="old('email')" required autocomplete="username" placeholder="name@example.com" />
            <x-input-error :messages="$errors->get('email')" class="mt-1" />
        </div>

        <!-- Password -->
        <div class="mt-6 space-y-1">
            <x-input-label for="password" :value="__('Password')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />

            <x-text-input id="password" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                            type="password"
                            name="password"
                            required autocomplete="new-password" placeholder="Minimal 8 karakter" />

            <x-input-error :messages="$errors->get('password')" class="mt-1" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-6 space-y-1">
            <x-input-label for="password_confirmation" :value="__('Konfirmasi Password')" class="text-xs font-bold uppercase tracking-wider text-zinc-700" />

            <x-text-input id="password_confirmation" class="block w-full bg-white border-zinc-200 focus:border-red-500 focus:ring-red-500 rounded-xl"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" placeholder="Ulangi password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-1" />
        </div>

        <div class="mt-8">
            <x-primary-button>
                {{ __('Daftar Sekarang') }}
            </x-primary-button>
        </div>

        <div class="mt-8 pt-6 border-t border-zinc-100 text-center">
            <p class="text-sm text-zinc-500">
                Sudah punya akun? 
                <a href="{{ route('login') }}" class="font-bold text-red-600 hover:text-red-700 transition decoration-2 underline-offset-4 hover:underline">
                    Masuk di sini
                </a>
            </p>
        </div>
    </form>
</x-guest-layout>
