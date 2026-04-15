// Check icon path
const CheckIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <polyline points="1.5,6 4.5,9 10.5,3" />
  </svg>
)

const VALUE_POINTS = [
  'Eliminate repetitive handoff emails with smart automations',
  'Centralise client feedback with versioned approval threads',
  'Auto-generate briefs and scope documents from intake forms',
  'Sync deliverables with billing — no more lost revenue',
  'Real-time capacity view across every team member',
]

const WORKFLOW_STEPS = [
  {
    num: '01',
    title: 'Client submits an intake form',
    desc: 'Branded form auto-creates a project + brief',
    badge: 'Auto',
  },
  {
    num: '02',
    title: 'AI drafts strategy & assigns tasks',
    desc: 'Smart capacity allocation across team',
    badge: 'AI',
  },
  {
    num: '03',
    title: 'Review link sent to client',
    desc: 'One-click approval with version history',
    badge: 'Auto',
  },
  {
    num: '04',
    title: 'Invoice generated on approval',
    desc: 'Stripe or custom billing, zero admin',
    badge: 'Auto',
  },
]

export default function ValueProp() {
  return (
    <section
      className="value-prop"
      id="how-it-works"
      aria-labelledby="value-prop-heading"
    >
      <div className="container">
        <div className="value-prop__grid">
          {/* Left: Text */}
          <div className="value-prop__text">
            <p className="section-label reveal">How It Works</p>

            <h2
              id="value-prop-heading"
              className="section-heading reveal reveal-delay-1"
            >
              From brief to invoice — <em>fully automated</em>
            </h2>

            <p className="section-sub reveal reveal-delay-2">
              Stop losing hours to admin. CreativeFlow connects every stage of your
              agency workflow, so nothing falls through the cracks and every
              project runs on autopilot.
            </p>

            <ul className="value-list reveal reveal-delay-3" role="list">
              {VALUE_POINTS.map((point) => (
                <li key={point} className="value-list__item">
                  <span className="value-list__icon">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }} className="reveal reveal-delay-4">
              <a href="#features" className="btn btn--primary" id="value-prop-cta">
                See all features
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Workflow visual */}
          <div className="value-prop__visual reveal reveal-delay-2">
            <div className="workflow-steps" role="list">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.num} className="workflow-step" role="listitem">
                  <div className="workflow-step__num" aria-hidden="true">
                    {step.num}
                  </div>
                  <div className="workflow-step__text">
                    <div className="workflow-step__title">{step.title}</div>
                    <div className="workflow-step__desc">{step.desc}</div>
                  </div>
                  <span className="workflow-step__badge">{step.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
