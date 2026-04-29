import { useState, type FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, MapPin, Send, Clock, Github, Linkedin, Phone, Link } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/profile'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let message = 'Unable to send your message right now.'
        const contentType = response.headers.get('content-type') || ''

        if (contentType.includes('application/json')) {
          const data = await response.json().catch(() => null)
          if (data?.error) {
            message = data.error
          }
        } else if (response.status === 404) {
          message = 'Contact API not found.'
        }

        throw new Error(message)
      }

      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      const networkError =
        error instanceof TypeError &&
        String(error.message).toLowerCase().includes('failed to fetch')

      setSubmitError(
        networkError
          ? 'Network error while sending message. Check your connection or Vercel deployment status.'
          : error instanceof Error
            ? error.message
            : 'Unable to send your message right now.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className={`font-mono text-sm mb-2 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Let&apos;s Connect
            </p>
            <h2 className={`text-3xl md:text-5xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Get In Touch
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full" />
            <p className={`mt-6 max-w-lg mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you. Let&apos;s create something amazing
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className={`p-6 rounded-2xl border space-y-6 ${
                  dark
                    ? 'bg-slate-800/30 border-slate-700/50'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>Email</h4>
                    <a
                      href={`mailto:${profile.email}`}
                      className={`text-sm transition-colors ${dark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'}`}
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>Location</h4>
                    <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>Phone</h4>
                    <a
                      href={`tel:${profile.phone}`}
                      className={`text-sm transition-colors ${dark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'}`}
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <Link size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>Portfolio</h4>
                    <a
                      href={profile.portfolioUrl}
                      className={`text-sm transition-colors ${dark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'}`}
                    >
                      {profile.portfolioLabel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
                      Availability
                    </h4>
                    <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {profile.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div
                className={`p-6 rounded-2xl border ${
                  dark
                    ? 'bg-slate-800/30 border-slate-700/50'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h4 className={`font-medium mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all ${
                      dark
                        ? 'bg-slate-700/30 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400'
                        : 'bg-slate-100 text-slate-500 hover:bg-cyan-50 hover:text-cyan-600'
                    }`}
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all ${
                      dark
                        ? 'bg-slate-700/30 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400'
                        : 'bg-slate-100 text-slate-500 hover:bg-cyan-50 hover:text-cyan-600'
                    }`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className={`p-3 rounded-xl transition-all ${
                      dark
                        ? 'bg-slate-700/30 text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400'
                        : 'bg-slate-100 text-slate-500 hover:bg-cyan-50 hover:text-cyan-600'
                    }`}
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className={`p-6 md:p-8 rounded-2xl border space-y-5 ${
                  dark
                    ? 'bg-slate-800/30 border-slate-700/50'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all text-sm ${
                        dark
                          ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      placeholder={profile.fullName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all text-sm ${
                        dark
                          ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      placeholder={profile.email}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all text-sm ${
                      dark
                        ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${dark ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className={`w-full px-4 py-3 rounded-xl border focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none transition-all resize-none text-sm ${
                      dark
                        ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : submitted ? (
                    'Message Sent! ✓'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitError && (
                  <p className={`text-sm ${dark ? 'text-rose-400' : 'text-rose-600'}`}>{submitError}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
