import { ArrowRight, MapPin, Globe, Languages } from 'lucide-react'

const CAL = 'https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min'
const EMAIL = atob('aGFzYW5tLmF0aWNpQGdtYWlsLmNvbQ==')

const S = {
  page: { background: '#0a0a0f', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' } as React.CSSProperties,
  maxW: { maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' } as React.CSSProperties,
  card: { background: 'rgba(15,15,26,0.8)', border: '1px solid rgba(30,30,53,0.9)', borderRadius: '1rem' } as React.CSSProperties,
}

export default function Contact() {
  return (
    <div style={S.page}>
      <section style={{ padding: '6rem 0 3rem', textAlign: 'center', background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)' }}>
        <div style={S.maxW}>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Let's Talk</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem' }}>Free 30-min call — no commitment, no sales pressure.</p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 5rem' }}>
        <div style={S.maxW}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {/* Book a call */}
            <div style={{ ...S.card, padding: '2rem', borderColor: 'rgba(139,92,246,0.25)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ fontSize: '2rem' }}>📅</div>
              <div>
                <h2 style={{ fontWeight: 700, color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Book a Free Call</h2>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>Pick a time that works. We'll discuss your biggest manual bottlenecks and map out what's automatable.</p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {['30 minutes, completely free','No commitment required','Clear action plan you can use immediately'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#cbd5e1', fontSize: '0.875rem' }}>
                    <span style={{ color: '#a78bfa', fontWeight: 700 }}>✓</span>{t}
                  </li>
                ))}
              </ul>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9375rem' }}>
                Book Now — It's Free <ArrowRight size={16} />
              </a>
            </div>

            {/* Right col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Email */}
              <div style={{ ...S.card, padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>✉️</div>
                <h3 style={{ fontWeight: 600, color: 'white', marginBottom: '0.375rem' }}>Send an Email</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.75rem' }}>Prefer async? Drop us a line anytime.</p>
                <a href={`mailto:${EMAIL}`} style={{ color: '#c084fc', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#d8b4fe')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#c084fc')}
                >{EMAIL}</a>
              </div>

              {/* Details */}
              <div style={{ ...S.card, padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Details</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { Icon: MapPin, text: 'Köln, Germany (Europe/Berlin)' },
                    { Icon: Globe, text: 'Serving clients across Europe & DACH' },
                    { Icon: Languages, text: 'English · Deutsch · Türkçe' },
                  ].map(({ Icon, text }) => (
                    <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                      <Icon size={15} color="#a78bfa" style={{ flexShrink: 0 }} />{text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
