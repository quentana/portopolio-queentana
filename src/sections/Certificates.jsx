import { useEffect, useRef, useState } from 'react'
import { Award, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { certificates } from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'


const CertImagePlaceholder = ({ cert }) => (
  <div
    className="w-full aspect-[4/3] rounded-xl flex flex-col items-center justify-center relative overflow-hidden select-none"
    style={{ background: cert.color, border: `2px solid ${cert.borderColor}` }} >

    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #F9B2D7 0, #F9B2D7 1px, transparent 0, transparent 50%)',
        backgroundSize: '10px 10px',
      }}/>

    <div
      className="absolute top-0 inset-x-0 h-3 rounded-t-xl"
      style={{ background: cert.borderColor }}/>

    <div
      className="absolute inset-3 rounded-lg"
      style={{ border: `1.5px dashed ${cert.borderColor}` }} />


    <div className="relative z-10 text-center px-6">
      <div className="text-5xl mb-3">{cert.emoji}</div>
      <div className="font-bold text-ink text-sm leading-snug mb-1">{cert.title}</div>
      <div className="text-soft text-xs">{cert.issuer}</div>
      <div
        className="mt-3 inline-block font-mono text-xs px-3 py-1 rounded-full font-bold"
        style={{ background: cert.borderColor, color: '#7a1440' }}>
        {cert.year}
      </div>
    </div>


    <div className="absolute bottom-2 right-3">
      <Award size={14} style={{ color: cert.borderColor }} />
    </div>
  </div>
)

const Modal = ({ cert, onClose, onPrev, onNext, total, current }) => {

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}>
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}>
      
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-soft hover:text-rose-500 transition-colors">
          <X size={16} />
        </button>

        
        <div className="text-center mb-4">
          <span className="font-mono text-xs text-soft">{current + 1} / {total}</span>
        </div>

        
       <img src={cert.image} />

      
        <div className="mt-5 text-center">
          <h3 className="font-bold text-ink text-lg mb-1">{cert.title}</h3>
          <p className="text-rose-500 font-semibold text-sm mb-2">{cert.issuer} · {cert.year}</p>
          <p className="text-soft text-sm leading-relaxed">{cert.desc}</p>
        </div>

       
        <div className="flex items-center justify-between mt-5 gap-3">
          <button
            onClick={onPrev}
            className="flex-1 flex items-center justify-center gap-2 btn-ghost text-sm py-2">
            <ChevronLeft size={16} /> Sebelumnya
          </button>
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm py-2">
            Berikutnya <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

const Certificates = () => {
  const ref       = useRef(null)
  const [selected, setSelected] = useState(null) // index of open cert

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const openModal  = (i) => { setSelected(i); document.body.style.overflow = 'hidden' }
  const closeModal = () => { setSelected(null); document.body.style.overflow = '' }
  const prevCert   = () => setSelected(i => (i - 1 + certificates.length) % certificates.length)
  const nextCert   = () => setSelected(i => (i + 1) % certificates.length)

  return (
    <>
      <section id="certificates" className="py-20" style={{backgroundColor:"#ddb0ca"}} ref={ref}>
        <Container>
    
          <div className="reveal">
            <SectionTitle
              eyebrow="certificates"
              title="Sertifikat & Pencapaian"
              subtitle="Beberapa sertifikat yang berhasil saya raih dari berbagai platform dan program pelatihan." />
          </div>


          <div className="reveal mb-8" style={{ transitionDelay: '80ms' }}>
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 px-4 py-2 rounded-xl text-sm text-rose-600">
              <ExternalLink size={14} />
              <span>Klik kartu sertifikat untuk melihat lebih detail</span>
            </div>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, i) => (
              <div
                key={cert.id}
                className="reveal cursor-pointer group"
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => openModal(i)}>
                <div className="card p-4 h-full flex flex-col gap-4 group-hover:border-rose-300 transition-all">

                  <div className="overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300">
                    <img src={cert.image} />
                  </div>


                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-ink text-sm leading-snug">{cert.title}</h3>
                      <ExternalLink
                        size={14}
                        className="text-soft group-hover:text-rose-400 transition-colors flex-shrink-0 mt-0.5"/>
                    </div>
                    <p className="text-rose-500 font-semibold text-xs">{cert.issuer}</p>
                    <p className="text-soft text-xs mt-1 leading-relaxed line-clamp-2">{cert.desc}</p>
                  </div>

                
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs px-3 py-1 rounded-full font-bold"
                      style={{ background: cert.color, color: '#7a1440', border: `1px solid ${cert.borderColor}` }}>
                      {cert.year}
                    </span>
                    <div className="flex items-center gap-1 text-rose-400">
                      <Award size={14} />
                      <span className="text-xs font-semibold">Sertifikat</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
        </Container>
      </section>

     
      {selected !== null && (
        <Modal
          cert={certificates[selected]}
          current={selected}
          total={certificates.length}
          onClose={closeModal}
          onPrev={prevCert}
          onNext={nextCert}
        />
      )}
    </>
  )
}

export default Certificates
