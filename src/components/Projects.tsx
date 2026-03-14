import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Clean Up Australia',
    description:
      'Developed a full-stack web platform using React and Node.js to streamline organizational initiatives and community outreach. Architected a scalable MongoDB database to efficiently manage and store large volume of environmental data and user contributions.',
    tech: ['React JS', 'Node JS', 'Mongo DB'],
    github: '',
    live: '',
  },
  {
    title: 'Food Crafters',
    description:
      'Engineered a distributor portal and ERP system using Vue.js and Laravel to automate supply chain and inventory management. Streamlined enterprise workflows by building robust backend modules for order processing and vendor reporting.',
    tech: ['Vue JS', 'Laravel', 'MySQL'],
    github: '',
    live: '',
  },
  {
    title: 'Henscha Phils',
    description:
      'Built a responsive corporate website for a construction firm, focusing on high-fidelity design implementation and cross-device performance. Deployed and managed web hosting, ensuring high availability and optimized load times for the firm portfolio.',
    tech: ['Laravel', 'Hostinger'],
    github: '',
    live: '',
  },
  {
    title: 'SMI Institute Inc.',
    description:
      'Integrated Gemini AI to power predictive analytics, providing administrators with accurate enrollment forecasting and data-driven insights. Developed a business analytics dashboard using React and Laravel to visualize institutional KPIs and student growth trends.',
    tech: ['React JS', 'Laravel', 'Gemini AI', 'MySQL', 'Hostinger'],
    github: '',
    live: '',
  },
  {
    title: 'NutriWise',
    description:
      'Led a cross-functional development team as Project Manager, overseeing the full lifecycle from system architecture to deployment of web and mobile platforms. Spearheaded Gemini AI and machine learning integration for personalized body analysis while managing AWS infrastructure for real-time logistics.',
    tech: ['MERN Stack', 'React Native', 'Python', 'Machine Learning', 'Gemini AI', 'AWS'],
    github: '',
    live: '',
  },
]

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className={`absolute inset-0 ${dark ? 'bg-slate-900/50' : 'bg-slate-50/80'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className={`font-mono text-sm mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              What I&apos;ve Built
            </p>
            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Featured Projects
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full" />
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  dark
                    ? 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/30'
                    : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <Folder className={dark ? 'text-cyan-400' : 'text-cyan-500'} size={32} />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                          dark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
                        }`}
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${
                          dark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'
                        }`}
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-2 transition-colors ${
                    dark
                      ? 'text-white group-hover:text-cyan-400'
                      : 'text-slate-900 group-hover:text-cyan-600'
                  }`}
                >
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 grow ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div
                  className={`flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-4 border-t ${
                    dark ? 'border-slate-700/50' : 'border-slate-200'
                  }`}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono ${dark ? 'text-slate-500' : 'text-slate-400'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
