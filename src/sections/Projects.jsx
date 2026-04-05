import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Code2 } from 'lucide-react'
import { projects} from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setTimeout(() => ref.current?.classList.add('visible'), index * 90)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [index])

  return (
    <div ref={ref} className="reveal card flex flex-col gap-4 h-full">
      <div
        className="w-full h-32 rounded-xl flex items-center justify-center text-5xl select-none"
        style={{ background: project.bg }}>
        {project.emoji}
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="font-bold text-ink text-base leading-snug">{project.title}</h3>
        <p className="text-soft text-sm leading-relaxed flex-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex-1 justify-center">
            <ExternalLink size={14} /> Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn-ghost text-sm py-2 px-4 flex-1 justify-center">
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.slice(0, 4)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20" ref={ref}>
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="projects"
            title="Proyek Saya"
            subtitle="Kumpulan proyek yang pernah saya kerjakan dari tugas sekolah sampai project pribadi."/>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {displayed.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {projects.length > 4 && (
          <div className="reveal text-center mb-10" style={{ transitionDelay: '200ms' }}>
            <button onClick={() => setShowAll(v => !v)} className="btn-ghost text-sm px-6">
              {showAll ? '↑ Tampilkan lebih sedikit' : `↓ Lihat ${projects.length - 4} proyek lainnya`}
            </button>
          </div>
        )}

        <div className="reveal" style={{ transitionDelay: '260ms' }}>
          <div className="bg-white border border-rose-100 rounded-2xl p-6">
            
            <div className="mt-4 pt-4 border-t border-rose-100">
              <a
                href="https://github.com/quentana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-rose-500 hover:text-rose-600 font-semibold transition-colors group">
                <Github size={16} />
                <span>Kunjungi profil GitHub saya</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
