import { ArrowRight, MapPin, Globe, Languages } from 'lucide-react'

const CAL_URL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'
// Base64 encoded email to protect from harvesters
const EMAIL = atob('aGFzYW5tLmF0aWNpQGdtYWlsLmNvbQ==')

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Page hero */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-navy-800/60 to-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Let's Talk</h1>
          <p className="text-slate-400 text-lg">Free 30-min call — no commitment, no sales pressure.</p>
        </div>
      </section>

      {/* Main CTA */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book a call card */}
            <div className="card-glass p-8 flex flex-col gap-5 border-gold-500/20">
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-1">Book a Free Call</h2>
                <p className="text-slate-400 text-sm">
                  Pick a time that works. We'll discuss your biggest manual bottlenecks and map out what's automatable.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> 30 minutes, completely free</li>
                <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> No commitment required</li>
                <li className="flex items-center gap-2"><span className="text-gold-400">✓</span> Clear action plan you can use immediately</li>
              </ul>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-gold-500/20"
              >
                Book Now — It's Free <ArrowRight size={18} />
              </a>
            </div>

            {/* Email + details */}
            <div className="flex flex-col gap-5">
              {/* Email card */}
              <div className="card-glass p-6 flex flex-col gap-3">
                <div className="w-12 h-12 bg-navy-600/60 rounded-xl flex items-center justify-center text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Send an Email</h3>
                  <p className="text-slate-400 text-sm mb-3">Prefer async? Drop us a line anytime.</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="card-glass p-6">
                <h3 className="font-semibold text-white mb-4">Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <MapPin size={16} className="text-gold-400 flex-shrink-0" />
                    Köln, Germany (Europe/Berlin)
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <Globe size={16} className="text-gold-400 flex-shrink-0" />
                    Serving clients across Europe & DACH
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <Languages size={16} className="text-gold-400 flex-shrink-0" />
                    English · Deutsch · Türkçe
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
