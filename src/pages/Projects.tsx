import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'

const CAL_URL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'

const projects = [
  {
    tags: ['n8n', 'LLM', 'CRM'],
    title: 'Lead Capture & Nurturing Automation',
    result: '60% faster lead response',
    bullets: [
      'Multi-channel capture from all marketing sources',
      'AI-generated personalised follow-up emails',
      'Auto deduplication, scoring & CRM push',
    ],
    cta: { label: 'Build Something Similar', href: '/contact', external: false },
  },
  {
    tags: ['RAG', 'n8n AI Nodes', 'Vector DB'],
    title: 'AI Chatbot with Knowledge Base',
    result: '80% of queries answered instantly',
    bullets: [
      'Semantic search across private document collections',
      'LLM layer with n8n AI nodes — no hallucination',
      'Human-in-the-loop escalation for edge cases',
    ],
    cta: { label: 'Build Something Similar', href: '/contact', external: false },
  },
  {
    tags: ['XML/EDIFACT', 'FTP/SFTP', 'ERP'],
    title: 'XML/EDI FTP Pipeline Modernisation',
    result: '2.5h manual work eliminated daily',
    bullets: [
      'SFTP polling every 5 min + auto file archiving',
      'EDIFACT D96A parsing, validation, ERP push via REST',
      'Slack alerts on failures + AI anomaly detection',
    ],
    metric: 'Zero missed orders in 6 months post-launch.',
    cta: { label: 'See XML/EDI Service', href: '/services#xml-edi', external: false },
  },
  {
    tags: ['AI Counseling', 'Strategy', 'Roadmap'],
    title: 'AI Counseling & Adoption Roadmap',
    result: 'Clarity delivered in 1 week',
    bullets: [
      '5-workflow discovery workshop + data maturity audit',
      'AI readiness score across 5 dimensions',
      '12-page written roadmap with budgets & timelines',
    ],
    metric: 'Client implemented all 3 quick-wins in one quarter.',
    cta: { label: 'Book an AI Audit', href: CAL_URL, external: true },
  },
  {
    tags: ['Machine Learning', 'FastAPI', 'MLOps', 'Docker'],
    title: 'Predictive Analytics Platform',
    result: 'Churn predicted before it happens',
    bullets: [
      'End-to-end ML pipeline: data → trained model → API',
      'FastAPI + Docker — production-ready & scalable',
      'Dashboard integration for real-time predictions',
    ],
    cta: { label: 'Build Something Similar', href: '/contact', external: false },
  },
]

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Page hero */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-navy-800/60 to-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Case Studies</h1>
          <p className="text-slate-400 text-lg">Real projects. Real results. For DACH SMBs.</p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
          {projects.map(p => (
            <div key={p.title} className="card-glass p-6 sm:p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="px-2.5 py-0.5 bg-navy-600/60 border border-navy-500/50 text-gold-400 text-xs font-medium rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-5 gap-6 items-start">
                {/* Main content */}
                <div className="md:col-span-3">
                  <h2 className="font-display text-xl font-bold text-white mb-4">{p.title}</h2>
                  <ul className="space-y-2.5">
                    {p.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-slate-300 text-sm">
                        <span className="text-gold-400 mt-0.5">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {p.metric && (
                    <p className="mt-4 text-slate-400 text-sm italic">{p.metric}</p>
                  )}
                </div>

                {/* Result + CTA */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-4 flex items-start gap-3">
                    <TrendingUp size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Result</p>
                      <p className="font-bold text-white text-sm">{p.result}</p>
                    </div>
                  </div>

                  {p.cta.external ? (
                    <a
                      href={p.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded-xl transition-all"
                    >
                      {p.cta.label} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      to={p.cta.href}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-navy-600 hover:bg-navy-500 border border-navy-500 text-white text-sm font-semibold rounded-xl transition-all"
                    >
                      {p.cta.label} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-800/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Have a similar challenge?</h2>
          <p className="text-slate-400 mb-8">Tell us the problem. We'll scope a solution and give you a fixed price — no obligation.</p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-gold-500/20"
          >
            Book a Free Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
