import { useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import { profile, services } from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-20" style={{backgroundColor:"#ddb0ca"}} ref={ref}>
      <Container>
       
        <div className="reveal">
          <SectionTitle
            eyebrow="about me"
            title="Tentang Saya"
            subtitle="Sedikit cerita tentang siapa saya dan apa yang saya kerjakan."/>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div className="reveal space-y-4">
            <p className="text-soft leading-relaxed">{profile.about1}</p>
            <p className="text-soft leading-relaxed">{profile.about2}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-lg text-sm text-rose-700">
                <MapPin size={13} /> {profile.location}
              </div>
              <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-lg text-sm text-rose-700">
                <GraduationCap size={13} /> {profile.school}
              </div>
              <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-lg text-sm text-rose-700">
                <Briefcase size={13} /> {profile.jurusan}
              </div>
            </div>
          </div>

      
          <div className="reveal space-y-3" style={{ transitionDelay: '120ms' }}>
            {[
              { emoji: '💡', title: 'Passion di Frontend', desc: 'Suka sekali bikin tampilan website yang clean, rapi, dan responsif.' },
              { emoji: '📚', title: 'Learner Mindset', desc: 'Masih terus belajar dan selalu excited kalau ada hal baru yang bisa dipelajari.' },
              { emoji: '🤝', title: 'Team Player', desc: 'Senang berkolaborasi dan terbuka dengan feedback dari orang lain.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 bg-blush rounded-xl p-4 border border-rose-100 hover:border-rose-200 transition-colors">
                <span className="text-xl mt-0.5">{item.emoji}</span>
                <div>
                  <div className="font-bold text-ink text-sm">{item.title}</div>
                  <div className="text-soft text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <h3 className="font-extrabold text-ink text-lg mb-5 flex items-center gap-2">
            <Heart size={16} className="text-rose-400 fill-rose-400" />
            Yang Bisa Saya Bantu
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {services.map(s => (
              <div key={s.title} className="card text-center group">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <h4 className="font-bold text-ink mb-2">{s.title}</h4>
                <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
