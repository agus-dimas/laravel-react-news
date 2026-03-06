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
                            <div className="max-w-xl pl-5 md:pl-8 border-l border-white/30">
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
                <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden mb-8 bg-transparent">
                    <img
                        src="/images/banner-about.jpg"
                        alt="Header Home"
                        className="about-banner-drop w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover"
                    />
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-2xl bg-[#1d1c1c] border border-zinc-200 p-5 shadow-[0_10px_30px_rgba(20,20,20,0.08)]">
                            <p className="text-white/80 text-sm">Fokus Kerja</p>
                            <p className="text-2xl font-bold text-white mt-1">Kaderisasi</p>
                        </div>
                        <div className="rounded-2xl bg-[#b3181f] text-white p-5 shadow-[0_12px_32px_rgba(20,20,20,0.08)]">
                            <p className="text-white/80 text-sm">Jangkauan</p>
                            <p className="text-2xl font-bold mt-1">Nasional</p>
                        </div>
                        <div className="rounded-2xl bg-[#1d1c1c] border border-zinc-200 p-5 shadow-[0_10px_30px_rgba(20,20,20,0.08)]">
                            <p className="text-white/80 text-sm">Karakter Gerakan</p>
                            <p className="text-2xl font-bold text-white mt-1">Kolaboratif</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
                        <article className="rounded-3xl bg-gradient-to-br from-white via-white to-red-50/40 border border-zinc-200 p-6 md:p-8 shadow-[0_20px_48px_rgba(20,20,20,0.08)]">
                            <p className="text-[11px] tracking-[0.24em] uppercase text-red-700 font-semibold mb-3">
                                Visi & Misi
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Terwujudnya Cita-cita Perubahan Indonesia.</h2>
                            <p className="mt-3 text-zinc-600 leading-relaxed border-l-2 border-red-400 pl-4">
                                Arah perjuangan kami dibangun di atas konstitusi, nilai kebangsaan, dan komitmen
                                untuk menghadirkan dampak yang bisa dirasakan langsung oleh rakyat.
                            </p>

                            <div className="mt-6 space-y-3">
                                <div className="group rounded-2xl border border-zinc-200 bg-white px-4 py-4 transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_30px_rgba(179,24,31,0.12)]">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-red-100 text-red-700 text-sm font-bold shrink-0">1</span>
                                        <p className="text-zinc-700 leading-relaxed">
                                            Terwujudnya cita-cita nasional bangsa Indonesia sebagaimana dimaksud dalam Pembukaan
                                            Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
                                        </p>
                                    </div>
                                </div>
                                <div className="group rounded-2xl border border-zinc-200 bg-white px-4 py-4 transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_30px_rgba(179,24,31,0.12)]">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-red-100 text-red-700 text-sm font-bold shrink-0">2</span>
                                        <p className="text-zinc-700 leading-relaxed">
                                            Terwujudnya masyarakat demokratis yang adil dan sejahtera serta berkeyakinan pada
                                            Tuhan Yang Maha Esa, mencintai tanah air dan bangsa dalam bingkai Negara Kesatuan
                                            Republik Indonesia.
                                        </p>
                                    </div>
                                </div>
                                <div className="group rounded-2xl border border-zinc-200 bg-white px-4 py-4 transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_30px_rgba(179,24,31,0.12)]">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-red-100 text-red-700 text-sm font-bold shrink-0">3</span>
                                        <p className="text-zinc-700 leading-relaxed">
                                            Mewujudkan masyarakat kedaulatan rakyat dalam berdemokrasi, yang menjunjung tinggi
                                            nilai-nilai kebenaran dan hukum yang berlaku.
                                        </p>
                                    </div>
                                </div>
                                <div className="group rounded-2xl border border-zinc-200 bg-white px-4 py-4 transition-all duration-300 hover:border-red-200 hover:shadow-[0_12px_30px_rgba(179,24,31,0.12)]">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-red-100 text-red-700 text-sm font-bold shrink-0">4</span>
                                        <p className="text-zinc-700 leading-relaxed">
                                            Mewujudkan ekonomi kerakyatan yang berkeadilan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-50 to-white border border-zinc-200 shadow-[0_20px_48px_rgba(20,20,20,0.08)] h-full flex items-center justify-center lg:sticky lg:top-24">
                            <img
                                src="/images/update logo/logo visi.png"

                                alt="Aktivitas Partai Garuda"
                                className="w-full max-w-[460px] h-[360px] md:h-[520px] object-contain object-center"
                            />
                        </article>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
                    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_18px_42px_rgba(20,20,20,0.12)]">
                        <img
                            src="/images/banner-about2.jpg"
                            alt="Dokumentasi Partai Garuda"
                            className="w-full h-[220px] md:h-[360px] lg:h-[420px]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/2 via-black/20 to-transparent" />

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

            <style>{`
                .about-banner-drop {
                    animation: aboutBannerDrop 2500ms cubic-bezier(.22, 1, .36, 1) both;
                    will-change: transform;
                }

                @keyframes aboutBannerDrop {
                    from {
                        transform: translateY(-38px);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

const aboutRoot = document.getElementById('react-root-about');
if (aboutRoot) {
    ReactDOM.createRoot(aboutRoot).render(<AboutPage />);
}
