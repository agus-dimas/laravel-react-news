import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const boardMembers = [
    {
        role: 'Ketua Umum',
        name: 'Ahmad Ridha Sabana',
        bio: 'Memimpin arah Partai dan memastikan setiap program berjalan sesuai dengan misi partai.',
        photo: '/images/pengurus/ketum.jpg',
    },
    {
        role: 'Ketua Umum',
        name: 'Ahmad Ridha Sabana',
        bio: 'Memimpin arah Partai dan memastikan setiap program berjalan sesuai dengan misi partai.',
        photo: '/images/pengurus/ketum.jpg',
    },
    {
        role: 'Sekretaris jenderanl',
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
    const [chief, ...members] = boardMembers;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);
    const slideTimerRef = useRef(null);
    const totalMembers = members.length;

    const triggerSlide = (direction, updaterFn) => {
        if (slideTimerRef.current) {
            clearTimeout(slideTimerRef.current);
        }
        setSlideDirection(direction);
        setCurrentIndex(updaterFn);
        slideTimerRef.current = setTimeout(() => {
            setSlideDirection(null);
        }, 920);
    };

    const goNext = () => {
        triggerSlide('next', (prev) => (prev + 1) % totalMembers);
    };

    const goPrev = () => {
        triggerSlide('prev', (prev) => (prev - 1 + totalMembers) % totalMembers);
    };

    const getMember = (offset) => {
        return members[(currentIndex + offset + totalMembers) % totalMembers];
    };

    return (
        <div className="min-h-screen pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-[#f8f8f7] text-zinc-900">
            <div className="relative max-w-6xl mx-auto">
                <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-red-300/35 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full bg-zinc-300/30 blur-[100px]" />

                <section className="reveal-up glass-card rounded-3xl p-6 md:p-10 mb-6">
                    <p className="text-red-500 text-xs tracking-[0.25em] uppercase mb-3">
                        Struktur Organisasi
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Kepengurusan Organisasi Partai Garuda
                    </h1>
                    <p className="text-zinc-600 md:max-w-3xl leading-relaxed">
                        kami bekerja secara kolaboratif untuk menjalankan visi organisasi.
                        Setiap posisi memiliki tanggung jawab yang jelas agar semua program yang
                        dirancang dan dilaksanakan sesuai dalam visi dan misi partai.
                    </p>
                </section>

                <section className="reveal-up mb-6">
                    <div className="flex items-stretch gap-4">
                        <article className="glass-card glass-card-strong flex flex-col sm:flex-row overflow-hidden rounded-2xl flex-1">
                            <figure className="sm:w-56 md:w-64 h-48 sm:h-auto shrink-0">
                                <img
                                    src={chief.photo || fallbackPhoto}
                                    alt={chief.name}
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = fallbackPhoto;
                                    }}
                                />
                            </figure>
                            <div className="p-5 md:p-6">
                                <p className="text-red-500 text-sm font-medium mb-1">{chief.role}</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">{chief.name}</h2>
                                <p className="text-zinc-600 leading-relaxed md:max-w-2xl">{chief.bio}</p>
                            </div>
                        </article>

                        <figure className="hidden lg:block w-64 xl:w-72 rounded-2xl overflow-hidden bg-transparent shrink-0">
                            <img
                                src="/images/p5.png"
                                alt="partai garuda"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = fallbackPhoto;
                                }}
                            />
                        </figure>
                    </div>
                </section>

                <section className="reveal-up glass-card rounded-3xl p-6 md:p-8">
                    <div className="mb-8 text-center">
                        <h2 className="mb-3 text-2xl md:text-3xl font-bold">Kepengurusan Inti</h2>
                        <p className="text-zinc-600 md:w-8/12 md:mx-auto">
                            Pengurus inti DPP Partai Garuda yang mendukung jalannya organisasi partai
                            secara strategis dan operasional.
                        </p>
                    </div>

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
                                        <span className={`block text-zinc-500 leading-tight max-w-full ${isCenter ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[8px] sm:text-[11px] md:text-sm'}`}>
                                            {member.role}
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-zinc-700 border border-zinc-200 text-sm transition"
                            aria-label="Halaman sebelumnya"
                        >
                            Prev
                        </button>
                        {members.map((_, pageIndex) => (
                            <button
                                key={`dot-${pageIndex}`}
                                type="button"
                                onClick={() => setCurrentIndex(pageIndex)}
                                className={`h-2.5 rounded-full transition-all ${currentIndex === pageIndex ? 'w-8 bg-red-500' : 'w-2.5 bg-zinc-300'
                                    }`}
                                aria-label={`Halaman ${pageIndex + 1}`}
                            />
                        ))}
                        <button
                            type="button"
                            onClick={goNext}
                            className="px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-zinc-700 border border-zinc-200 text-sm transition"
                            aria-label="Halaman berikutnya"
                        >
                            Next
                        </button>
                    </div>
                </section>
            </div>

            <style>{`
                .reveal-up {
                    opacity: 0;
                    transform: translateY(20px) scale(0.98);
                    animation: revealUp .65s cubic-bezier(.22,1,.36,1) forwards;
                }

                .glass-card {
                    background: linear-gradient(160deg, rgba(255,255,255,0.88), rgba(255,255,255,0.72));
                    border: 1px solid rgba(255,255,255,0.95);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    box-shadow: 0 20px 45px rgba(20, 20, 20, 0.10);
                }

                .glass-card-strong {
                    background: linear-gradient(160deg, rgba(255,255,255,0.93), rgba(255,255,255,0.78));
                }

                .select-card {
                    transition: transform 980ms cubic-bezier(.16,1,.3,1), opacity 980ms cubic-bezier(.16,1,.3,1), filter 980ms cubic-bezier(.16,1,.3,1);
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
                    transition: transform 980ms cubic-bezier(.16,1,.3,1), box-shadow 980ms cubic-bezier(.16,1,.3,1), filter 980ms cubic-bezier(.16,1,.3,1);
                }

                .select-card-center .select-image {
                    box-shadow: 0 0px 25px rgba(10, 10, 10, 0.12);
                }

                .select-card-side .select-image {
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
                }

                .selection-track {
                    will-change: transform, opacity;
                }

                .carousel-shift-next {
                    animation: trackShiftNext 920ms cubic-bezier(.16,1,.3,1) both;
                }

                .carousel-shift-prev {
                    animation: trackShiftPrev 920ms cubic-bezier(.16,1,.3,1) both;
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

                @keyframes revealUp {
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
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
