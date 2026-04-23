<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<script src="//unpkg.com/alpinejs" defer></script>

<body class="font-sans text-gray-900 antialiased">
    <div class="min-h-screen flex flex-col md:flex-row bg-white">
        <!-- Left Side: Image/Branding -->
        <div class="hidden md:flex md:w-1/2 lg:w-3/5 bg-zinc-900 relative overflow-hidden">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0 z-0">
                <img src="{{ asset('images/banner-about.jpg') }}" alt="Branding"
                    class="w-full h-full object-cover mix-blend-overlay opacity-20">
                <div class="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/80"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-center px-12 lg:px-24 text-white">
                <div class="mb-8">
                    <a href="/">
                        <img src="{{ asset('images/update logo/LogoNavbar.png') }}" alt="Logo"
                            class="h-10 w-auto -translate-x-4 translate-y-3">
                    </a>
                </div>
                <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                    Membangun Indonesia <br> <span class="text-red-500">Bersama Garuda</span>
                </h1>
                <p class="text-lg text-zinc-300 max-w-md leading-relaxed">
                    Mari bergabung dalam pergerakan politik nasionalis yang berfokus pada
                    keadilan rakyat.
                </p>

                <div class="mt-12 flex items-center gap-4">
                    <div class="w-12 h-1 px-0 bg-red-600 rounded-full"></div>
                    <span class="text-sm uppercase tracking-[0.3em] text-red-500 font-bold">Partai Garuda</span>
                </div>
            </div>

            <!-- Decorative Sheen -->
            <div class="absolute -top-1/2 -left-1/4 w-full h-full bg-white/5 rotate-12 blur-3xl pointer-events-none">
            </div>
        </div>

        <!-- Right Side: Form -->
        <div class="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20 bg-gray-50/50 relative">
            <div class="md:hidden absolute top-8 left-8">
                <a href="/">
                    <img src="{{ asset('images/p5.png') }}" alt="Logo" class="h-12 w-auto">
                </a>
            </div>

            <div class="w-full max-w-md mx-auto">
                {{ $slot }}
            </div>

            <footer class="mt-12 text-center text-xs text-gray-400">
                &copy; {{ date('Y') }} Partai Garda Republik Indonesia. All rights reserved.
            </footer>
        </div>
    </div>
</body>

</html>