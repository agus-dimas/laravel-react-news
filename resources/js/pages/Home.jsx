import React, { useEffect, useState } from 'react'
import TiltCard from '../components/TiltCard'

export default function Home() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <p className="text-center mt-10 text-gray-500">
                Memuat berita...
            </p>
        )
    }

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.length === 0 && (
                <p className="col-span-3 text-center text-gray-500">
                    Belum ada berita
                </p>
            )}

            {news.map(item => (
                <TiltCard
                    key={item.id}
                    title={item.title}
                    description={item.content.slice(0, 100)}
                    image={item.image ? `/storage/${item.image}` : '/no-image.jpg'}
                    link={`/news/${item.id}`}
                    author={item.author}
                />
            ))}
        </div>
    )
}
