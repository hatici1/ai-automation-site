import { Link } from 'react-router-dom'
import { ArrowRight, Check, Zap, DollarSign, Globe, Wrench, Briefcase, GitBranch, MessageSquare, FileCode2, Bot, Cloud } from 'lucide-react'

const CAL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'

const S = {
  page: { background: '#0a0a0f', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  maxW: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' } as React.CSSProperties,
  card: {
    background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)',
    borderRadius: '1rem', transition: 'border-color 0.2s, box-shadow 0.2s',
  } as React.CSSProperties,
}

const stats = [
  { v: '20h+', l: 'Saved per week' }, { v: '2 wks', l: 'Average go-live' },
  { v: '400+', l: 'Tools connected' }, { v: '€0', l: 'First call' },
]

const services = [
  { Icon: Briefcase, title: 'AI Strategy', sub: 'Know where AI fits — before you spend a cent.', href: '/services#ai-counseling' },
  { Icon: GitBranch, title: 'n8n Automation', sub: 'Workflows running 24/7 across 400+ apps.', href: '/services#n8n' },
  { Icon: MessageSquare, title: 'AI Chatbots', sub: 'Your knowledge base, made conversational.', href: '/services#chatbots' },
  { Icon: FileCode2, title: 'XML / EDI / FTP', sub: 'Legacy systems — modernised and error-free.', href: '/services#xml-edi' },
  { Icon: Bot, title: 'AI Engineering', sub: 'Custom ML models from data to deployed API.', href: '/services#ai-engineering' },
  { Icon: Cloud, title: 'Salesforce', sub: 'CRM your team will actually use.', href: '/services#salesforce' },
]

const steps = [
  { n: '01', title: 'Book in 2 min', sub: 'Pick a slot. No forms.' },
  { n: '02', title: 'Free 30-min call', sub: 'We map your biggest wins.' },
  { n: '03', title: 'Proposal in 48h', sub: 'Fixed scope. Fixed price.' },
  { n: '04', title: 'Live in 2 weeks', sub: 'You start saving hours.' },
]

const why = [
  { Icon: Zap, title: 'Fast delivery', sub: 'Most projects live within 2 weeks.' },
  { Icon: DollarSign, title: 'SMB pricing', sub: 'Fixed packages from €500. No lock-ins.' },
  { Icon: Globe, title: 'EN / DE / TR', sub: 'No miscommunication. No middlemen.' },
  { Icon: Wrench, title: 'Built to last', sub: 'Documented, trained, yours to own.' },
]

export default function Home() {
  return (
    <div style={S.page}>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ ...S.maxW, position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem', width: '100%' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '9999px', padding: '0.375rem 1rem', fontSize: '0.8125rem', color: '#c084fc', marginBottom: '2rem' }}>
            <Check size={13} />
            AI & Automation Specialist — Köln, Germany
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Your Team Loses{' '}
            <span style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a78bfa 50%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              20+ Hours
            </span>
            <br />a Week to Manual Work.
          </h1>

          <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We automate it — n8n, Salesforce, AI chatbots, integrations.{' '}
            <strong style={{ color: '#e2e8f0' }}>Live in 2 weeks.</strong>
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem' }}>
              Book Free 30-Min Call <ArrowRight size={18} />
            </a>
            <Link to="/services" className="btn-secondary" style={{ fontSize: '1rem' }}>
              See What We Build
            </Link>
          </div>

          <p style={{ color: '#475569', fontSize: '0.8125rem', marginTop: '1.5rem' }}>
            Free · No commitment · GDPR-safe · Results within 2 weeks
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'rgba(15,15,26,0.6)', borderTop: '1px solid rgba(30,30,53,0.8)', borderBottom: '1px solid rgba(30,30,53,0.8)', padding: '2rem 0' }}>
        <div style={{ ...S.maxW, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="sm:grid-cols-4">
          <style>{`@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          {stats.map(s => (
            <div key={s.v} style={{ textAlign: 'center' }} className="stats-grid-item">
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.v}</div>
              <div style={{ color: '#64748b', fontSize: '0.8125rem', marginTop: '0.25rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad">
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Everything Your Business Needs
          </h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '3rem', fontSize: '1rem' }}>to run on AI</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {services.map(({ Icon, title, sub, href }) => (
              <Link key={title} to={href} style={{ ...S.card, padding: '1.5rem', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(139,92,246,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,30,53,0.9)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ width: '2.5rem', height: '2.5rem', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.625rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Icon size={18} color="#c084fc" />
                </div>
                <h3 style={{ fontWeight: 600, color: 'white', marginBottom: '0.375rem', fontSize: '0.9375rem' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', lineHeight: 1.5 }}>{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad" style={{ background: 'rgba(15,15,26,0.4)' }}>
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', textAlign: 'center', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
            Zero to Automated in{' '}
            <span style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              2 Weeks
            </span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ textAlign: 'center', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div style={{ display: 'none' }} className="step-arrow" />
                )}
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(129,140,248,0.2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.75rem' }}>{s.n}</div>
                <h3 style={{ fontWeight: 600, color: 'white', marginBottom: '0.375rem', fontSize: '0.9375rem' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.8125rem' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-pad">
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', textAlign: 'center', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
            Why DACH SMBs Choose Us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {why.map(({ Icon, title, sub }) => (
              <div key={title} style={{ ...S.card, padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ width: '3rem', height: '3rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Icon size={20} color="#c084fc" />
                </div>
                <h3 style={{ fontWeight: 600, color: 'white', marginBottom: '0.375rem' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.8125rem' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: 'rgba(15,15,26,0.4)' }}>
        <div style={{ ...S.maxW, maxWidth: '640px', textAlign: 'center' }}>
          <div style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '1.5rem', padding: 'clamp(2rem, 5vw, 3.5rem)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '200px', background: 'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em', position: 'relative' }}>
              Stop Losing Time.<br />
              <span style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Start Automating.
              </span>
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1rem', position: 'relative' }}>
              DACH businesses save 20+ hours/week. The first call is free.
            </p>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', position: 'relative', display: 'inline-flex' }}>
              Book Your Free Call <ArrowRight size={18} />
            </a>
            <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '1rem', position: 'relative' }}>
              GDPR-safe · EU infrastructure · EN / DE / TR
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
