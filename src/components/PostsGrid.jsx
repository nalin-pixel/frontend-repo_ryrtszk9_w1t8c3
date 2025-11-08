import { Heart, MessageCircle, Bookmark } from 'lucide-react';

function PostCard({ img, likes, comments }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow hover:shadow-lg transition">
      <img src={img} alt="post" className="aspect-square w-full object-cover" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 text-white">
        <span className="inline-flex items-center gap-2"><Heart className="h-5 w-5" /> {likes}</span>
        <span className="inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" /> {comments}</span>
      </div>
    </div>
  );
}

function PostsGrid() {
  const posts = [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1468854204608-cb34654c69e1?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1481888630613-6d6bb35ae817?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526481280698-8fcc13fd1d26?q=80&w=1000&auto=format&fit=crop',
  ].map((url, i) => ({ url, likes: Math.floor(Math.random()*900)+100, comments: Math.floor(Math.random()*90)+10 }));

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {posts.map((p, i) => (
          <PostCard key={i} img={p.url} likes={p.likes} comments={p.comments} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-50">
          <Bookmark className="h-4 w-4" /> Load more
        </button>
      </div>
    </section>
  );
}

export default PostsGrid;
