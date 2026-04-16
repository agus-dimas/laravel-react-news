import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { BannerSlider } from './components/BannerSlider';
import { Footer } from './components/Footer';

const TiltCard = ({ title, description, image, link, author, category }) => {
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
                {/* <div className="px-4 mt-2">
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {category || 'Umum'}
                    </span>
                </div> */}
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

const NewsApp = () => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [categories, setCategories] = useState(['Semua']);
    const [selectedCategory, setSelectedCategory] = useState('Semua');

    const fetchCategories = () => {
        fetch('/api/news/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(['Semua', ...data]);
            })
            .catch(err => console.error('Fetch categories error:', err));
    };

    const fetchNews = (targetPage = 1, category = selectedCategory) => {
        let url = `/api/news?page=${targetPage}`;
        if (category && category !== 'Semua') {
            url += `&category=${encodeURIComponent(category)}`;
        }
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                const formatted = result.data.map((n) => ({
                    title: n.title,
                    description: n.content,
                    image: n.image ? `/storage/${n.image}` : '/placeholder.jpg',
                    link: `/news/${n.id}`,
                    author: n.user_name || 'Anonim',
                    category: n.category || 'Umum',
                }));

                setCards(formatted);
                setPage(result.current_page);
                setLastPage(result.last_page);
            })
            .catch((err) => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchCategories();
        fetchNews();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-grow pt-2 md:pt-24 px-2 md:px-8 pb-8">
                <BannerSlider />
                <h1 className="text-3xl font-bold text-center mb-6">Berita Garuda</h1>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setSelectedCategory(cat);
                                fetchNews(1, cat);
                            }}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${selectedCategory === cat
                                ? 'bg-[#b3181f] text-white shadow-md'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

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
        </div>
    );
};

const newsRoot = document.getElementById('react-root-news');

if (newsRoot) {
    ReactDOM.createRoot(newsRoot).render(<NewsApp />);
}
