import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const dark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.slice(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5'
            : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl font-bold bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
          >
            &lt;JP /&gt;
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-500 bg-cyan-500/10'
                    : dark
                      ? 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-lg transition-all duration-300 ${
                dark
                  ? 'text-slate-300 hover:text-amber-400 hover:bg-white/5'
                  : 'text-slate-600 hover:text-amber-500 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="ml-3 px-5 py-2 bg-linear-to-r from-cyan-500 to-violet-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                dark
                  ? 'text-slate-300 hover:text-amber-400'
                  : 'text-slate-600 hover:text-amber-500'
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                dark
                  ? 'text-slate-300 hover:text-cyan-400'
                  : 'text-slate-600 hover:text-cyan-600'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-105 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`backdrop-blur-xl border-t px-4 py-4 space-y-1 ${
            dark
              ? 'bg-slate-900/95 border-slate-800'
              : 'bg-white/95 border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-500 bg-cyan-500/10'
                  : dark
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 bg-linear-to-r from-cyan-500 to-violet-500 text-white rounded-lg text-sm font-medium text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
