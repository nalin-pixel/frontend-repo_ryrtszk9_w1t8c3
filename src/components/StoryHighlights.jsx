function StoryHighlights() {
  const highlights = [
    { title: 'Bali', cover: 'https://images.unsplash.com/photo-1518544801976-3e188e0b0a42?q=80&w=300&auto=format&fit=crop' },
    { title: 'Cafe', cover: 'https://images.unsplash.com/photo-1498522271720-41ef4346b9ef?q=80&w=300&auto=format&fit=crop' },
    { title: 'Fit', cover: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=300&auto=format&fit=crop' },
    { title: 'Work', cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300&auto=format&fit=crop' },
    { title: 'Sunset', cover: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=300&auto=format&fit=crop' },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-6">
      <ul className="flex gap-6 overflow-x-auto pb-2">
        {highlights.map((h) => (
          <li key={h.title} className="shrink-0 text-center">
            <div className="h-20 w-20 rounded-full ring-2 ring-pink-400 p-1 bg-white">
              <img
                src={h.cover}
                alt={h.title}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-gray-700">{h.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StoryHighlights;
