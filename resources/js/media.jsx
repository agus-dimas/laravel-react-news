import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { Footer } from './components/Footer'; // Footer.jsx ada

const mediaItems = [
    { title: 'Press Conference', image: '/images/p1.png', tag: 'Rilis' },
    { title: 'Kegiatan Lapangan', image: '/images/p2.png', tag: 'Dokumentasi' },
    { title: 'Dialog Publik', image: '/images/p3.png', tag: 'Video' },
    { title: 'Konsolidasi Kader', image: '/images/p4.png', tag: 'Galeri' },
    { title: 'Aksi Sosial', image: '/images/p5.png', tag: 'Liputan' },
    { title: 'Program Partai', image: '/images/p1.png', tag: 'Update' },
];

const MediaCard = ({ title, image, tag }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 10;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <article
            className="group rounded-2xl overflow-hidden bg-white shadow-xl border border-zinc-200/70 transition-transform duration-200 ease-out"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img src={image} alt={title} className="w-full h-52 object-cover" loading="lazy" />
            <div className="p-4">
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-red-600 font-semibold mb-2">
                    {tag}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
                <p className="text-sm text-zinc-600 mt-1">Konten media resmi Partai Garuda.</p>
            </div>
        </article>
    );
};

const MediaApp = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f5f5f4]">
            <main className="flex-grow pt-24 px-4 md:px-8 pb-10">
                <section className="max-w-6xl mx-auto">
                    <div className="rounded-3xl border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_24px_70px_rgba(20,20,20,0.12)] p-6 md:p-9 mb-8">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-red-600 font-semibold mb-3">
                            Media Center
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Menu Media Partai Garuda</h1>
                        <p className="mt-3 text-zinc-600 leading-relaxed max-w-3xl">
                            Berisi publikasi resmi, dokumentasi kegiatan, dan materi komunikasi partai dalam satu halaman.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mediaItems.map((item, i) => (
                            <MediaCard key={`${item.title}-${i}`} {...item} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

const mediaRoot = document.getElementById('react-root-media');
if (mediaRoot) {
    ReactDOM.createRoot(mediaRoot).render(<MediaApp />);
}
