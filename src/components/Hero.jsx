import { Instagram, Sparkles } from 'lucide-react'

export default function Hero({ username = 'usernamekamu', name = 'Nama Kamu', bio = 'Fotografer | Kreator Konten | Cerita visual setiap hari' }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ec4899,transparent_40%),radial-gradient(circle_at_80%_30%,#8b5cf6,transparent_40%),radial-gradient(circle_at_50%_80%,#f59e0b,transparent_40%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-[auto_1fr] items-center gap-8">
          <div className="relative">
            <div className="h-36 w-36 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1">
              <img
                src={`https://api.dicebear.com/8.x/identicon/svg?seed=${encodeURIComponent(username)}`}
                alt={name}
                className="h-full w-full rounded-full object-cover bg-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="h-4 w-4 text-pink-500" />
              <span>Profil Instagram</span>
            </div>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              {name}
            </h1>
            <p className="mt-3 text-gray-700 max-w-2xl">{bio}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://instagram.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-sm"
              >
                <Instagram className="h-4 w-4" /> Lihat Instagram
              </a>
              <span className="text-sm text-gray-600">@{username}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
