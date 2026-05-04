<div x-data="{ mobileMenuOpen: false }" class="shrink-0">
    <!-- Mobile Header -->
    <div class="lg:hidden bg-[#b3181f] text-white p-4 flex items-center justify-between w-full shadow-md">
        <div class="flex items-center gap-3">
            <a href="{{ url('/') }}">
                <img src="{{ asset('images/update logo/LogoNavbar.png') }}" alt="Logo" class="h-8 w-auto object-contain" />
            </a>
            <span class="font-semibold text-lg">Dashboard</span>
        </div>
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div x-show="mobileMenuOpen" class="fixed inset-0 z-50 lg:hidden" x-cloak>
        <!-- Backdrop -->
        <div x-show="mobileMenuOpen" 
             x-transition:enter="transition-opacity ease-linear duration-300" 
             x-transition:enter-start="opacity-0" 
             x-transition:enter-end="opacity-100" 
             x-transition:leave="transition-opacity ease-linear duration-300" 
             x-transition:leave-start="opacity-100" 
             x-transition:leave-end="opacity-0" 
             class="fixed inset-0 bg-black/50 backdrop-blur-sm" 
             @click="mobileMenuOpen = false"></div>

        <!-- Sidebar Panel -->
        <aside x-show="mobileMenuOpen" 
               x-transition:enter="transition ease-in-out duration-300 transform" 
               x-transition:enter-start="-translate-x-full" 
               x-transition:enter-end="translate-x-0" 
               x-transition:leave="transition ease-in-out duration-300 transform" 
               x-transition:leave-start="translate-x-0" 
               x-transition:leave-end="-translate-x-full" 
               class="fixed inset-y-0 left-0 w-72 bg-[#b3181f] text-white px-6 py-8 flex flex-col shadow-xl z-50 overflow-y-auto">
               
            <!-- Mobile Close Button -->
            <div class="absolute top-4 right-4">
                <button @click="mobileMenuOpen = false" class="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            
            @include('components.dashboard-sidebar-content')
        </aside>
    </div>

    <!-- Desktop Sidebar -->
    <aside class="w-72 bg-[#b3181f] text-white px-6 py-8 hidden lg:flex lg:flex-col min-h-screen sticky top-0 overflow-y-auto">
        @include('components.dashboard-sidebar-content')
    </aside>
</div>
