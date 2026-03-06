import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(30,30,53,0.8)', padding: '2.5rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <span style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '0.9rem', background: 'linear-gradient(135deg, #c084fc, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AI Solutions
          </span>
          <p style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.25rem' }}>
            © 2026 AI Automation & Engineering Solutions. Köln, Germany.
          </p>
        </div>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {[['Services','/services'],['Projects','/projects'],['About','/about'],['Contact','/contact']].map(([label,to]) => (
            <Link key={to} to={to} style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
