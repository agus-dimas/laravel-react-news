import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';

const boardMembers = [
    {
        role: 'Ketua Umum',
        name: 'Ahmad Ridha Sabana',
        bio: 'Memimpin arah Partai dan memastikan setiap program berjalan sesuai dengan misi partai.',
        photo: '/images/pengurus/ketum.jpg',
    },
    {
        role: 'Sekretaris Jenderal',
        name: 'Ihsan Jauhari',
        bio: 'Mengelola administrasi organisasi dan dokumentasi kegiatan strategis.',
        photo: '/images/pengurus/ihsan.jpg',
    },
    {
        role: 'Wakil Ketua Umum',
        name: 'Teddy Gusnaidi',
        bio: 'Mengawal koordinasi antar divisi dan penguatan kolaborasi internal.',
        photo: '/images/pengurus/tedy.jpg',
    },
    {
        role: 'Ketua 1',
        name: 'Faisal',
        bio: 'Menyusun inisiatif, agenda kerja, dan evaluasi pelaksanaan kegiatan.',
        photo: '/images/pengurus/faisal.jpg',
    },
    {
        role: 'Ketua 2',
        name: 'Jeffry Yulianto Waisapy',
        bio: 'Membangun komunikasi publik dan memperkuat citra organisasi.',
        photo: '/images/pengurus/',
    },
    {
        role: 'Ketua 3',
        name: 'Ahmad Muhlis Fanani',
        bio: 'Menguatkan sistem internal dan pengembangan kualitas kader pengurus.',
        photo: '/images/pengurus/caklis.jpg',
    },
    {
        role: 'Wakil Sekretaris Jenderal',
        name: 'Saiful Rahman',
        bio: 'Menginisiasi program sosial kemasyarakatan yang terukur dan berkelanjutan.',
        photo: '/images/pengurus/saiful.jpg',
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
    const [slideDirection, setSlideDirection] = useState(null);
    const slideTimerRef = useRef(null);
    const totalMembers = boardMembers.length;

    const triggerSlide = (direction, updaterFn) => {
        if (slideTimerRef.current) {
            clearTimeout(slideTimerRef.current);
        }
        setSlideDirection(direction);
        setCurrentIndex(updaterFn);
        slideTimerRef.current = setTimeout(() => {
            setSlideDirection(null);
        }, 780);
    };

    useEffect(() => {
        return () => {
            if (slideTimerRef.current) {
                clearTimeout(slideTimerRef.current);
            }
        };
    }, []);

    const goNext = () => {
        triggerSlide('next', (prev) => (prev + 1) % totalMembers);
    };

    const goPrev = () => {
        triggerSlide('prev', (prev) => (prev - 1 + totalMembers) % totalMembers);
    };

    const getMember = (offset) => {
        return boardMembers[(currentIndex + offset + totalMembers) % totalMembers];
    };

    const activeMember = getMember(0);

    return (
        <div className="min-h-screen pt-24 text-zinc-900 bg-[#d9d9dc]">
            <div className="relative overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
                    <section className="lux-reveal glass-dark rounded-3xl p-6 md:p-10 mb-7 border border-white/60">
                        <p className="text-red-400 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                            Struktur Organisasi
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-zinc-900">
                            Kepengurusan Organisasi Partai Garuda
                        </h1>
                        <p className="text-zinc-700 md:max-w-3xl leading-relaxed">
                            Tim kepengurusan dirancang sebagai sistem kerja yang solid, kolaboratif, dan terukur
                            untuk menjaga ritme gerak organisasi serta memperkuat dampak nyata di masyarakat.
                        </p>
                    </section>

                    <section className="lux-reveal glass-dark rounded-3xl p-5 md:p-8 border border-white/60">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Kepengurusan Inti</h2>
                            <div className="px-3 py-1.5 rounded-full bg-white/55 text-xs tracking-wider uppercase text-zinc-700 border border-white/70">
                                {currentIndex + 1} / {totalMembers}
                            </div>
                        </div>

                        <div className="relative">
                            <div className={`selection-track grid grid-cols-3 gap-3 md:gap-6 items-end ${slideDirection ? `carousel-shift-${slideDirection}` : ''}`}>
                                {[-1, 0, 1].map((offset) => {
                                    const member = getMember(offset);
                                    const isCenter = offset === 0;

                                    return (
                                        <article
                                            key={`${member.role}-${member.name}-${offset}`}
                                            className={`select-card text-center ${isCenter ? 'select-card-center opacity-100' : 'select-card-side opacity-70'}`}
                                        >
                                            <img
                                                className={`mx-auto object-cover rounded-xl select-image ${isCenter
                                                    ? 'w-40 h-52 md:w-56 md:h-72 lg:w-64 lg:h-80'
                                                    : 'w-32 h-40 md:w-40 md:h-52 lg:w-44 lg:h-56'
                                                    }`}
                                                src={member.photo || fallbackPhoto}
                                                alt={member.name}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = fallbackPhoto;
                                                }}
                                            />
                                            <div className={`mt-3 w-full flex flex-col items-center text-center transition-all duration-700 ${isCenter ? '' : 'scale-95'}`}>
                                                <h4 className={`${isCenter ? 'text-[12px] sm:text-sm md:text-2xl' : 'text-[9px] sm:text-xs md:text-lg'} font-semibold leading-tight max-w-full`}>
                                                    {member.name}
                                                </h4>
                                                <span className={`block text-zinc-600 leading-tight max-w-full ${isCenter ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[8px] sm:text-[11px] md:text-sm'}`}>
                                                    {member.role}
                                                </span>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={goPrev}
                                className="group px-4 py-2 rounded-xl bg-white/60 hover:bg-white/80 text-zinc-800 border border-white/80 text-sm transition duration-300"
                                aria-label="Halaman sebelumnya"
                            >
                                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">Prev</span>
                            </button>
                            {boardMembers.map((_, pageIndex) => (
                                <button
                                    key={`dot-${pageIndex}`}
                                    type="button"
                                    onClick={() => setCurrentIndex(pageIndex)}
                                    className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === pageIndex ? 'w-8 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.65)]' : 'w-2.5 bg-zinc-500/60 hover:bg-zinc-500'
                                        }`}
                                    aria-label={`Halaman ${pageIndex + 1}`}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={goNext}
                                className="group px-4 py-2 rounded-xl bg-white/60 hover:bg-white/80 text-zinc-800 border border-white/80 text-sm transition duration-300"
                                aria-label="Halaman berikutnya"
                            >
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">Next</span>
                            </button>
                        </div>

                        <article key={activeMember.name} className="lux-reveal-soft mt-7 md:mt-8 rounded-2xl border border-white/70 bg-white/45 px-4 md:px-6 py-4 md:py-5">
                            <p className="text-red-400 text-[11px] md:text-xs tracking-[0.24em] uppercase mb-2">
                                Profil Pengurus
                            </p>
                            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">{activeMember.name}</h3>
                            <p className="text-zinc-600 text-sm md:text-base mt-1">{activeMember.role}</p>
                            <p className="text-zinc-700 text-sm md:text-base mt-3 leading-relaxed">
                                {activeMember.bio}
                            </p>
                        </article>
                    </section>
                </div>
            </div>

            <div className="mt-10">
                <Footer />
            </div>

            <style>{`
                .glass-dark {
                    background: linear-gradient(150deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.48));
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 24px 64px rgba(70, 70, 80, 0.18);
                }

                .lux-reveal {
                    opacity: 0;
                    transform: translateY(26px) scale(0.985);
                    animation: revealLux 0.95s cubic-bezier(.16, 1, .3, 1) forwards;
                }

                .lux-reveal-soft {
                    animation: revealSoft 0.65s cubic-bezier(.22, 1, .36, 1);
                }

                .selection-track {
                    will-change: transform, opacity;
                }

                .select-card {
                    transition: transform 980ms cubic-bezier(.16, 1, .3, 1), opacity 980ms cubic-bezier(.16, 1, .3, 1), filter 980ms cubic-bezier(.16, 1, .3, 1);
                    will-change: transform, opacity, filter;
                }

                .select-card-center {
                    transform: translateY(0) scale(1.015);
                    filter: saturate(1.05);
                }

                .select-card-side {
                    transform: translateY(6px) scale(0.955);
                    filter: saturate(0.86);
                }

                .select-image {
                    transition: transform 980ms cubic-bezier(.16, 1, .3, 1), filter 980ms cubic-bezier(.16, 1, .3, 1), box-shadow 980ms cubic-bezier(.16, 1, .3, 1);
                }

                .select-card-center .select-image {
                    box-shadow: 0 0px 25px rgba(10, 10, 10, 0.12);
                }

                .select-card-side .select-image {
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
                }

                .carousel-shift-next {
                    animation: trackShiftNext 920ms cubic-bezier(.16, 1, .3, 1) both;
                }

                .carousel-shift-prev {
                    animation: trackShiftPrev 920ms cubic-bezier(.16, 1, .3, 1) both;
                }

                @keyframes revealLux {
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes revealSoft {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes trackShiftNext {
                    from {
                        transform: translateX(3px);
                        opacity: 0.95;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes trackShiftPrev {
                    from {
                        transform: translateX(-3px);
                        opacity: 0.95;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

            `}</style>
        </div>
    );
}

const strukturRoot = document.getElementById('react-root-struktur');
if (strukturRoot) {
    ReactDOM.createRoot(strukturRoot).render(<StrukturPage />);
}
