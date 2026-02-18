export default function NewsCard({ item }) {
    return (
        <a href={`/news/${item.id}`}>
            <div className="rounded-xl shadow-lg bg-white p-4">
                {item.image && (
                    <img src={`/storage/${item.image}`} className="h-48 w-full object-cover" />
                )}
                <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                    {item.content.substring(0, 100)}...
                </p>
            </div>
        </a>
    );
}
