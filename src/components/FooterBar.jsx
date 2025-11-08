import { Instagram, Mail, MapPin, User } from 'lucide-react';

function FooterBar() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Instagram className="h-5 w-5" /> <span className="font-semibold">Instagram Profile</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="inline-flex items-center gap-1 hover:text-gray-900"><User className="h-4 w-4" /> About</a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-1 hover:text-gray-900"><Mail className="h-4 w-4" /> Contact</a>
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Jakarta</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;
