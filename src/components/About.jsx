export default function About({ name = 'Nama Kamu', highlights = [] }) {
  const points = highlights.length ? highlights : [
    'Berpengalaman membuat konten lifestyle dan travel',
    'Kolaborasi dengan brand lokal & internasional',
    'Konsisten upload dan interaksi dengan audiens',
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tentang {name}</h2>
            <p className="mt-3 text-gray-700">Aku adalah kreator yang fokus pada visual yang hangat dan autentik. Mengabadikan momen sederhana menjadi cerita yang bermakna.</p>
            <ul className="mt-4 space-y-2">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-xl bg-gradient-to-tr from-pink-200 via-purple-200 to-yellow-200 p-1">
            <div className="h-full w-full rounded-lg bg-white flex items-center justify-center text-gray-500">
              <span className="text-sm">Ruang untuk video reel / behind the scenes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
