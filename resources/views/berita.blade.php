<h1 class="text-3xl font-bold">{{ $news->title }}</h1>

@if($news->image)
    <img src="/storage/{{ $news->image }}" class="my-6">
@endif

<div class="prose">
    {!! nl2br(e($news->content)) !!}
</div>