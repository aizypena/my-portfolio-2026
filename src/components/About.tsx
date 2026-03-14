import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Calendar, Briefcase, Code2, GraduationCap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/profile'

const stats = [
  { icon: Calendar, value: profile.yearsOfExperience, label: 'Years Experience' },
  { icon: Briefcase, value: '2', label: 'Core Work Roles' },
  { icon: GraduationCap, value: '2', label: 'Education Records' },
  { icon: Code2, value: '5', label: 'Major Projects Listed' },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className={`font-mono text-sm mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Get To Know Me
            </p>
            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              About Me
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual element */}
            <div className="relative mx-auto lg:mx-0">
              <div
                className={`w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-linear-to-br from-cyan-500/20 to-violet-500/20 border flex items-center justify-center overflow-hidden ${
                  dark ? 'border-slate-700/50' : 'border-slate-200'
                }`}
              >
                <div className="text-center">
                  <div
                    className={`w-48 h-48 md:w-56 md:h-56 rounded-xl border flex items-center justify-center ${
                      dark
                        ? 'bg-slate-800/50 border-slate-700/50'
                        : 'bg-white/80 border-slate-200'
                    }`}
                  >
                    <Code2 size={80} className={dark ? 'text-cyan-400/50' : 'text-cyan-500/40'} />
                  </div>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-500/30 rounded-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-violet-500/30 rounded-xl" />
            </div>

            {/* Text content */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>
                A passionate engineer who loves building digital solutions
              </h3>

              {/* Education badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${
                  dark
                    ? 'bg-violet-500/10 border-violet-500/20 text-violet-400'
                    : 'bg-violet-50 border-violet-200 text-violet-600'
                }`}
              >
                <GraduationCap size={16} />
                <span className="text-sm font-medium">
                  {profile.school}
                </span>
              </div>

              <div className={`space-y-4 leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                <p>
                  I&apos;m {profile.fullName}, a software engineer focused on full-stack and
                  mobile development. I build practical products that combine strong UI,
                  reliable backend architecture, and data-driven features.
                </p>
                <p>
                  My recent work includes payroll automation systems, organization websites,
                  ERP platforms, and business analytics dashboards with AI-assisted features.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h4 className={`font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>Education</h4>

                <div className={`p-4 rounded-xl border ${dark ? 'border-slate-700/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
                  <p className={`font-medium ${dark ? 'text-cyan-400' : 'text-cyan-700'}`}>{profile.school}</p>
                  <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{profile.degree}</p>
                  <p className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{profile.degreePeriod}</p>
                </div>

                <div className={`p-4 rounded-xl border ${dark ? 'border-slate-700/50 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
                  <p className={`font-medium ${dark ? 'text-cyan-400' : 'text-cyan-700'}`}>{profile.certificationSchool}</p>
                  <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{profile.certification}</p>
                  <p className={`text-xs mt-1 ${dark ? 'text-slate-500' : 'text-slate-500'}`}>{profile.certificationPeriod}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 group ${
                  dark
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md'
                }`}
              >
                <stat.icon
                  className={`mx-auto mb-3 group-hover:scale-110 transition-transform ${
                    dark ? 'text-cyan-400' : 'text-cyan-500'
                  }`}
                  size={28}
                />
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
