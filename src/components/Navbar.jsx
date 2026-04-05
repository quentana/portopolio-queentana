import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/data'
import Container from './Container'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = navLinks.map(l => l.href.replace('#', ''))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop - 90 <= window.scrollY) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (href) => {
    setOpen(false)
    document.getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100'
          : 'bg-transparent'
        }`}>
        <Container>
          <nav className="flex items-center justify-between h-[68px]">

            <button
              onClick={() => go('#home')}
              className="flex items-center gap-2 font-extrabold text-ink hover:text-rose-500 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-rose-300 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-rose-200">
                Q
              </div>
              <span>Queen<span className="text-rose-400">tana</span><span className="text-rose-300">.</span></span>
            </button>


            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                          ? 'text-rose-600 bg-rose-50'
                          : 'text-soft hover:text-ink hover:bg-gray-50'
                        }`}
                    >
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go('#contact')}
                className="hidden md:block btn-primary text-sm py-2 px-5">
                Hire Me
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-xl hover:bg-rose-50 text-ink transition-colors"
                aria-label="Toggle menu">
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-1 md:hidden">
        
          <div className="absolute top-5 left-5 flex items-center gap-2 font-extrabold text-ink">
            <div className="w-8 h-8 rounded-xl bg-rose-300 flex items-center justify-center text-white font-extrabold text-sm">Q</div>
            Queen<span className="text-rose-400">tana</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-xl hover:bg-rose-50">
            <X size={22} />
          </button>

          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="text-2xl font-extrabold text-ink hover:text-rose-500 transition-colors py-2"
              style={{ animationDelay: `${i * 40}ms` }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => go('#contact')} className="btn-primary mt-5">
            Hire Me
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
