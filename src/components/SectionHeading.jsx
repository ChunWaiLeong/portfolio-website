function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div>
      {children && <p className="heading-note">{children}</p>}
    </div>
  )
}

export default SectionHeading
