import { useState, useEffect, useRef } from 'react'
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import { profile } from '../data/data'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const INIT = { name: '', email: '', phone: '', message: '' }

const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Nama harus diisi'
  if (!v.email.trim()) e.email = 'Email harus diisi'
  else if (!/\S+@\S+\.\S+/.test(v.email)) e.email = 'Format email tidak valid'
  if (!v.message.trim()) e.message = 'Pesan harus diisi'
  else if (v.message.trim().length < 10) e.message = 'Pesan minimal 10 karakter'
  return e
}

const Contact = () => {
  const [form, setForm] = useState(INIT)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value })
      setErrors(p => ({ ...p, [name]: errs[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(p => ({ ...p, [name]: true }))
    const errs = validate(form)
    setErrors(p => ({ ...p, [name]: errs[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setTouched({ name: true, email: true, phone: true, message: true })
    if (Object.keys(errs).length > 0) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1600))
    setStatus('success')
  }

  const ic = (field) =>
    `input${errors[field] && touched[field] ? ' err' : ''}`

  const contactItems = [
    { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email', value: profile.email },
    { Icon: Phone, href: profile.whatsapp, label: 'WhatsApp', value: '+62 895-3218-35733' },
    { Icon: MapPin, href: null, label: 'Lokasi', value: profile.location },
    { Icon: Instagram, href: profile.instagram, label: 'Instagram', value: '@queentana_' },
    { Icon: Linkedin, href: profile.linkedin, label: 'LinkedIn', value: 'Queentana Allea Hasanah' },
  ]

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: "#ddb0ca" }} ref={ref}>
      <Container>
        <div className="reveal">
          <SectionTitle
            eyebrow="contact"
            title="Hubungi Saya"
            subtitle="Tertarik untuk bekerja sama atau sekedar ingin ngobrol? Kirim pesan ke saya, saya akan balas secepatnya!"
            center />
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-3 reveal" style={{ transitionDelay: '100ms' }}>
            {contactItems.map(({ Icon, href, label, value }) => (
              <div key={label} className="flex items-start gap-3 bg-blush border border-rose-100 rounded-xl p-4 hover:border-rose-200 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-rose-500" />
                </div>
                <div>
                  <div className="text-soft text-xs font-mono mb-0.5 uppercase tracking-wider">{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-ink font-semibold text-sm hover:text-rose-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-ink font-semibold text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-bold text-ink text-sm">Tersedia untuk kerja sama</span>
              </div>
              <p className="text-soft text-xs leading-relaxed">
                Saat ini saya terbuka untuk magang, proyek freelance, dan posisi junior frontend developer.
                Respons biasanya dalam <span className="text-rose-500 font-semibold">1×24 jam</span>.
              </p>
            </div>
          </div>


          <div className="md:col-span-3 reveal" style={{ transitionDelay: '200ms' }}>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-blush rounded-2xl border border-rose-100 h-full">
                <CheckCircle size={52} className="text-green-400 mb-4" />
                <h3 className="font-bold text-ink text-xl mb-2">Pesan Terkirim! 🎉</h3>
                <p className="text-soft text-sm max-w-xs leading-relaxed">
                  Makasih sudah menghubungi saya! Saya akan balas pesan kamu secepatnya ya.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm(INIT); setTouched({}) }}
                  className="btn-ghost mt-6 text-sm">
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <div className="card border-rose-100">
                <div className="h-1 w-full bg-gradient-to-r from-rose-300 to-rose-400 rounded-full -mt-6 -mx-6 mb-6 w-[calc(100%+48px)]" />

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-ink mb-1.5">
                        Nama <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Nama lengkap kamu"
                        className={ic('name')} />
                      {errors.name && touched.name && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>


                    <div>
                      <label className="block text-sm font-bold text-ink mb-1.5">
                        Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="email@kamu.com"
                        className={ic('email')} />
                      {errors.email && touched.email && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ink mb-1.5">
                      No. HP <span className="text-soft font-normal text-xs">(opsional)</span>
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="input"/>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-ink mb-1.5">
                      Pesan <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} onBlur={handleBlur}
                      rows={5} placeholder="Ceritain apa yang kamu mau tanyain atau tawarkan..."
                      className={`${ic('message')} resize-none`}
                    />
                    {errors.message && touched.message && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-rose-600/30 border-t-rose-700 rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <><Send size={16} /> Kirim Pesan</>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
