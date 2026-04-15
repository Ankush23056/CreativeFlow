const LOGOS = [
  'Pentagram',
  'Wieden+K',
  'R/GA',
  'BBDO',
  'Ogilvy',
  'MediaMonks',
  'Huge Inc.',
]

export default function Trust() {
  return (
    <aside className="trust" aria-label="Trusted by leading agencies">
      <div className="container">
        <p className="trust__label">Trusted by the world's best creative agencies</p>
        <div className="trust__logos" role="list">
          {LOGOS.map((name) => (
            <span key={name} className="trust__logo" role="listitem">
              {name}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}
