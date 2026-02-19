import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

const boardMembers = [
    {
        role: 'Ketua Umum',
        name: 'Ahmad Ridha Sabana',
        bio: 'Memimpin arah organisasi dan memastikan setiap program berjalan tepat sasaran.',
        photo: '/images/pengurus/ketum.jpg',
    },
    {
        role: 'Sekretaris jenderanl',
        name: 'Ihsan Jauhari',
        bio: 'Mengelola administrasi organisasi dan dokumentasi kegiatan strategis.',
        photo: '/images/pengurus/ihsan.jpg',
    },
    {
        role: 'Bendahara Umum',
        name: 'Fajar Muhammad Faiz Rozi',
        bio: 'Menjaga transparansi keuangan serta pengelolaan anggaran program.',
        photo: '/images/pengurus/pfaiz.jpg',
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
        }, 900);
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
        <div className="min-h-screen pt-24 pb-14 px-4 sm:px-6 lg:px-8 bg-[#202020] text-white">
            <div className="relative max-w-6xl mx-auto">
                <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-red-500/20 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full bg-zinc-100/10 blur-[100px]" />

                <section className="reveal-up glass-card rounded-3xl p-6 md:p-10 mb-6">
                    <p className="text-red-300 text-xs tracking-[0.25em] uppercase mb-3">
                        Struktur Organisasi
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Kepengurusan Organisasi
                    </h1>
                    <p className="text-zinc-200 md:max-w-3xl leading-relaxed">
                        Tim pengurus kami bekerja secara kolaboratif untuk menjalankan visi organisasi.
                        Setiap posisi memiliki tanggung jawab yang jelas agar program berjalan efektif,
                        transparan, dan berdampak nyata.
                    </p>
                </section>

                <section className="reveal-up mb-6">
                    <article className="glass-card glass-card-strong flex flex-col sm:flex-row overflow-hidden rounded-2xl">
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
                            <p className="text-red-300 text-sm font-medium mb-1">{chief.role}</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">{chief.name}</h2>
                            <p className="text-zinc-200 leading-relaxed md:max-w-2xl">{chief.bio}</p>
                        </div>
                    </article>
                </section>

                <section className="reveal-up glass-card rounded-3xl p-6 md:p-8">
                    <div className="mb-8 text-center">
                        <h2 className="mb-3 text-2xl md:text-3xl font-bold">Kepengurusan Inti</h2>
                        <p className="text-zinc-200 md:w-8/12 md:mx-auto">
                            Tim pengurus inti yang mendukung jalannya organisasi secara strategis dan operasional.
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
                                            ? 'w-32 h-44 md:w-56 md:h-72 lg:w-64 lg:h-80'
                                            : 'w-24 h-32 md:w-40 md:h-52 lg:w-44 lg:h-56'
                                            }`}
                                        src={member.photo || fallbackPhoto}
                                        alt={member.name}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = fallbackPhoto;
                                        }}
                                    />
                                    <div className={`mt-3 transition-all duration-700 ${isCenter ? '' : 'scale-95'}`}>
                                        <h4 className={`${isCenter ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} font-semibold`}>
                                            {member.name}
                                        </h4>
                                        <span className="block text-sm text-zinc-300">{member.role}</span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            onClick={goPrev}
                            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
                            aria-label="Halaman sebelumnya"
                        >
                            Prev
                        </button>
                        {members.map((_, pageIndex) => (
                            <button
                                key={`dot-${pageIndex}`}
                                type="button"
                                onClick={() => setCurrentIndex(pageIndex)}
                                className={`h-2.5 rounded-full transition-all ${currentIndex === pageIndex ? 'w-8 bg-red-400' : 'w-2.5 bg-white/40'
                                    }`}
                                aria-label={`Halaman ${pageIndex + 1}`}
                            />
                        ))}
                        <button
                            type="button"
                            onClick={goNext}
                            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
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
                    background: linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.06));
                    border: 1px solid rgba(255,255,255,0.22);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32);
                }

                .glass-card-strong {
                    background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08));
                }

                .select-card {
                    transition: transform 1100ms cubic-bezier(.16,1,.3,1), opacity 1100ms cubic-bezier(.16,1,.3,1), filter 1100ms cubic-bezier(.16,1,.3,1);
                    will-change: transform, opacity, filter;
                }

                .select-card-center {
                    transform: translateY(0) scale(1.02);
                    filter: saturate(1.05);
                }

                .select-card-side {
                    transform: translateY(8px) scale(0.94);
                    filter: saturate(0.78) blur(0.2px);
                }

                .select-image {
                    transition: transform 1100ms cubic-bezier(.16,1,.3,1), box-shadow 1100ms cubic-bezier(.16,1,.3,1), filter 1100ms cubic-bezier(.16,1,.3,1);
                }

                .select-card-center .select-image {
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
                }

                .select-card-side .select-image {
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.24);
                }

                .selection-track {
                    will-change: transform, opacity;
                }

                .carousel-shift-next {
                    animation: trackShiftNext 900ms cubic-bezier(.16,1,.3,1) both;
                }

                .carousel-shift-prev {
                    animation: trackShiftPrev 900ms cubic-bezier(.16,1,.3,1) both;
                }

                @keyframes trackShiftNext {
                    from {
                        transform: translateX(8px);
                        opacity: 0.88;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes trackShiftPrev {
                    from {
                        transform: translateX(-8px);
                        opacity: 0.88;
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
