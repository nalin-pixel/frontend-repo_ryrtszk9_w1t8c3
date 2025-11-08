import { Instagram, Link as LinkIcon, MapPin, CheckCircle2 } from 'lucide-react';

function HeaderProfile() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-fuchsia-200/40 to-indigo-200/40" />
      <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
            alt="Profile"
            className="h-28 w-28 rounded-full ring-4 ring-white object-cover shadow-md"
          />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">@yourusername</h1>
                <CheckCircle2 className="h-5 w-5 text-blue-500" aria-label="Verified" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-white shadow hover:opacity-90 transition"
                >
                  <Instagram className="h-4 w-4" /> Follow
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Message
                </a>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-gray-700 leading-relaxed">
              Digital creator | Travel ✈️ • Lifestyle 📷 • Stories 🎬 —
              sharing moments, colors, and places that inspire.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Jakarta, Indonesia</span>
              <a href="https://yourlink.bio" className="inline-flex items-center gap-1 text-indigo-600 hover:underline">
                <LinkIcon className="h-4 w-4" /> yourlink.bio
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderProfile;
