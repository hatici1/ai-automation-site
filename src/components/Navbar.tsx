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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-gold-400 text-lg tracking-wider">
            AI Solutions
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? 'text-gold-400 bg-navy-700'
                    : 'text-slate-300 hover:text-white hover:bg-navy-700/60'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold rounded-lg transition-colors"
            >
              Free Call
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? 'text-gold-400 bg-navy-700'
                    : 'text-slate-300 hover:text-white hover:bg-navy-700/60'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://cal.com/hasan-at%C4%B1c%C4%B1-ari3do/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 bg-gold-500 text-navy-900 text-sm font-semibold rounded-lg text-center"
            >
              Book Free 30-Min Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
