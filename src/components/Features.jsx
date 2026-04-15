import { useEffect, useRef } from 'react'

/* ── SVG Icon Components ── */
const IconBolt = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <path d="M14 2L4 14h9l-1 10 10-12h-9l1-10z" />
  </svg>
)

const IconUsers = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <circle cx="10" cy="8" r="4" />
    <path d="M2 22c0-5 4-8 8-8s8 3 8 8" />
    <circle cx="20" cy="9" r="3" />
    <path d="M20 18c2.5 0 4 1.5 4 4" />
  </svg>
)

const IconChart = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <rect x="3" y="15" width="5" height="8" rx="1" />
    <rect x="10.5" y="9" width="5" height="14" rx="1" />
    <rect x="18" y="3" width="5" height="20" rx="1" />
    <path d="M1 24h24" />
  </svg>
)

const IconLock = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <rect x="5" y="12" width="16" height="11" rx="2" />
    <path d="M8 12V8a5 5 0 0110 0v4" />
    <circle cx="13" cy="17" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const IconMagic = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <path d="M13 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
    <path d="M5 16l1 2.5L8.5 20 6 21 5 23.5 4 21 1.5 20 4 18.5 5 16z" />
  </svg>
)

const IconIntegrate = () => (
  <svg viewBox="0 0 26 26" aria-hidden="true">
    <circle cx="6" cy="13" r="3" />
    <circle cx="20" cy="6" r="3" />
    <circle cx="20" cy="20" r="3" />
    <path d="M9 13h5l4-5" />
    <path d="M14 13l4 5" />
  </svg>
)

/* ── Feature Data ── */
const FEATURES = [
  {
    id: 'ai-automation',
    icon: <IconBolt />,
    iconClass: 'icon--blue',
    heading: 'AI-Powered Automation',
    body: 'Trigger smart rules that auto-assign tasks, send client updates, generate documents, and fire off invoices — all without lifting a finger.',
    tag: { label: '✨ New', cls: 'tag--new' },
    highlight: true,
  },
  {
    id: 'team-capacity',
    icon: <IconUsers />,
    iconClass: 'icon--violet',
    heading: 'Team Capacity Planning',
    body: 'Visual workload heatmaps and real-time availability scores help you avoid burnout and always know who can take the next project.',
    tag: { label: '🔥 Popular', cls: 'tag--popular' },
    highlight: false,
  },
  {
    id: 'revenue-analytics',
    icon: <IconChart />,
    iconClass: 'icon--green',
    heading: 'Revenue Analytics',
    body: 'Track retainer health, project profitability, and pipeline value. Spot scope creep before it eats your margin.',
    tag: null,
    highlight: false,
  },
  {
    id: 'client-portal',
    icon: <IconLock />,
    iconClass: 'icon--amber',
    heading: 'Branded Client Portal',
    body: 'Give every client a beautiful, white-labelled space to review assets, leave feedback, sign off deliverables, and pay invoices.',
    tag: { label: '🧪 Beta', cls: 'tag--beta' },
    highlight: false,
  },
  {
    id: 'ai-content',
    icon: <IconMagic />,
    iconClass: 'icon--pink',
    heading: 'AI Brief Generator',
    body: 'Turn a 2-line request into a fully-scoped creative brief in seconds. Powered by GPT-4 and trained on 50,000+ winning campaigns.',
    tag: { label: '✨ New', cls: 'tag--new' },
    highlight: false,
  },
  {
    id: 'integrations',
    icon: <IconIntegrate />,
    iconClass: 'icon--cyan',
    heading: '120+ Integrations',
    body: 'Connect Slack, Figma, Google Workspace, Notion, Stripe, HubSpot, and more. CreativeFlow lives where your team already works.',
    tag: null,
    highlight: false,
  },
]

/* ── Mouse gradient tracking per card ── */
function FeatureCard({ feature, delay }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mx', `${x}%`)
      card.style.setProperty('--my', `${y}%`)
    }

    card.addEventListener('mousemove', handleMouseMove)
    return () => card.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <article
      ref={cardRef}
      className={`feature-card reveal${feature.highlight ? ' feature-card--highlight' : ''}`}
      style={{ transitionDelay: delay }}
      aria-labelledby={`feature-${feature.id}-heading`}
      id={`feature-card-${feature.id}`}
    >
      <div className={`feature-card__icon-wrap ${feature.iconClass}`} aria-hidden="true">
        {feature.icon}
      </div>

      <h2
        id={`feature-${feature.id}-heading`}
        className="feature-card__heading"
      >
        {feature.heading}
      </h2>

      <p className="feature-card__body">{feature.body}</p>

      {feature.tag && (
        <span className={`feature-card__tag ${feature.tag.cls}`}>
          {feature.tag.label}
        </span>
      )}
    </article>
  )
}

/* ── Features Section ── */
export default function Features() {
  return (
    <section
      className="features"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="container">
        {/* Section header */}
        <header className="features__header">
          <p className="section-label reveal">Features</p>

          <h2
            id="features-heading"
            className="section-heading reveal reveal-delay-1"
          >
            Everything your agency needs to{' '}
            <em>scale without chaos</em>
          </h2>

          <p className="section-sub reveal reveal-delay-2">
            One platform that replaces your project tools, client emails,
            spreadsheets, and billing software — built specifically for creative
            agencies.
          </p>
        </header>

        {/* 3-col desktop / 1-col mobile grid */}
        <div
          className="features__grid"
          role="list"
          aria-label="Feature list"
        >
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.id}
              feature={f}
              delay={`${(i % 3) * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
