import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { Footer } from './components/Footer'; // pastikan Footer.jsx ada

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
            <main className="flex-grow mt-16 mb-4 w-full pt-4 px-8 pb-8 pt-4">
                <section className="mt-8 mb-10 relative overflow-hidden text-white bg-transparent w-screen left-1/2 right-1/2 -mx-[50vw]">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
                        <div className="relative">
                            <div className="relative grid grid-cols-[0.9fr_1.1fr] md:grid-cols-2 gap-4 md:gap-8 items-center px-4 py-6 md:px-10 md:py-10">
                                <div className="order-1">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/images/home/moment.png"
                                            alt=""
                                            className="block w-full mx-auto h-auto max-h-[210px] md:max-h-[580px] object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="order-2">
                                    <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.25em] text-red-300 font-bold mb-2 md:mb-4">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="text-3xl font-bold text-center mb-10">Berita Terbaru</h1>

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
                    <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
                        Media Center Garuda
                    </h2>
                    <div className="relative overflow-hidden rounded-2xl bg-transparent py-6">
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
                    </div>
                </section>

            </main>

            {/* Footer */}
            <Footer />

            <style>{`
                .carousel-track {
                    animation: carousel-scroll 24s linear infinite;
                }
                @keyframes carousel-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

// Render React
const homeRoot = document.getElementById('react-root');
if (homeRoot) {
    ReactDOM.createRoot(homeRoot).render(<App />);
}
