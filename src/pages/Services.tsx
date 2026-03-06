import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Briefcase, GitBranch, MessageSquare, FileCode2, Bot, Cloud, ArrowRight, Check } from 'lucide-react'

const CAL_URL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'

const services = [
  {
    id: 'ai-counseling',
    icon: Briefcase,
    title: 'AI Counseling & Strategy',
    tagline: 'Clarity before code. Strategy before spend.',
    price: 'From €500',
    cta: { label: 'Book an AI Audit', href: CAL_URL, external: true },
    bullets: [
      'AI readiness audit of your workflows & data',
      'Ranked list of automation wins by ROI',
      'Tool recommendations — n8n, Salesforce, LLMs',
      '3–12 month adoption roadmap with budgets',
      'Monthly advisory to keep your plan on track',
    ],
  },
  {
    id: 'n8n',
    icon: GitBranch,
    title: 'n8n Workflow Automation',
    tagline: '400+ integrations. Zero boilerplate.',
    price: 'From €1,200',
    cta: { label: 'Discuss Your Workflow', href: '/contact', external: false },
    bullets: [
      'Visual workflow design — see results instantly',
      '400+ built-in connectors + any REST API',
      'Custom JS/Python code nodes for complex logic',
      'Cron jobs, webhooks, FTP watchers, event streams',
      'Built-in AI nodes for LLM tasks inside workflows',
    ],
  },
  {
    id: 'chatbots',
    icon: MessageSquare,
    title: 'AI Chatbots & RAG Systems',
    tagline: 'Your knowledge base — made conversational.',
    price: 'From €2,500',
    cta: { label: 'Build Your Chatbot', href: '/contact', external: false },
    bullets: [
      'Ingest PDFs, Word docs, URLs, databases',
      'Semantic search with embeddings + vector DB',
      'GPT-4o, Claude, Mistral or self-hosted LLMs',
      'Deploy to website, Slack, Teams, WhatsApp',
      'Auto-escalation to human agent when unsure',
    ],
  },
  {
    id: 'xml-edi',
    icon: FileCode2,
    title: 'XML / EDI & FTP Integration',
    tagline: 'Bridge your legacy to the modern world.',
    price: 'From €1,800',
    cta: { label: 'Modernise Your Pipeline', href: '/contact', external: false },
    bullets: [
      'SFTP/FTP polling — scheduled or event-driven',
      'EDIFACT, X12, UBL, custom XML schemas',
      'Transform & push to SAP, Salesforce, any API',
      'Slack/email alerts on any parse failure',
      'AI anomaly detection for duplicate orders',
    ],
  },
  {
    id: 'ai-engineering',
    icon: Bot,
    title: 'AI Engineering & MLOps',
    tagline: 'From data to deployed model — end to end.',
    price: 'Custom quote',
    cta: { label: 'Discuss Your ML Project', href: '/contact', external: false },
    bullets: [
      'Problem exploration & data assessment',
      'Data pipelines from heterogeneous sources',
      'Model training, testing & iterative tuning',
      'FastAPI deployment in Docker or serverless',
      'MLOps monitoring, drift detection, retraining',
    ],
  },
  {
    id: 'salesforce',
    icon: Cloud,
    title: 'Salesforce Development & CRM',
    tagline: 'Your CRM, built around how you actually sell.',
    price: 'From €1,200',
    cta: { label: 'Discuss Your CRM Needs', href: '/contact', external: false },
    bullets: [
      'Custom objects, fields & Apex programming',
      'Lightning Web Components & Flow automations',
      'REST/SOAP integrations with any external system',
      'Two-way n8n ↔ Salesforce real-time sync',
      'Team training & full documentation included',
    ],
  },
]

const packages = [
  { title: 'AI Readiness Audit', tagline: 'Clarity. Direction. Confidence.', price: '€500', desc: 'Know exactly what to automate, which tools to use and what ROI to expect.' },
  { title: 'Salesforce Reset', tagline: 'Structure. Clarity. Control.', price: '€1,200', desc: 'Rebuild your CRM into a system your team trusts and actually uses.' },
  { title: 'AI Inbox Automation', tagline: 'Routing. Understanding. Relief.', price: '€1,500', desc: 'AI reads, classifies and routes every incoming message automatically.' },
  { title: 'XML/EDI Pipeline', tagline: 'Reliable. Monitored. Error-free.', price: '€1,800', desc: 'FTP watcher + XML/EDI parser + ERP push + real-time error alerts.' },
  { title: 'AI Sales Assistant', tagline: 'Follow-ups. Notes. Momentum.', price: '€2,000', desc: 'Your pipeline never goes cold — reminders, notes and CRM updates, automated.' },
  { title: 'RAG Chatbot', tagline: 'Your knowledge. Conversational.', price: '€2,500', desc: 'AI chatbot trained on your docs, embedded in your website or Slack.' },
  { title: 'Ongoing Partnership', tagline: 'Optimise. Tune. Govern.', price: '€500/mo', desc: 'We maintain and evolve everything we build — month after month.' },
]

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [hash])

  return (
    <div className="pt-16">
      {/* Page hero */}
      <section className="py-16 md:py-20 text-center bg-gradient-to-b from-navy-800/60 to-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-slate-400 text-lg">
            From strategy to shipping — everything you need to run on AI.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <nav className="sticky top-16 z-40 bg-navy-800/95 backdrop-blur-md border-b border-navy-700/50 py-3 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ul className="flex gap-2 w-max">
            {services.map(s => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-gold-400 bg-navy-700/60 hover:bg-navy-700 rounded-full border border-navy-600/50 transition-all whitespace-nowrap"
                >
                  <s.icon size={12} />
                  {s.title.split(' ')[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Services */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-pad scroll-mt-28 ${i % 2 === 1 ? 'bg-navy-800/40' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: header + bullets */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svc.icon size={26} className="text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      {svc.title}
                    </h2>
                    <p className="text-gold-500 text-sm mt-0.5">{svc.tagline}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {svc.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: price + CTA */}
              <div className="card-glass p-8 flex flex-col gap-5">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Starting from</p>
                  <p className="font-display text-3xl font-bold text-gold-400">{svc.price}</p>
                </div>
                <p className="text-slate-400 text-sm">
                  Fixed scope · Fixed price · Clear timeline — no surprises.
                </p>
                {svc.cta.external ? (
                  <a
                    href={svc.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all"
                  >
                    {svc.cta.label} <ArrowRight size={16} />
                  </a>
                ) : (
                  <a
                    href={svc.cta.href}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-navy-600 hover:bg-navy-500 border border-navy-500 text-white font-semibold rounded-xl transition-all"
                  >
                    {svc.cta.label} <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing packages */}
      <section id="packages" className="section-pad bg-navy-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3">
            Fixed-Price Packages
          </h2>
          <p className="text-slate-400 text-center mb-12">Transparent pricing. Scoped before we start.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.map(pkg => (
              <div key={pkg.title} className="card-glass p-6 flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-white text-lg">{pkg.title}</h3>
                  <p className="text-gold-500 text-xs mt-0.5">{pkg.tagline}</p>
                </div>
                <p className="text-slate-400 text-sm flex-1">{pkg.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-gold-400 text-xl">{pkg.price}</span>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded-lg transition-all"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
