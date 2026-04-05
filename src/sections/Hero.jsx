import { useState, useEffect } from 'react'
import { Instagram, Linkedin, Phone, MapPin, Music, ArrowDown } from 'lucide-react'
import { profile } from '../data/data'
import Container from '../components/Container'

const ROLES = ['Frontend Developer', 'UI/UX Designer', 'Graphic Designer', 'Web Programmer']

const Hero = () => {
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [display,  setDisplay]  = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx,  setCharIdx]  = useState(0)

  useEffect(() => {
    const current = ROLES[roleIdx]
    const speed   = deleting ? 45 : 95

    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setRoleIdx(i => (i + 1) % ROLES.length)
      }
    }, speed)

    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const socials = [
    { Icon: Instagram, href: profile.instagram, label: 'Instagram' },
    { Icon: Linkedin,  href: profile.linkedin,  label: 'LinkedIn'  },
    { Icon: Phone,     href: profile.whatsapp,  label: 'WhatsApp'  },
    { Icon: Music,     href: profile.spotify,   label: 'Spotify'   },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-rose-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-rose-600">Open to work ✨</span>
            </div>

            <h1 className="font-extrabold text-ink leading-tight mb-2">
              <span className="text-4xl sm:text-5xl block">Halo, saya</span>
              <span className="text-4xl sm:text-5xl text-rose-400 block">{profile.nickname} 👋</span>
            </h1>

            <div className="flex items-center gap-2 mb-5 h-10">
              <span className="text-xl font-bold text-soft">—</span>
              <span className="text-xl font-bold text-rose-500">
                {display}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-soft text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              {profile.about1}
            </p>


            <div className="flex flex-wrap gap-3 mb-8">
              <button onClick={() => go('projects')} className="btn-primary">
                Lihat Proyek →
              </button>
              <button onClick={() => go('contact')} className="btn-ghost">
                Hire Me
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-soft font-mono">Temukan saya →</span>
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-rose-200 bg-white flex items-center justify-center text-soft hover:text-rose-500 hover:border-rose-300 hover:scale-110 transition-all shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
{/* 
          <div className="flex justify-center">
            <div className="relative">

              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center shadow-2xl shadow-rose-200/60 select-none">
                <div className="text-center">
                  <div className="text-6xl mb-1">👩‍💻</div>
                  <div className="font-mono text-rose-700 text-xs">Queentana.dev</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>


        <div className="flex justify-center mt-14">
          <button
            onClick={() => go('about')}
            className="flex flex-col items-center gap-1 text-soft hover:text-rose-400 transition-colors group"
            aria-label="Scroll ke bawah">
            <span className="text-xs font-mono">scroll down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Hero
