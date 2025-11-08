import { Mail, MessageSquare, Phone } from 'lucide-react'

export default function Contact({ email = 'hello@email.com', phone = '+62 812 3456 7890' }) {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ayo Kolaborasi</h2>
              <p className="text-gray-600">Terbuka untuk campaign, product placement, dan event coverage.</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-gray-500">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">Respons cepat</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <Mail className="h-5 w-5 text-pink-600" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">{email}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
              <Phone className="h-5 w-5 text-pink-600" />
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-gray-600">{phone}</div>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
            >
              <MessageSquare className="h-5 w-5 text-pink-600" />
              <div>
                <div className="font-medium">DM Instagram</div>
                <div className="text-sm text-gray-600">@usernamekamu</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
