import { ArrowRight } from 'lucide-react'

const CAL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'
const S = {
  page: { background: '#0a0a0f', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  maxW: { maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' } as React.CSSProperties,
  card: { background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)', borderRadius: '1rem' } as React.CSSProperties,
}

const tech = ['n8n','Salesforce / Apex','Python','PyTorch','scikit-learn','FastAPI','Docker','OpenAI / Claude APIs','RAG / Embeddings','XML / EDI / EDIFACT','FTP / SFTP','Vector Databases']
const values = [
  { t: 'Fixed prices', s: 'You know the cost before we start.' },
  { t: 'No jargon', s: 'We explain everything in plain language.' },
  { t: 'SMB-first', s: 'Enterprise power at startup budgets.' },
  { t: 'Multilingual', s: 'English · Deutsch · Türkçe.' },
]

export default function About() {
  return (
    <div style={S.page}>
      <section style={{ padding: '6rem 0 3rem', textAlign: 'center', background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)' }}>
        <div style={S.maxW}>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>About Us</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>The people and principles behind AI Solutions.</p>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '3rem 0' }}>
        <div style={S.maxW}>
          <div style={{ ...S.card, padding: '2.5rem', borderColor: 'rgba(139,92,246,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(99,102,241,0.2))', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '0.75rem', color: '#c084fc', letterSpacing: '0.05em' }}>
                HA
              </div>
              <div>
                <h2 style={{ fontWeight: 700, color: 'white', fontSize: '1.125rem' }}>Hasan Atici</h2>
                <p style={{ color: '#a78bfa', fontSize: '0.875rem', marginTop: '0.125rem' }}>AI Counselor & Automation Engineer · Köln, Germany</p>
              </div>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.9375rem' }}>
              I built AI Solutions because small businesses keep spending thousands of hours on work that software should handle. My background spans software development, data science, business process optimisation and legacy system integration.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Today I help DACH SMBs automate operations, integrate XML/EDI pipelines, deploy AI chatbots and build intelligent products — at prices that actually make sense for companies under 200 people.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '2rem 0' }}>
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 700, fontSize: '1.375rem', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.875rem' }}>
            {values.map(v => (
              <div key={v.t} style={{ ...S.card, padding: '1.25rem', textAlign: 'center' }}>
                <h3 style={{ fontWeight: 600, color: '#c084fc', marginBottom: '0.375rem', fontSize: '0.9rem' }}>{v.t}</h3>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{v.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section style={{ padding: '2rem 0' }}>
        <div style={S.maxW}>
          <h2 style={{ fontWeight: 700, fontSize: '1.375rem', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>Technology We Master</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {tech.map(t => (
              <span key={t} style={{ padding: '0.5rem 1rem', background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)', color: '#94a3b8', fontSize: '0.8125rem', borderRadius: '9999px', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)'; (e.currentTarget as HTMLElement).style.color = '#c084fc' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,30,53,0.9)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8' }}
              >{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ ...S.maxW, textAlign: 'center' }}>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Let's Build Something</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>If this resonates, book a free call. We'll figure out what's worth automating first.</p>
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1rem', display: 'inline-flex' }}>
            Book a Free 30-Min Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
