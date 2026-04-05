import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { profile, navLinks } from '../data/data'
import Container from './Container'

const Footer = () => {
  const go = (href) => {
    document.getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-white border-t border-rose-100 pt-12 pb-8 mt-6">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
        
          <div>
            <div className="flex items-center gap-2 mb-3 font-extrabold text-ink text-lg">
              <div className="w-8 h-8 rounded-xl bg-rose-300 flex items-center justify-center text-white font-bold text-sm">Q</div>
              Queen<span className="text-rose-400">tana</span>
            </div>
            <p className="text-soft text-sm leading-relaxed">
              Frontend Developer & UI/UX Designer.<br />
              Lulusan SMK Wikrama Bogor — siap berkontribusi di industri digital.
            </p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-600 font-semibold">Open to opportunities</span>
            </div>
          </div>

         
          <div>
            <h4 className="font-bold text-ink text-sm mb-3 uppercase tracking-widest">Navigasi</h4>
            <ul className="space-y-1.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="text-soft hover:text-rose-500 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-ink text-sm mb-3 uppercase tracking-widest">Kontak</h4>
            <div className="space-y-2">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-soft hover:text-rose-500 text-sm transition-colors">
                <Mail size={14} /> {profile.email}
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-soft hover:text-rose-500 text-sm transition-colors">
                <Phone size={14} /> WhatsApp
              </a>
            </div>
            <div className="flex gap-2 mt-4">
              {[
                { Icon: Instagram, href: profile.instagram, label: 'Instagram' },
                { Icon: Linkedin,  href: profile.linkedin,  label: 'LinkedIn'  },
                { Icon: Mail,      href: `mailto:${profile.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-rose-200 flex items-center justify-center text-soft hover:text-rose-500 hover:border-rose-300 transition-all hover:scale-110">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-rose-100 pt-6 text-center">
          <p className="text-soft text-xs">
            © {new Date().getFullYear()} <span className="font-semibold text-ink">Queentana Allea Hasanah</span> — SMK Wikrama Bogor 
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
