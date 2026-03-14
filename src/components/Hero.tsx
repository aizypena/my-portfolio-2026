import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/profile'

export default function Hero() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 -left-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl animate-float ${
            dark ? 'bg-cyan-500/15' : 'bg-cyan-400/10'
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl animate-float-delayed ${
            dark ? 'bg-violet-500/15' : 'bg-violet-400/10'
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-3xl ${
            dark ? 'bg-cyan-500/5' : 'bg-cyan-400/5'
          }`}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className={`absolute inset-0 bg-size-[60px_60px] ${
          dark
            ? 'bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(6,182,212,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.06)_1px,transparent_1px)]'
        }`}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`inline-block mb-6 px-4 py-2 rounded-full border ${
            dark
              ? 'border-cyan-500/30 bg-cyan-500/5'
              : 'border-cyan-500/40 bg-cyan-50'
          }`}
        >
          <span className={`text-sm font-mono ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
            Available for opportunities
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Hi, I&apos;m{' '}
          <span className="bg-linear-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {profile.fullName}
          </span>
        </h1>

        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {profile.role}
        </h2>

        <div className={`mb-6 text-sm md:text-base ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          <a
            href={`mailto:${profile.email}`}
            className={`transition-colors ${dark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}
          >
            {profile.email}
          </a>
          <span className="mx-2">|</span>
          <a
            href={profile.portfolioUrl}
            className={`transition-colors ${dark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}
          >
            {profile.portfolioLabel}
          </a>
          <span className="mx-2">|</span>
          <a
            href={`tel:${profile.phone}`}
            className={`transition-colors ${dark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}
          >
            {profile.phone}
          </a>
        </div>

        <p
          className={`max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Building practical full-stack and mobile solutions with hands-on internship,
          freelance, and project delivery experience across web platforms, ERP systems,
          analytics dashboards, and AI-integrated products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-linear-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className={`px-8 py-3.5 border rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              dark
                ? 'border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5'
                : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${
              dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
            }`}
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${
              dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={`transition-colors duration-300 ${
              dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
            }`}
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce ${
          dark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
