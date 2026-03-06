import { ArrowRight } from 'lucide-react'

const CAL_URL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'

const tech = [
  'n8n', 'Salesforce / Apex', 'Python', 'PyTorch', 'scikit-learn',
  'FastAPI', 'Docker', 'OpenAI / Claude APIs', 'RAG / Embeddings',
  'XML / EDI / EDIFACT', 'FTP / SFTP', 'Vector Databases',
]

const values = [
  { title: 'Fixed prices', sub: 'You know the cost before we start.' },
  { title: 'No jargon', sub: 'We explain everything in plain language.' },
  { title: 'SMB-first', sub: 'Enterprise power at startup budgets.' },
  { title: 'Multilingual', sub: 'English · Deutsch · Türkçe.' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Page hero */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-navy-800/60 to-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">About Us</h1>
          <p className="text-slate-400 text-lg">
            The people and principles behind AI Solutions.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="card-glass p-8 sm:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                HA
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">Hasan Atici</h2>
                <p className="text-gold-400 text-sm">AI Counselor & Automation Engineer · Köln, Germany</p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I started AI Solutions because I kept seeing the same problem: small businesses spending thousands of hours on work that software should handle. My background spans software development, data science, business process optimisation and legacy system integration.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Today I help DACH SMBs automate operations, integrate XML/EDI pipelines, deploy AI chatbots and build intelligent products — at prices that actually make sense for companies under 200 people.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-navy-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-center mb-10">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="card-glass p-5 text-center">
                <h3 className="font-semibold text-gold-400 mb-1.5">{v.title}</h3>
                <p className="text-slate-400 text-sm">{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-center mb-10">Technology We Master</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {tech.map(t => (
              <span
                key={t}
                className="px-4 py-2 bg-navy-700/60 border border-navy-600/50 text-slate-300 text-sm rounded-full hover:border-gold-500/40 hover:text-gold-400 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-800/40">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Let's Build Something</h2>
          <p className="text-slate-400 mb-8">
            If this resonates, book a free call. We'll figure out together what's worth automating first.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-gold-500/20"
          >
            Book a Free 30-Min Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
