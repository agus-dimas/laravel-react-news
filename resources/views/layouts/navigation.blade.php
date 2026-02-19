<nav class="bg-white shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">

            <!-- Brand / Logo -->
            <div class="flex-shrink-0 flex items-center">
                <a href="{{ url('/') }}" class="text-xl font-bold text-indigo-600">
                    MyNews
                </a>
            </div>

            <!-- Menu Desktop -->
            <div class="hidden sm:flex sm:space-x-8 items-center">
                <a href="{{ url('/') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('/') ? 'border-b-2 border-indigo-600 text-gray-900' : 'text-gray-500 hover:text-gray-700' }}">
                    Home
                </a>
                <a href="{{ route('news.index') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('news') ? 'border-b-2 border-indigo-600 text-gray-900' : 'text-gray-500 hover:text-gray-700' }}">
                    Berita
                </a>
                <a href="{{ route('consultations.create') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('konsultasi') ? 'border-b-2 border-indigo-600 text-gray-900' : 'text-gray-500 hover:text-gray-700' }}">
                    Konsultasi
                </a>
                <a href="{{ route('struktur') }}"
                    class="inline-flex items-center px-1 pt-1 text-sm font-medium
                   {{ request()->is('struktur') ? 'border-b-2 border-indigo-600 text-gray-900' : 'text-gray-500 hover:text-gray-700' }}">
                    Struktur
                </a>
            </div>

            <!-- Mobile menu button & User dropdown -->
            <div class="flex items-center space-x-4">
                @auth
                    <div x-data="{ open: false }" class="relative">
                        <!-- Button -->
                        <button @click="open = !open" type="button"
                            class="flex text-sm bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <span class="sr-only">Open user menu</span>
                            <span class="px-3 py-1">{{ auth()->user()->name }}</span>
                        </button>

                        <!-- Dropdown -->
                        <div x-show="open" @click.outside="open = false" x-transition
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
                        class="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                        Login
                    </a>
                    <a href="{{ route('register') }}"
                        class="px-3 py-1 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50 transition">
                        Register
                    </a>
                @endauth

                <!-- Mobile menu toggle -->
                <div x-data="{ open: false }" class="sm:hidden">
                    <button @click="open = !open" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
                    <div x-show="open" @click.outside="open = false" x-transition
                        class="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
                        <a href="{{ url('/') }}" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Home
                        </a>
                        <a href="{{ route('news.index') }}" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Berita
                        </a>
                        <a href="{{ route('consultations.create') }}"
                            class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Konsultasi
                        </a>
                        <a href="{{ route('struktur') }}" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Struktur
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
