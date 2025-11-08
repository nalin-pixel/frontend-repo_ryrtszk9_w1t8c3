import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const profile = {
    username: 'usernamekamu',
    name: 'Nama Kamu',
    bio: 'Fotografer | Kreator Konten | Cerita visual setiap hari'
  }

  const gallery = []

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero {...profile} />
        <Gallery items={gallery} />
        <About name={profile.name} />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {profile.name}. Dibuat dengan cinta.
      </footer>
    </div>
  )
}

export default App
