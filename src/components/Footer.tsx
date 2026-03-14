import { Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <footer className={`py-8 border-t ${dark ? 'border-slate-800' : 'border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#home"
            className="text-lg font-bold bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
          >
            &lt;{profile.initials} /&gt;
          </a>

          <p className={`text-sm flex items-center gap-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
            &copy; {currentYear} {profile.fullName} &middot; Built with{' '}
            <Heart size={14} className={dark ? 'text-cyan-400' : 'text-cyan-500'} /> using React &amp;
            Tailwind CSS
          </p>

          <div className="flex gap-6">
            <a
              href="#about"
              className={`text-sm transition-colors ${
                dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
              }`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`text-sm transition-colors ${
                dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`text-sm transition-colors ${
                dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
