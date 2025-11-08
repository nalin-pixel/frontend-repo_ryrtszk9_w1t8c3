import { Instagram } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px]">
            <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-pink-600 font-bold text-sm">
              IG
            </div>
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Instagram Portfolio</span>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Galeri</a>
          <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Tentang</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">Kontak</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-sm"
          >
            <Instagram className="h-4 w-4" /> Kunjungi IG
          </a>
        </div>
      </div>
    </header>
  )
}
