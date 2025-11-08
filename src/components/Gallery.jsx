export default function Gallery({ items = [] }) {
  const data = items.length ? items : [
    { id: 1, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', caption: 'Kreativitas tanpa batas' },
    { id: 2, src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', caption: 'Nuansa kota' },
    { id: 3, src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop', caption: 'Mood malam' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop', caption: 'Detail yang berbicara' },
    { id: 5, src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', caption: 'Warna dan cahaya' },
    { id: 6, src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop', caption: 'Eksplorasi ruang' },
  ]

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Galeri Sorotan</h2>
            <p className="text-gray-600">Kumpulan foto unggulan dari Instagram kamu.</p>
          </div>
          <a href="#contact" className="text-sm text-pink-600 hover:text-pink-700 font-medium">Minta kolaborasi →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {data.map((item) => (
            <figure key={item.id} className="group relative overflow-hidden rounded-lg shadow-sm bg-gray-100">
              <img
                src={item.src}
                alt={item.caption}
                className="h-40 sm:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
