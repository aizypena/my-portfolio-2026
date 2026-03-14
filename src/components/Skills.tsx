import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Code2, Layers, Database, Wrench } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const skillSets: {
  title: string
  icon: typeof Code2
  color: 'cyan' | 'violet' | 'emerald' | 'amber'
  summary: string
  skills: string[]
}[] = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'cyan',
    summary: 'Core programming and markup languages I use in production.',
    skills: [
      'JavaScript',
      'PHP',
      'TypeScript',
      'Python',
      'HTML/CSS',
    ],
  },
  {
    title: 'Frameworks/Libraries',
    icon: Layers,
    color: 'violet',
    summary: 'Web and backend frameworks used for scalable application development.',
    skills: [
      'React',
      'Vue',
      'Node',
      'Express',
      'Laravel',
      'CodeIgniter',
      'Symfony',
      'Flask',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'emerald',
    summary: 'Data storage and management systems for web and mobile products.',
    skills: [
      'MySQL',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'amber',
    summary: 'Delivery, collaboration, design, and cloud tooling stack.',
    skills: [
      'AWS',
      'Git',
      'Docker',
      'Figma',
      'AWS CLI',
    ],
  },
]

const colorMap: Record<
  'cyan' | 'violet' | 'emerald' | 'amber',
  {
    icon: string
    iconDark: string
    tag: string
    tagDark: string
    glow: string
    glowDark: string
  }
> = {
  cyan: {
    icon: 'bg-cyan-100 text-cyan-600',
    iconDark: 'bg-cyan-500/10 text-cyan-400',
    tag: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    tagDark: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'from-cyan-500/20 to-cyan-500/0',
    glowDark: 'from-cyan-500/15 to-cyan-500/0',
  },
  violet: {
    icon: 'bg-violet-100 text-violet-600',
    iconDark: 'bg-violet-500/10 text-violet-400',
    tag: 'bg-violet-50 text-violet-700 border-violet-200',
    tagDark: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    glow: 'from-violet-500/20 to-violet-500/0',
    glowDark: 'from-violet-500/15 to-violet-500/0',
  },
  emerald: {
    icon: 'bg-emerald-100 text-emerald-600',
    iconDark: 'bg-emerald-500/10 text-emerald-400',
    tag: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tagDark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'from-emerald-500/20 to-emerald-500/0',
    glowDark: 'from-emerald-500/15 to-emerald-500/0',
  },
  amber: {
    icon: 'bg-amber-100 text-amber-600',
    iconDark: 'bg-amber-500/10 text-amber-400',
    tag: 'bg-amber-50 text-amber-700 border-amber-200',
    tagDark: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'from-amber-500/20 to-amber-500/0',
    glowDark: 'from-amber-500/15 to-amber-500/0',
  },
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const allSkillsCount = skillSets.reduce((count, set) => count + set.skills.length, 0)

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className={`absolute inset-0 ${dark ? 'bg-slate-900/50' : 'bg-slate-50/80'}`} />
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <p className={`font-mono text-sm mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              What I Work With
            </p>
            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Skill Sets
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full" />
            <p className={`mt-6 max-w-2xl mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              A focused stack I use to design, build, and ship web and mobile products from idea to production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div
              className={`p-5 rounded-2xl border ${
                dark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Skill Entries</p>
              <p className={`mt-1 text-3xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{allSkillsCount}</p>
            </div>
            <div
              className={`p-5 rounded-2xl border ${
                dark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Skill Categories</p>
              <p className={`mt-1 text-3xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{skillSets.length}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillSets.map((set) => {
              const colors = colorMap[set.color]
              return (
                <div
                  key={set.title}
                  className={`relative overflow-hidden p-6 md:p-8 rounded-2xl border transition-all duration-500 group ${
                    dark
                      ? 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                      : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div
                    className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl bg-linear-to-br ${
                      dark ? colors.glowDark : colors.glow
                    }`}
                  />

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        dark ? colors.iconDark : colors.icon
                      }`}
                    >
                      <set.icon size={24} />
                    </div>
                    <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                      {set.title}
                    </h3>
                  </div>

                  <p className={`text-sm mb-5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {set.summary}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {set.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-sm border ${dark ? colors.tagDark : colors.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
