import { useEffect, useRef } from 'react'
import { skills, tools, softSkills } from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const SkillBar = ({ name, level, desc, emoji, index }) => {
  const fillRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => fillRef.current?.classList.add('go'), index * 100)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (fillRef.current) obs.observe(fillRef.current.closest('.skill-row'))
    return () => obs.disconnect()
  }, [index])

  return (
    <div className="skill-row card hover:shadow-md">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <div>
            <div className="font-bold text-ink text-sm">{name}</div>
            <div className="text-soft text-xs leading-relaxed mt-0.5 max-w-xs">{desc}</div>
          </div>
        </div>
        <span className="font-mono text-rose-500 text-sm font-bold flex-shrink-0 ml-3 mt-0.5">{level}%</span>
      </div>
      <div className="skill-track mt-3">
        <div
          ref={fillRef}
          className="skill-fill"
          style={{ '--target-scale': level / 100 }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20" ref={ref}>
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="skills"
            title="Kemampuan Saya"
            subtitle="Teknologi dan tools yang sudah saya pelajari dan gunakan dalam mengerjakan proyek."/>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skills.map((s, i) => (
            <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <SkillBar {...s} index={i} />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <h3 className="font-bold text-ink mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="section-accent" /> Tools yang Saya Pakai
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '250ms' }}>
            <h3 className="font-bold text-ink mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="section-accent" /> Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map(s => (
                <div key={s.label} className="flex items-center gap-2 bg-white border border-rose-100 rounded-xl p-3 hover:border-rose-200 transition-colors">
                  <span>{s.emoji}</span>
                  <span className="font-semibold text-ink text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-8 bg-rose-50 border border-rose-200 rounded-2xl p-5" style={{ transitionDelay: '300ms' }}>
          <p className="text-rose-700 text-sm leading-relaxed">
            <span className="font-bold">Catatan jujur:</span> Persentase di atas mencerminkan kemampuan saya saat ini secara apa adanya — bukan sekadar angka bagus. Saya percaya transparansi lebih penting dari kesan sempurna. Masih banyak yang ingin saya tingkatkan! 🌱
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Skills
