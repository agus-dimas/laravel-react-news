<div>
    <div class="mb-8 hidden lg:block">
        <a href="{{ url('/') }}">
            <img src="{{ asset('images/update logo/LogoNavbar.png') }}" alt="Logo Navbar"
                class="h-10 w-auto object-contain" />
        </a>
    </div>
    <div class="text-lg font-semibold tracking-wide">Selamat Datang</div>
    <p class="mt-2 text-sm text-white/80">Menu Navigasi</p>

    <nav class="mt-8 space-y-2 text-sm">
        <a href="{{ route('dashboard') }}" 
            class="block rounded-lg px-3 py-2 {{ request()->routeIs('dashboard') ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10' }}">
            Dashboard
        </a>
        
        @if(in_array(auth()->user()->role, ['admin', 'super_admin'], true))
            <a href="{{ route('news.create') }}"
                class="block rounded-lg px-3 py-2 {{ request()->routeIs('news.create') ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10' }}">
                Input Berita
            </a>
            <a href="{{ route('consultations.index') }}"
                class="block rounded-lg px-3 py-2 {{ request()->routeIs('consultations.index') ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10' }}">
                Konsultasi Masuk
            </a>
        @else
            <a href="{{ route('consultations.create') }}"
                class="block rounded-lg px-3 py-2 {{ request()->routeIs('consultations.create') ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10' }}">
                Input Konsultasi
            </a>
        @endif
        
        @if(auth()->user()->role === 'super_admin')
            <a href="{{ route('dashboard.users.index') }}"
                class="block rounded-lg px-3 py-2 {{ request()->routeIs('dashboard.users.index') ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10' }}">
                Manajemen User
            </a>
        @endif
    </nav>
</div>

<!-- Profile Akun Login -->
<div class="mt-auto pt-8 border-t border-white/20">
    <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
            {{ substr(auth()->user()->name, 0, 1) }}
        </div>
        <div class="flex-1 min-w-0">
            <div class="text-sm font-semibold truncate">{{ auth()->user()->name }}</div>
            <div class="text-xs text-white/70 truncate mb-1">
                {{ auth()->user()->role === 'super_admin' ? 'Super Admin' : (auth()->user()->role === 'admin' ? 'Admin' : 'User') }}
            </div>
        </div>
        <div>
            <form method="POST" action="{{ route('logout') }}" class="mt-1">
                @csrf
                <button type="submit"
                    class="w-full text-left text-sm text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                    </svg>
                    Keluar
                </button>
            </form>
        </div>
    </div>
</div>
