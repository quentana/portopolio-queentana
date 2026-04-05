import { useEffect, useRef } from 'react'
import { GraduationCap, MapPin, Briefcase } from 'lucide-react'
import { education, experience } from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const Education = () => {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" className="py-20" style={{backgroundColor:"#ddb0ca"}} ref={ref}>
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="education"
            title="Pendidikan & Pengalaman"
            subtitle="Perjalanan belajar saya dari awal hingga sekarang, plus pengalaman kerja yang sudah saya jalani."/>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h3 className="font-bold text-ink text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <GraduationCap size={16} className="text-rose-400" />
              Riwayat Pendidikan
            </h3>

            <div className="relative">
              <div className="absolute left-[18px] top-3 bottom-3 w-[2px] bg-rose-100 hidden sm:block" />

              <div className="space-y-5">
                {education.map((item, i) => (
                  <div
                    key={item.id}
                    className="reveal sm:pl-12 relative"
                    style={{ transitionDelay: `${i * 110}ms` }} >
                    <div className="hidden sm:flex absolute left-[10px] top-5 w-[18px] h-[18px] rounded-full border-2 border-rose-300 bg-white items-center justify-center z-10 text-[10px]">
                      {item.icon}
                    </div>

                    <div className="card">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-ink text-base leading-snug">{item.major}</h4>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-rose-500 font-semibold text-sm">{item.school}</span>
                            {item.mapUrl && (
                              <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-soft hover:text-rose-400 transition-colors"
                                aria-label="Lihat di Maps">
                                <MapPin size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0 flex flex-col items-start sm:items-end gap-1">
                          <span className="font-mono text-xs bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-1 rounded-lg whitespace-nowrap">
                            {item.year}
                          </span>
                          {item.highlight && (
                            <span className="text-xs font-semibold text-rose-400">{item.highlight}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-soft text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div
              className="reveal mt-4 bg-rose-50 border border-rose-200 rounded-2xl p-5"
              style={{ transitionDelay: '300ms' }}>
              <div className="font-bold text-ink text-sm mb-2 flex items-center gap-2">
                🌱 Sedang Dipelajari
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'Git & GitHub'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Education
