const SectionTitle = ({ eyebrow, title, subtitle, center = false }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
      <div className="section-accent" />
      <span className="font-mono text-rose-500 text-xs font-medium tracking-widest uppercase">
        {eyebrow}
      </span>
    </div>
    <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-snug mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-soft text-sm leading-relaxed ${center ? 'mx-auto' : ''} max-w-lg`}>
        {subtitle}
      </p>
    )}
  </div>
)
export default SectionTitle
