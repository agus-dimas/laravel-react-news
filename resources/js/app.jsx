import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { Footer } from './components/Footer'; // Footer.jsx ada

const shoeBrands = [
    { name: 'persepsi', image: '/images/p1.png' },
    { name: 'the respon', image: '/images/p2.png' },
    { name: 'wehjangan', image: '/images/p3.png' },
    { name: 'the guardian', image: '/images/p4.png' },
    { name: 'garuda', image: '/images/p5.png' },
    { name: 'the respon', image: '/images/p2.png' },
    { name: 'the guardian', image: '/images/p4.png' },
    { name: 'the respon', image: '/images/p2.png' },
    { name: 'wehjangan', image: '/images/p3.png' },
];

// Komponen Til Card
const TiltCard = ({ title, description, image, link, author }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <a href={link} className="w-full">
            <div
                className="group rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white flex flex-col h-[420px]"
                onMouseMove={handleMove}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
                <img
                    src={image || '/placeholder.jpg'}
                    className="w-full h-52 object-cover"
                    alt={title}
                />
                <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm px-4 text-gray-400">Oleh: {author || 'Anonim'}</p>
                <p className="px-4 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {description}
                </p>
                <div className="mt-auto px-4 pb-4">
                    <span className="relative inline-flex items-center justify-center overflow-hidden rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#d11b24] via-[#b3181f] to-[#7f0f15] transition-all duration-500 group-hover:scale-105"></span>
                        <span className="absolute -inset-y-1 -left-8 w-8 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[105%]"></span>
                        <span className="relative">Baca selengkapnya →</span>
                    </span>
                </div>
            </div>
        </a>
    );
};

// Komponen App utama
const App = () => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchNews = (page = 1) => {
        fetch(`/api/news?page=${page}`)
            .then(res => res.json())
            .then(result => {
                const data = result.data;
                const formatted = data.map(n => ({
                    title: n.title,
                    description: n.content,
                    image: n.image ? `/storage/${n.image}` : '/placeholder.jpg',
                    link: `/news/${n.id}`,
                    author: n.user_name || 'Anonim',
                }));
                setCards(formatted);
                setPage(result.current_page);
                setLastPage(result.last_page);
            })
            .catch(err => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">


            {/* Main content */}
            < main className="flex-grow mt-10 mb-4 w-full pt-6 px-8 pb-8 pt-4" >
                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden mb-8">
                    <img
                        src="/images/banner home.jpg"
                        alt="Header Home"
                        className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover"
                    />
                    <span className="hero-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />
                    <span className="hero-sheen-two pointer-events-none absolute inset-y-0 -left-1/3 w-1/4" />
                </section>

                <section className="mb-8">
                    <div className="w-full md:max-w-5xl mx-auto px-3 md:px-6">
                        <div className="rounded-2xl px-6 py-6 md:px-8 md:py-7">
                            <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-red-600 font-semibold mb-2">
                                Partai Garuda
                            </p>
                            <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
                                Gerakan Politik Kebangsaan Untuk Indonesia
                            </h2>
                            <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                                Partai Garuda hadir sebagai wadah perjuangan politik yang berfokus pada semangat
                                nasionalisme, kerakyatan, dan keadilan sosial. Kami berjuang dan bekerja untuk perubahan Indonesia.
                                Dan setiap kader kami adalah patriot-patriot bangsa yang selalu siap menyingsingkan lengan baju
                                untuk mewujudkan cita-cita para pendiri Bangsa dan Negara Kesatuan Republik Indonesia.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#202020] py-8 md:py-8 mb-8">
                    <div className="max-w-7xl mx-auto px-2 md:px-8 grid grid-cols-3 gap-2 md:gap-5 place-items-center">
                        <div className="overflow-hidden rounded-xl w-full max-w-[360px] bg-white/5">
                            <img
                                src="/images/home/NASIONALIS.jpg"
                                alt="Galeri 1"
                                className="block w-full object-contain object-center mx-auto"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl w-full max-w-[360px] bg-white/5">
                            <img
                                src="/images/home/RELIGIUS.jpg"
                                alt="Galeri 2"
                                className="block w-full object-contain object-center mx-auto"
                            />
                        </div>
                        <div className="overflow-hidden rounded-xl w-full max-w-[360px] bg-white/5">
                            <img
                                src="/images/home/KERAKYATAN.jpg"
                                alt="Galeri 3"
                                className="block w-full object-contain object-center mx-auto"
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-0 mb-20 relative z-10 overflow-hidden text-white bg-transparent w-screen left-1/2 right-1/2 -mx-[50vw]">
                    <div className="sticky top-20 max-w-7xl mx-auto px-6 md:px-8 py-3 md:py-4">
                        <div className="relative">
                            <div className="relative grid grid-cols-[0.9fr_1.1fr] md:grid-cols-2 gap-4 md:gap-8 items-center px-4 py-6 md:px-10 md:py-10">
                                <div className="order-1">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/images/home/moment.png"
                                            alt="Moment Partai Garuda"
                                            className="w-full mx-auto h-[200px] md:h-[420px] object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="order-2">
                                    <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.25em] text-red-500 font-bold mb-2 md:mb-4">
                                        Partai Garda Republik Indonesia
                                    </p>
                                    <h2 className="text-lg md:text-3xl font-bold leading-tight text-black mb-2 md:mb-4">
                                        "Bersama, Kita Bisa!"
                                    </h2>
                                    <p className="text-xs md:text-base text-black leading-relaxed">
                                        Komitmen Kami Kami siap menjadi pelopor perubahan dan garda terdepan
                                        dalam memperjuangkan hak-hak rakyat. Dengan tekad yang bulat,
                                        kami berkomitmen untuk selalu hadir dalam setiap langkah perjuangan
                                        masyarakat, memberikan solusi nyata untuk tantangan bangsa,
                                        dan membawa aspirasi Anda ke tingkat yang lebih tinggi.
                                    </p>
                                    <div className="mt-10 px-auto">
                                        <a
                                            href="/"
                                            className="relative inline-flex items-center justify-center overflow-hidden rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-[#d11b24] via-[#b3181f] to-[#7f0f15] transition-all duration-500 group-hover:scale-105"></span>
                                            <span className="absolute -inset-y-1 -left-8 w-8 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[105%]"></span>
                                            <span className="relative">BERGABUNG MENJADI ANGGOTA</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-20 -mt-14 md:-mt-20 mb-0">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#202020] py-8 md:py-8 mb-0 shadow-[0_20px_36px_rgba(0,0,0,0.18)]">
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-red-600 font-semibold text-center mb-2 md:mb-3">
                                Gerakan
                            </p>
                            <h3 className="text-lg md:text-3xl font-bold text-white text-center px-4">
                                Partai Garuda Untuk Indonesia Berdaulat
                            </h3>
                            <p className="mt-3 md:mt-4 text-sm md:text-base text-white text-center max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
                                Kami hadir membawa semangat perubahan melalui kerja politik yang berpihak pada rakyat,
                                mendorong keadilan sosial, serta memperkuat persatuan nasional untuk masa depan Indonesia
                                yang lebih maju dan bermartabat.
                            </p>

                            <div className="mt-3 md:mt-4 flex justify-center px-4 md:px-0">
                                <img
                                    src="/images/home/indonesia.png"
                                    alt="Highlight Partai Garuda"
                                    className="w-full max-w-4xl md:max-w-5xl h-auto max-h-[220px] md:max-h-[340px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#303030] pb-4 mb-10">
                    <div className="max-w-6xl mx-auto">
                        <section className="mb-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 rounded-3xl p-4 md:p-6">
                                <div className="flex flex-col justify-center min-w-0 text-center md:text-left">
                                    <p className="text-[10px] md:text-[11px] tracking-[0.18em] md:tracking-[0.28em] uppercase text-red-600 font-bold mb-2 md:mb-3">
                                        Kaderisasi Pemimpin                                </p>
                                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-white leading-tight">
                                        Membangun Indonesia yang Sejahtera.                                 <img
                                        />
                                    </h2>
                                    <p className="mt-2 md:mt-3 text-sm sm:text-base md:text-base text-white leading-relaxed">
                                        Melalui semangat kebersamaan dan partisipasi masyarakat, kepemimpinan dapat menghadirkan
                                        kebijakan yang berpihak pada kesejahteraan rakyat serta membawa Indonesia menuju masa depan yang lebih adil, kuat, dan sejahtera.
                                    </p>
                                </div>

                                <div className="rounded-2xl overflow-hidden bg-transparent flex items-center justify-center p-1 md:p-4">
                                    <div className="flex items-center gap-2 md:gap-4">
                                        <video
                                            className="w-full md:w-[1980px] max-w-full aspect-[16/9] object-cover rounded-xl shadow-[10px_12px_0_rgba(179,24,31,0.9)]"
                                            src="/videos/home video.mp4"
                                            poster="/images/-"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            controls
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <h1 className="text-3xl font-bold text-center mb-1">Berita Terbaru</h1>
                <p className="mt-2 md:mt-3 text-center sm:text-base md:text-base text-black leading-relaxed mb-10">
                    Informasi terkini yang menghadirkan berbagai kegiatan dan perkembangan terbaru.
                </p>

                {/* Grid card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <TiltCard key={i} {...card} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6 space-x-2">
                    <button
                        onClick={() => fetchNews(page - 1)}
                        disabled={page <= 1}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">{page} / {lastPage}</span>
                    <button
                        onClick={() => fetchNews(page + 1)}
                        disabled={page >= lastPage}
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

                <section className="mt-12">
                    <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
                        Media Center Garuda
                    </h2>
                    <div className="relative overflow-hidden rounded-2xl bg-transparent py-2 pt-1 space-y-4">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

                        <div className="carousel-track flex items-center gap-10 w-max px-8">
                            {[...shoeBrands, ...shoeBrands].map((brand, i) => (
                                <div
                                    key={`${brand.name}-${i}`}
                                    className="h-16 w-36 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <img
                                        src={brand.logo || brand.image}
                                        alt={brand.name}
                                        title={brand.name}
                                        className="max-h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition"
                                        loading="lazy"
                                    />
                                </div>

                            ))}
                        </div>

                        <div className="carousel-track-reverse flex items-center gap-10 w-max px-8">
                            {[...shoeBrands, ...shoeBrands].map((brand, i) => (
                                <div
                                    key={`reverse-${brand.name}-${i}`}
                                    className="h-16 w-36 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0"
                                >
                                    <img
                                        src={brand.logo || brand.image}
                                        alt={brand.name}
                                        title={brand.name}
                                        className="max-h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main >

            {/* Footer */}
            < Footer />

            <style>{`
                .hero-sheen {
                    background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.06) 58%, transparent 100%);
                    filter: blur(0.4px);
                    animation: heroSheen 2.8s cubic-bezier(.52, 1, .36, 1) .35s both;
                }
                .hero-sheen-two {
                    background: linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.04) 60%, transparent 100%);
                    filter: blur(0.5px);
                    animation: heroSheenTwo 4.2s cubic-bezier(.22, 1, .36, 1) 1s both;
                }
                .carousel-track {
                    animation: carousel-scroll 24s linear infinite;
                }
                .carousel-track-reverse {
                    animation: carousel-scroll-reverse 24s linear infinite;
                }
                @keyframes heroSheen {
                    from {
                        transform: translateX(0);
                        opacity: 0;
                    }
                    12% {
                        opacity: 1;
                    }
                    to {
                        transform: translateX(440%);
                        opacity: 0;
                    }
                }
                @keyframes heroSheenTwo {
                    from {
                        transform: translateX(0);
                        opacity: 0;
                    }
                    15% {
                        opacity: 1;
                    }
                    to {
                        transform: translateX(520%);
                        opacity: 0;
                    }
                }
                @keyframes carousel-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes carousel-scroll-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div >
    );
};

// Render React
const homeRoot = document.getElementById('react-root');
if (homeRoot) {
    ReactDOM.createRoot(homeRoot).render(<App />);
}
