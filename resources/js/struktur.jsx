import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';

const boardMembers = [
    {
        role: 'Ketua Umum',
        name: 'Ahmad Ridha Sabana',
        bio: 'Memimpin arah Partai dan memastikan setiap program berjalan sesuai dengan misi partai.',
        photo: '/images/struktur/person.png',
    },
    {
        role: 'Sekretaris Jenderal',
        name: 'Ihsan Jauhari',
        bio: 'Mengelola administrasi organisasi dan dokumentasi kegiatan strategis.',
        photo: '/images/pengurus/ihsan.png',
    },
    {
        role: 'Wakil Ketua Umum',
        name: 'Teddy Gusnaidi',
        bio: 'Mengawal koordinasi antar divisi dan penguatan kolaborasi internal.',
        photo: '/images/pengurus/tedy.png',
    },
    {
        role: 'Ketua 1',
        name: 'Faisal',
        bio: 'Menyusun inisiatif, agenda kerja, dan evaluasi pelaksanaan kegiatan.',
        photo: '/images/pengurus/faisal.png',
    },
    {
        role: 'Ketua 2',
        name: 'Jeffry Yulianto Waisapy',
        bio: 'Membangun komunikasi publik dan memperkuat citra organisasi.',
        photo: '/images/pengurus/jefry.jpg',
    },
    {
        role: 'Ketua 3',
        name: 'Ahmad Muhlis Fanani',
        bio: 'Menguatkan sistem internal dan pengembangan kualitas kader pengurus.',
        photo: '/images/pengurus/caklis.png',
    },
    {
        role: 'Wakil Sekretaris Jenderal',
        name: 'Saiful Rahman',
        bio: 'Menginisiasi program sosial kemasyarakatan yang terukur dan berkelanjutan.',
        photo: '/images/pengurus/saiful.png',
    },
    {
        role: 'Wakil Sekretaris Jenderal',
        name: 'Sulistianing Sasih',
        bio: 'Mengelola publikasi visual, konten digital, dan kanal komunikasi organisasi.',
        photo: '/images/pengurus/sulistia.jpg',
    },
    {
        role: 'Wakil Bendahara Umum',
        name: 'Eka Arum Maqshuuroh',
        bio: 'Menyusun kajian, riset kebijakan, dan rekomendasi berbasis data lapangan.',
        photo: '/images/pengurus/harum.jpg',
    },
    {
        role: 'Wakil Bendahara Umum',
        name: 'Tia Fathiah',
        bio: 'Mendampingi isu strategis masyarakat dan memperjuangkan aspirasi publik.',
        photo: '/images/pengurus/tia.jpg',
    },
    {
        role: 'Bendahara Umum',
        name: 'Fajar Muhammad Faiz Rozi',
        bio: 'Menjaga transparansi keuangan serta pengelolaan anggaran program.',
        photo: '/images/pengurus/pfaiz.jpg',
    },
];

const fallbackPhoto = '/images/p1.png';

function StrukturPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalMembers = boardMembers.length;

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalMembers);
    };

    const activeMember = boardMembers[currentIndex];

    return (
        <div className="min-h-screen pt-16 text-zinc-900 bg-transparent md:bg-white">
            <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-transparent md:bg-white">
                <div className="relative min-h-[420px] sm:min-h-[520px] md:min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
                    <div className="order-2 md:order-1 relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 md:py-12 lg:py-16 bg-cover bg-center bg-no-repeat md:mr-[-12vw] md:pr-[18vw]"
                        style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 1.60)),url('/images/news-bg.jpg')" }}>

                        <div className="relative z-10">
                            <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-3">
                                {activeMember.role.toUpperCase()}
                            </p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 leading-tight">
                                {activeMember.name.toUpperCase()}
                            </h1>
                            <div className="mt-3 h-1 w-40 bg-[#b3181f]" />
                            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                                {activeMember.bio}
                            </p>

                            <div className="mt-10 flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={goNext}
                                    className="inline-flex items-center gap-3 bg-[#b3181f] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-widest shadow-[0_10px_24px_rgba(179,24,31,0.35)] transition hover:translate-y-[-1px]"
                                    aria-label="Next pengurus"
                                >
                                    Next
                                </button>
                                <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                                    <span>{currentIndex + 1}</span>
                                    <span>/</span>
                                    <span>{totalMembers}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative overflow-visible bg-transparent flex items-end justify-center md:justify-start pl-0 md:pl-2 pr-0 md:pr-0 h-[360px] sm:h-[420px] md:h-auto">
                        <div className="absolute inset-y-0 left-0 p:left-[20%] right-0 bg-gradient-to-br from-[#a40f14] via-[#b3181f] to-[#8e0f14]" />
                        <img
                            src="/images/struktur/atribut 1.png"
                            alt=""
                            aria-hidden="true"
                            className="absolute right-0 top-0 h-[70%] sm:h-[75%] md:h-[90%] w-auto pointer-events-none z-40 translate-x-14" />
                        <img
                            src={activeMember.photo || fallbackPhoto}
                            alt={activeMember.name}
                            className="relative z-30 mx-auto md:mx-0 md:-ml-28 max-h-[340px] sm:max-h-[380px] md:max-h-[92vh] w-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = fallbackPhoto;
                            }}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

const strukturRoot = document.getElementById('react-root-struktur');
if (strukturRoot) {
    ReactDOM.createRoot(strukturRoot).render(<StrukturPage />);
}
