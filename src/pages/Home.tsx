import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, Euro, Globe, Wrench,
  Briefcase, GitBranch, MessageSquare, FileCode2, Bot, Cloud,
  CalendarCheck, PhoneCall, FileText, Rocket,
} from 'lucide-react'

const CAL_URL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'

const stats = [
  { value: '20h+', label: 'Saved per week' },
  { value: '2 wks', label: 'Average go-live' },
  { value: '400+', label: 'Tools we connect' },
  { value: '€0', label: 'First consultation' },
]

const services = [
  { icon: Briefcase, title: 'AI Strategy', sub: 'Know exactly where AI fits — before you spend a cent.', href: '/services#ai-counseling' },
  { icon: GitBranch, title: 'n8n Automation', sub: 'Workflows that run 24/7 across 400+ apps.', href: '/services#n8n' },
  { icon: MessageSquare, title: 'AI Chatbots', sub: 'Your knowledge base, made conversational.', href: '/services#chatbots' },
  { icon: FileCode2, title: 'XML / EDI / FTP', sub: 'Legacy systems — modernised, monitored, error-free.', href: '/services#xml-edi' },
  { icon: Bot, title: 'AI Engineering', sub: 'Custom ML models from data to deployed API.', href: '/services#ai-engineering' },
  { icon: Cloud, title: 'Salesforce', sub: 'CRM your team will actually use.', href: '/services#salesforce' },
]

const steps = [
  { icon: CalendarCheck, num: '1', title: 'Book in 2 min', sub: 'Pick a slot — no forms.' },
  { icon: PhoneCall, num: '2', title: 'Free 30-min call', sub: 'We map your biggest wins.' },
  { icon: FileText, num: '3', title: 'Proposal in 48h', sub: 'Fixed scope. Fixed price.' },
  { icon: Rocket, num: '4', title: 'Live in 2 weeks', sub: 'You start saving hours.' },
]

const whyCards = [
  { icon: Zap, title: 'Fast delivery', sub: 'Most projects live within 2 weeks.' },
  { icon: Euro, title: 'SMB pricing', sub: 'Fixed packages from €500. No lock-ins.' },
  { icon: Globe, title: 'EN / DE / TR', sub: 'No miscommunication. No middlemen.' },
  { icon: Wrench, title: 'Built to last', sub: 'Documented, trained, yours to manage.' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 bg-navy-700/60 border border-navy-600 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8">
            <CheckCircle2 size={14} className="text-gold-400" />
            AI & Automation Specialist — Köln, Germany
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your Team Loses{' '}
            <span className="text-gradient">20+ Hours</span>
            <br />
            a Week to Manual Work.
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            We automate it — n8n, Salesforce, AI chatbots, integrations.{' '}
            <strong className="text-white">Live in 2 weeks.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all shadow-lg shadow-gold-500/20 text-base"
            >
              Book Free 30-Min Call <ArrowRight size={18} />
            </a>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-navy-700/60 hover:bg-navy-700 border border-navy-600 text-white font-semibold rounded-xl transition-all text-base"
            >
              See What We Build
            </Link>
          </div>

          <p className="mt-6 text-slate-500 text-sm">
            Free · No commitment · GDPR-safe · Results within 2 weeks
          </p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-navy-800/60 border-y border-navy-700/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.value}>
                <div className="font-display text-3xl font-bold text-gold-400">{s.value}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-3">
            Everything Your Business Needs
          </h2>
          <p className="text-slate-400 text-center mb-12">to run on AI</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, sub, href }) => (
              <Link
                key={title}
                to={href}
                className="card-glass p-6 hover:border-gold-500/40 hover:bg-navy-700 transition-all group"
              >
                <Icon size={28} className="text-gold-400 mb-4" />
                <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-gold-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="section-pad bg-navy-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
            From Zero to Automated in{' '}
            <span className="text-gradient">2 Weeks</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, num, title, sub }) => (
              <div key={num} className="relative text-center">
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-gold-400" />
                </div>
                <div className="font-display text-xs text-gold-500 mb-1">Step {num}</div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-slate-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
            Why DACH SMBs Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="card-glass p-6 text-center">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-slate-400 text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad bg-gradient-to-b from-navy-800/40 to-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Stop Losing Time.<br />
            <span className="text-gradient">Start Automating.</span>
          </h2>
          <p className="text-slate-400 mb-8">
            DACH businesses save 20+ hours/week. The first call is free.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all shadow-xl shadow-gold-500/20 text-lg"
          >
            Book Your Free Call <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-slate-500 text-sm">
            GDPR-safe · EU infrastructure · EN / DE / TR
          </p>
        </div>
      </section>
    </>
  )
}
