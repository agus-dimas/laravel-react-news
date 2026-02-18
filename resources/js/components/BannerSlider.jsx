import React, { useState, useEffect } from 'react';

const slides = [
    { id: 1, image: '/images/banner home.jpg', title: 'Selamat Datang di MyNews' },
    { id: 2, image: '/images/slide2.jpg', title: 'Berita Terbaru Setiap Hari' },
    { id: 3, image: '/images/slide3.jpg', title: 'Ikuti Update Terkini' },
];

export function BannerSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000); // ganti slide tiap 5 detik
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-64 sm:h-80 lg:h-96 relative overflow-hidden rounded-lg mb-8">
            {slides.map((slide, index) => (
                <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute bottom-4 left-4 text-white bg-black/40 px-4 py-2 rounded">
                {slides[current].title}
            </div>
        </div>
    );
}
