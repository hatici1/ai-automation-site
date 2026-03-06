import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp } from 'lucide-react'

const CAL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'
const S = {
  page: { background: '#0a0a0f', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  maxW: { maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' } as React.CSSProperties,
  card: { background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)', borderRadius: '1rem' } as React.CSSProperties,
}

const projects = [
  { tags: ['n8n','LLM','CRM'], title: 'Lead Capture & Nurturing Automation', result: '60% faster lead response', metric: null,
    bullets: ['Multi-channel capture from all marketing sources','AI-generated personalised follow-up emails','Auto deduplication, scoring & CRM push'],
    cta: { label: 'Build Something Similar', href: '/contact', ext: false } },
  { tags: ['RAG','n8n AI Nodes','Vector DB'], title: 'AI Chatbot with Knowledge Base', result: '80% of queries answered instantly', metric: null,
    bullets: ['Semantic search across private document collections','LLM layer with n8n AI nodes — no hallucination','Human-in-the-loop escalation for edge cases'],
    cta: { label: 'Build Something Similar', href: '/contact', ext: false } },
  { tags: ['XML/EDIFACT','FTP/SFTP','ERP'], title: 'XML/EDI FTP Pipeline Modernisation', result: '2.5h manual work eliminated daily', metric: 'Zero missed orders in 6 months post-launch.',
    bullets: ['SFTP polling every 5 min + auto file archiving','EDIFACT D96A parsing, validation, ERP push via REST','Slack alerts on failures + AI anomaly detection'],
    cta: { label: 'See XML/EDI Service', href: '/services#xml-edi', ext: false } },
  { tags: ['AI Counseling','Strategy','Roadmap'], title: 'AI Counseling & Adoption Roadmap', result: 'Clarity delivered in 1 week', metric: 'Client implemented all 3 quick-wins in one quarter.',
    bullets: ['5-workflow discovery workshop + data maturity audit','AI readiness score across 5 dimensions','12-page written roadmap with budgets & timelines'],
    cta: { label: 'Book an AI Audit', href: CAL, ext: true } },
  { tags: ['Machine Learning','FastAPI','MLOps','Docker'], title: 'Predictive Analytics Platform', result: 'Churn predicted before it happens', metric: null,
    bullets: ['End-to-end ML pipeline: data → trained model → API','FastAPI + Docker — production-ready & scalable','Dashboard integration for real-time predictions'],
    cta: { label: 'Build Something Similar', href: '/contact', ext: false } },
]

export default function Projects() {
  return (
    <div style={S.page}>
      {/* Hero */}
      <section style={{ padding: '6rem 0 3rem', textAlign: 'center', background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)' }}>
        <div style={S.maxW}>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Case Studies</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>Real projects. Real results. For DACH SMBs.</p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div style={{ ...S.maxW, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projects.map(p => (
            <div key={p.title} style={{ ...S.card, padding: 'clamp(1.25rem, 4vw, 2rem)' }}>
              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ padding: '0.25rem 0.625rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#c084fc', fontSize: '0.6875rem', fontWeight: 600, borderRadius: '9999px' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                {/* Content */}
                <div>
                  <h2 style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'white', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{p.title}</h2>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {p.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                        <span style={{ color: '#a78bfa', fontWeight: 700, flexShrink: 0 }}>›</span>{b}
                      </li>
                    ))}
                  </ul>
                  {p.metric && <p style={{ color: '#64748b', fontSize: '0.8125rem', marginTop: '0.75rem', fontStyle: 'italic' }}>{p.metric}</p>}
                </div>

                {/* Result + CTA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '0.75rem', padding: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <TrendingUp size={16} color="#a78bfa" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                    <div>
                      <p style={{ color: '#64748b', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Result</p>
                      <p style={{ fontWeight: 700, color: 'white', fontSize: '0.875rem' }}>{p.result}</p>
                    </div>
                  </div>
                  {p.cta.ext ? (
                    <a href={p.cta.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.625rem 1rem', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', borderRadius: '0.625rem', color: 'white', fontSize: '0.8125rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 0 15px rgba(124,58,237,0.4)' }}>
                      {p.cta.label} <ArrowRight size={13} />
                    </a>
                  ) : (
                    <Link to={p.cta.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.625rem 1rem', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.625rem', color: '#c084fc', fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none' }}>
                      {p.cta.label} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: 'rgba(15,15,26,0.4)' }}>
        <div style={{ ...S.maxW, textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Have a similar challenge?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Tell us the problem. We'll scope a solution with a fixed price — no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', display: 'inline-flex' }}>
            Book a Free Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
