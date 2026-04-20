<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function create()
    {
        return view('dashboard.news.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image',
            'category' => 'required|string|max:255',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news', 'public');
        }

        News::create([
            'title' => $request->title,
            'content' => $request->content,
            'category' => $request->category,
            'image' => $imagePath,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('dashboard')->with('success', 'Berita berhasil ditambahkan!');
    }

    public function index()
    {
        // Ambil semua berita terbaru
        $news = News::latest()->get();

        // Kirim ke Blade
        return view('news.index', compact('news'));
    }
    public function show($id)
    {
        $news = News::with('user')->findOrFail($id);
        $recommendations = News::where('id', '!=', $id)->latest()->take(5)->get();
        return view('news.show', compact('news', 'recommendations'));
    }

    public function apiIndex(Request $request)
    {
        $query = News::with('user')->latest();

        if ($request->filled('category') && $request->category !== 'Semua') {
            $query->where('category', $request->category);
        }

        $news = $query->paginate(4);

        $news->getCollection()->transform(function ($n) {
            return [
                'id' => $n->id,
                'title' => $n->title,
                'content' => $n->content,
                'image' => $n->image,
                'category' => $n->category ?? 'Umum',
                'user_name' => $n->user->name ?? 'Anonim',
            ];
        });

        return response()->json($news);
    }

    public function apiCategories()
    {
        $categories = News::select('category')
            ->whereNotNull('category')
            ->distinct()
            ->pluck('category')
            ->filter()
            ->values();

        return response()->json($categories);
    }

    public function destroy($id)
    {
        $news = News::findOrFail($id);

        if ($news->image) {
            \Storage::disk('public')->delete($news->image);
        }

        $news->delete();

        return redirect()->route('dashboard')->with('success', 'Berita berhasil dihapus!');
    }
}
