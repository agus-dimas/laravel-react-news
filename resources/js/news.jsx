import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { BannerSlider } from './components/BannerSlider';
import { Footer } from './components/Footer';

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
                <img src={image || '/placeholder.jpg'} className="w-full h-52 object-cover" alt={title} />
                <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm px-4 text-gray-400">Oleh: {author || 'Anonim'}</p>
                <p className="px-4 text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {description}
                </p>
                <div className="mt-auto px-4 pb-4">
                    <span className="read-more-btn">
                        Baca selengkapnya →
                    </span>
                </div>
            </div>
        </a>
    );
};

const NewsApp = () => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchNews = (targetPage = 1) => {
        fetch(`/api/news?page=${targetPage}`)
            .then((res) => res.json())
            .then((result) => {
                const formatted = result.data.map((n) => ({
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
            .catch((err) => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-grow pt-24 px-8 pb-8">
                {/* <BannerSlider /> */}
                <h1 className="text-3xl font-bold text-center mb-10">Berita Garuda</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <TiltCard key={i} {...card} />
                    ))}
                </div>

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
            </main>

            <Footer />

            <style>{`
                .read-more-btn {
                    position: relative;
                    display: inline-block;
                    border-radius: 9999px;
                    border: 1px solid #111827;
                    padding: 4px 8px;
                    font-size: 0.62rem;
                    font-weight: 600;
                    color: #ffffff;
                    background: #111827;
                    transition: background .28s ease, border-color .28s ease, transform .2s ease;
                }
                .group:hover .read-more-btn {
                    border-color: #b3181f;
                    background: #b3181f;
                    transform: translateY(-1px);
                }
            `}</style>
        </div>
    );
};

const newsRoot = document.getElementById('react-root-news');

if (newsRoot) {
    ReactDOM.createRoot(newsRoot).render(<NewsApp />);
}
