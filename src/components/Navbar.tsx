import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,30,53,0.8)' : '1px solid transparent',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <Link to="/" style={{
            fontFamily: 'Orbitron, sans-serif', fontWeight: 700,
            fontSize: '1.1rem', letterSpacing: '0.1em', textDecoration: 'none',
            background: 'linear-gradient(135deg, #c084fc, #818cf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            AI Solutions
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem',
                fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s',
                color: pathname === l.to ? '#c084fc' : '#94a3b8',
                background: pathname === l.to ? 'rgba(139,92,246,0.12)' : 'transparent',
              }}>
                {l.label}
              </Link>
            ))}
            <a
              href="https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                marginLeft: '0.75rem', padding: '0.5rem 1.25rem',
                borderRadius: '0.625rem', fontSize: '0.875rem', fontWeight: 700,
                color: 'white', textDecoration: 'none',
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                transition: 'all 0.2s',
              }}
            >
              Free Call
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden"
            style={{ padding: '0.5rem', color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full width */}
      {open && (
        <div style={{
          background: 'rgba(10,10,15,0.98)', borderTop: '1px solid rgba(30,30,53,0.8)',
          backdropFilter: 'blur(12px)',
        }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                padding: '0.875rem 1rem', borderRadius: '0.625rem', fontSize: '0.9375rem',
                fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s',
                color: pathname === l.to ? '#c084fc' : '#cbd5e1',
                background: pathname === l.to ? 'rgba(139,92,246,0.12)' : 'transparent',
              }}>
                {l.label}
              </Link>
            ))}
            <a
              href="https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min"
              target="_blank" rel="noopener noreferrer"
              style={{
                marginTop: '0.5rem', padding: '1rem', borderRadius: '0.75rem',
                textAlign: 'center', fontSize: '0.9375rem', fontWeight: 700,
                color: 'white', textDecoration: 'none',
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
              }}
            >
              Book Free 30-Min Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
