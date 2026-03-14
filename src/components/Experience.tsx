import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Briefcase, Calendar } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Teratomo Corporation',
    period: 'Recent Experience',
    duration: 'Internship',
    description: [
      'Developed a comprehensive end-to-end payroll generation system, managing both frontend user interfaces and backend logic to automate company-wide processing.',
      'Architected database schemas and server-side API endpoints to ensure accurate calculation of earnings, deductions, and tax compliance.',
      'Collaborated with internal stakeholders to translate business requirements into functional software features, improving administrative efficiency.',
    ],
    tech: [
      'Frontend',
      'Backend Logic',
      'API Development',
      'Database Design',
      'Payroll Automation',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Clean Up Australia',
    period: 'Professional Experience',
    duration: 'Project Role',
    description: [
      'Designed and launched the official organization website, focusing on an intuitive user experience and responsive design across all devices.',
      'Implemented modern web technologies to enhance site performance, ensuring fast load times and high accessibility for a diverse user base.',
      'Integrated custom features and content management tools to allow for seamless updates and streamlined community engagement.',
    ],
    tech: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Responsive Design',
      'Performance Optimization',
      'CMS Features',
    ],
  },
]

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className={`font-mono text-sm mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>My Journey</p>
            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Work Experience
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 to-violet-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-cyan-500 border-4 z-10 mt-6 ${
                      dark ? 'border-slate-950' : 'border-white'
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div
                      className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                        dark
                          ? 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                          : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        <Calendar size={16} />
                        <span className="text-sm font-mono">
                          {exp.period} · {exp.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={18} className="text-violet-400" />
                        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                          {exp.title}
                        </h3>
                      </div>

                      <p className={`font-medium mb-4 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        {exp.company}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className={`text-sm leading-relaxed flex gap-2 ${
                              dark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
                            <span className={`mt-1 shrink-0 ${dark ? 'text-cyan-400' : 'text-cyan-500'}`}>
                              ▹
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1 text-xs font-mono rounded-full border ${
                              dark
                                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                                : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
