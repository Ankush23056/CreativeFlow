/* Logos array — duplicated for seamless infinite loop */
const LOGOS = [
  { name: 'Stripe',      dot: '#6366F1' },
  { name: 'Figma',       dot: '#F24E1E' },
  { name: 'Notion',      dot: '#FFFFFF' },
  { name: 'Linear',      dot: '#5E6AD2' },
  { name: 'Vercel',      dot: '#FFFFFF' },
  { name: 'HubSpot',     dot: '#FF7A59' },
  { name: 'Slack',       dot: '#4A154B' },
  { name: 'Webflow',     dot: '#4353FF' },
  { name: 'Loom',        dot: '#625DF5' },
  { name: 'Airtable',    dot: '#18BFFF' },
]

function LogoGroup() {
  return (
    <div className="marquee-group" aria-hidden="true">
      {LOGOS.map(({ name, dot }) => (
        <span key={name} className="marquee-logo">
          <span
            className="marquee-logo__dot"
            style={{ background: dot }}
          />
          {name}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      className="marquee-section"
      aria-label="Integrates with your favourite tools"
    >
      <p className="marquee-label">
        Seamlessly integrates with your favourite tools
      </p>

      {/* Track is duplicated so the scroll is seamless */}
      <div className="marquee-track" role="presentation">
        <LogoGroup />
        <LogoGroup />  {/* duplicate for infinite loop */}
      </div>
    </section>
  )
}
