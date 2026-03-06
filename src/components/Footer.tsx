import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700/50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display font-bold text-gold-400 text-sm">AI Solutions</span>
          <p className="text-slate-500 text-xs mt-1">© 2026 AI Automation & Engineering Solutions. Köln, Germany.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { to: '/services', label: 'Services' },
            { to: '/projects', label: 'Projects' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(l => (
            <Link key={l.to} to={l.to} className="text-slate-400 hover:text-white text-sm transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
