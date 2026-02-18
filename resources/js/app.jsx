import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { BannerSlider } from './components/BannerSlider';
import { Footer } from './components/Footer'; // pastikan Footer.jsx ada

const shoeBrands = [
    { name: 'Nike111', image: '/images/p1.png' },
    { name: 'Adidas', image: '/images/p2.png' },
    { name: 'Puma', image: '/images/p3.png' },
    { name: 'Converse', image: '/images/p4.png' },
    { name: 'Vans', image: '/images/p5.png' },
    { name: 'Adidas', image: '/images/p2.png' },
    { name: 'Converse', image: '/images/p4.png' },
    { name: 'Adidas', image: '/images/p2.png' },
    { name: 'Puma', image: '/images/p3.png' },
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
                className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer bg-white flex flex-col h-[420px]"
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
                <span className="mt-auto px-4 pb-4 text-sm text-indigo-600 font-medium">
                    Baca selengkapnya →
                </span>
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
                <BannerSlider />
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
                        Media Center
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
