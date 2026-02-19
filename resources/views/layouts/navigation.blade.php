<nav class="bg-[#b3181f]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.28)] fixed w-full z-50 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">

            <!-- Brand / Logo -->
            <div class="flex-shrink-0 flex items-center">
                <a href="{{ url('/') }}" class="text-xl font-bold tracking-wide text-white">
                    MyNews
                </a>
            </div>

            <!-- Menu Desktop -->
            <div class="hidden sm:flex sm:space-x-8 items-center">
                <a href="{{ url('/') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('/') ? 'border-b-2 border-white text-white' : 'text-white/80 hover:text-white' }}">
                    Home
                </a>
                <a href="{{ route('news.index') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('news') ? 'border-b-2 border-white text-white' : 'text-white/80 hover:text-white' }}">
                    Berita
                </a>
                <a href="{{ route('consultations.create') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('konsultasi') ? 'border-b-2 border-white text-white' : 'text-white/80 hover:text-white' }}">
                    Konsultasi
                </a>
                <a href="{{ route('struktur') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('struktur') ? 'border-b-2 border-white text-white' : 'text-white/80 hover:text-white' }}">
                    Struktur
                </a>
            </div>

            <!-- Mobile menu button & User dropdown -->
            <div class="flex items-center space-x-4">
                @auth
                    <div x-data="{ open: false }" class="relative">
                        <!-- Button -->
                        <button @click="open = !open" type="button"
                            class="flex text-sm bg-white/15 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/70">
                            <span class="sr-only">Open user menu</span>
                            <span class="px-3 py-1">{{ auth()->user()->name }}</span>
                        </button>

                        <!-- Dropdown -->
                        <div x-show="open" x-cloak @click.outside="open = false" x-transition
                            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <a href="{{ route('dashboard') }}"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Dashboard
                            </a>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit"
                                    class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                @else
                    <a href="{{ route('login') }}"
                        class="px-3 py-1 bg-white text-[#b3181f] rounded hover:bg-white/90 transition font-semibold">
                        Login
                    </a>
                    <a href="{{ route('register') }}"
                        class="px-3 py-1 border border-white/70 text-white rounded hover:bg-white/10 transition">
                        Register
                    </a>
                @endauth

                <!-- Mobile menu toggle -->
                <div x-data="{ open: false }" class="sm:hidden">
                    <button @click="open = !open" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-white/85 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70">
                        <span class="sr-only">Open main menu</span>
                        <svg :class="{ 'hidden': open, 'block': !open }" class="block w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg :class="{ 'hidden': !open, 'block': open }" class="hidden w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Mobile Menu -->
                    <div x-show="open" x-cloak @click.outside="open = false" x-transition
                        class="absolute top-16 left-0 w-full bg-[#8f1016] shadow-xl sm:hidden">
                        <a href="{{ url('/') }}" class="block px-4 py-2 text-white hover:bg-white/10">
                            Home
                        </a>
                        <a href="{{ route('news.index') }}" class="block px-4 py-2 text-white hover:bg-white/10">
                            Berita
                        </a>
                        <a href="{{ route('consultations.create') }}"
                            class="block px-4 py-2 text-white hover:bg-white/10">
                            Konsultasi
                        </a>
                        <a href="{{ route('struktur') }}" class="block px-4 py-2 text-white hover:bg-white/10">
                            Struktur
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
