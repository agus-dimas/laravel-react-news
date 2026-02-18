<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    /**
     * Nama tabel di database
     * (opsional, karena Laravel otomatis pakai "news")
     */
    protected $table = 'news';

    /**
     * Kolom yang boleh diisi mass assignment
     * (penting untuk create() & update())
     */
    protected $fillable = ['title', 'content', 'image', 'user_id', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * (Opsional) Cast data
     * Berguna kalau nanti ada field boolean / datetime / json
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * (Opsional) Helper untuk ringkas berita
     * Dipakai di React / Blade
     */
    public function getExcerptAttribute()
    {
        return \Str::limit(strip_tags($this->content), 120);
    }
}