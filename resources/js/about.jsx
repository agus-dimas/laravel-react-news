import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { Footer } from './components/Footer';

const values = [
    {
        title: 'Kerakyatan',
        description: 'Setiap keputusan politik berpijak pada kebutuhan riil masyarakat di lapangan.',
    },
    {
        title: 'Nasionalisme',
        description: 'Komitmen menjaga persatuan, kedaulatan bangsa, dan martabat Indonesia.',
    },
    {
        title: 'Religius',
        description: 'Setiap kebijakan lahir dari prinsip kejujuran, keadilan, dan keberpihakan pada kepentingan umum.',
    },
];

function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f6f6f5]">
            <main className="flex-grow pt-16 pb-10">
                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden bg-[#1b1b1b] text-white">
                    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="flex flex-col justify-start">
                            <div className="inline-flex flex-col items-start">
                                <p className="pl-[2px] text-[11px] tracking-[0.28em] uppercase text-red-600 font-semibold mb-3 leading-none">About Us</p>
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.02] text-white ">
                                    PARTAI GARUDA
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <div className="max-w-xl pt-3 border-t border-white/30 md:pt-0 md:pl-8 md:border-t-0 md:border-l">
                                <span className="block mb-2 text-red-600 font-semibold tracking-[0.16em] uppercase text-xs md:text-sm">
                                    GARDA REPUBLIK INDONESIA
                                </span>
                                <p className="text-zinc-100/95 leading-relaxed text-sm md:text-base">
                                    Kami hadir sebagai gerakan politik modern yang menghubungkan ide, aksi, dan dampak nyata
                                    untuk masyarakat.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden mb-8">
                    <img
                        src="/images/banner-about.jpg"
                        alt="Header Home"
                        className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover"
                    />
                    <span className="hero-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3" />
                    <span className="hero-sheen-two pointer-events-none absolute inset-y-0 -left-1/3 w-1/4" />
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-2xl bg-white border border-zinc-200 p-5 shadow-[0_10px_30px_rgba(20,20,20,0.08)]">
                            <p className="text-zinc-500 text-sm">Fokus Kerja</p>
                            <p className="text-2xl font-bold text-zinc-900 mt-1">Kaderisasi</p>
                        </div>
                        <div className="rounded-2xl bg-[#b3181f] text-white p-5 shadow-[0_12px_32px_rgba(20,20,20,0.08)]">
                            <p className="text-white/80 text-sm">Jangkauan</p>
                            <p className="text-2xl font-bold mt-1">Nasional</p>
                        </div>
                        <div className="rounded-2xl bg-white border border-zinc-200 p-5 shadow-[0_10px_30px_rgba(20,20,20,0.08)]">
                            <p className="text-zinc-500 text-sm">Karakter Gerakan</p>
                            <p className="text-2xl font-bold text-zinc-900 mt-1">Kolaboratif</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                        <article className="rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 shadow-[0_18px_44px_rgba(20,20,20,0.08)]">
                            <p className="text-[11px] tracking-[0.24em] uppercase text-red-600 font-semibold mb-3">
                                Visi & Misi
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Terwujudnya Cita-cita Perubahan Indonesia.</h2>

                            <div className="mt-5 space-y-3">
                                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                    <p className="text-zinc-700 leading-relaxed">
                                        Terwujudnya cita-cita nasional bangsa Indonesia sebagaimana dimaksud dalam Pembukaan
                                        Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                    <p className="text-zinc-700 leading-relaxed">
                                        Terwujudnya masyarakat demokratis yang adil dan sejahtera serta berkeyakinan pada
                                        Tuhan Yang Maha Esa, mencintai tanah air dan bangsa dalam bingkai Negara Kesatuan
                                        Republik Indonesia.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                    <p className="text-zinc-700 leading-relaxed">
                                        Mewujudkan masyarakat kedaulatan rakyat dalam berdemokrasi, yang menjunjung tinggi
                                        nilai-nilai kebenaran dan hukum yang berlaku.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
                                    <p className="text-zinc-700 leading-relaxed">
                                        Mewujudkan ekonomi kerakyatan yang berkeadilan.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-[0_18px_44px_rgba(20,20,20,0.08)] p-4 lg:sticky lg:top-24">
                            <img
                                src="/images/update logo/logo visi.png"

                                alt="Aktivitas Partai Garuda"
                                className="w-full h-auto max-h-[520px] object-contain"
                            />
                        </article>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-red-600 font-semibold mb-4 text-center">Nilai Inti</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {values.map((value) => (
                            <article
                                key={value.title}
                                className="rounded-2xl bg-white border border-zinc-200 p-5 shadow-[0_12px_32px_rgba(20,20,20,0.07)]"
                            >
                                <h3 className="text-xl font-bold text-zinc-900">{value.title}</h3>
                                <p className="mt-2 text-zinc-600 leading-relaxed">{value.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

const aboutRoot = document.getElementById('react-root-about');
if (aboutRoot) {
    ReactDOM.createRoot(aboutRoot).render(<AboutPage />);
}
