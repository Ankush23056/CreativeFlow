const CheckIcon = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
    <polyline points="1.5,6 4.5,9 10.5,3" />
  </svg>
)

const PLANS = [
  {
    id:       'starter',
    plan:     'Starter',
    amount:   '29',
    period:   '/mo · billed monthly',
    desc:     'Perfect for solo freelancers and small studios just getting organised.',
    featured: false,
    badge:    null,
    cta:      'Start free trial',
    ctaStyle: 'btn--secondary',
    features: [
      { text: 'Up to 5 active projects',    included: true  },
      { text: 'Basic automation workflows',  included: true  },
      { text: 'Client approval portal',      included: true  },
      { text: '5 GB asset storage',          included: true  },
      { text: 'AI Brief Generator',          included: false },
      { text: 'Revenue analytics',           included: false },
      { text: 'Priority support',            included: false },
    ],
  },
  {
    id:       'agency',
    plan:     'Agency',
    amount:   '79',
    period:   '/mo · billed monthly',
    desc:     'The full toolkit for growing agencies that need automation at scale.',
    featured: true,
    badge:    '🔥 Most Popular',
    cta:      'Start free trial',
    ctaStyle: 'btn--primary',
    features: [
      { text: 'Unlimited active projects',   included: true  },
      { text: 'Advanced automation suite',   included: true  },
      { text: 'Branded client portal',       included: true  },
      { text: '100 GB asset storage',        included: true  },
      { text: 'AI Brief Generator',          included: true  },
      { text: 'Revenue analytics',           included: true  },
      { text: 'Priority support',            included: false },
    ],
  },
  {
    id:       'enterprise',
    plan:     'Enterprise',
    amount:   '199',
    period:   '/mo · billed annually',
    desc:     'Custom workflows, SLA guarantees, and a dedicated success manager.',
    featured: false,
    badge:    null,
    cta:      'Talk to sales',
    ctaStyle: 'btn--secondary',
    features: [
      { text: 'Unlimited everything',        included: true  },
      { text: 'Custom automation builder',   included: true  },
      { text: 'White-label portal + domain', included: true  },
      { text: 'Unlimited storage',           included: true  },
      { text: 'AI Brief Generator',          included: true  },
      { text: 'Revenue analytics + export',  included: true  },
      { text: 'Dedicated success manager',   included: true  },
    ],
  },
]

export default function PricingSection() {
  return (
    /* Named: Card_Feature (section wrapper) */
    <section
      className="pricing-section"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        {/* Header */}
        <header className="pricing-section__header">
          <p className="section-label reveal">Pricing</p>
          <h2
            id="pricing-heading"
            className="section-heading reveal reveal-delay-1"
          >
            Simple, transparent <em>pricing</em>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            No hidden fees. No per-seat surprises. Just one plan that grows
            with your agency.
          </p>
        </header>

        {/* 3-column pricing grid */}
        <div
          className="pricing-grid"
          role="list"
          aria-label="Pricing plans"
        >
          {PLANS.map((plan, i) => (
            /* Card_Feature instance */
            <article
              key={plan.id}
              className={`pricing-card reveal reveal-delay-${i + 1}${plan.featured ? ' pricing-card--featured' : ''}`}
              role="listitem"
              aria-label={`${plan.plan} plan — $${plan.amount}/month`}
              id={`Card_Feature--${plan.id}`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <span className="pricing-card__badge" aria-label="Most popular plan">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <p className="pricing-card__plan">{plan.plan}</p>

              {/* Price — Auto Layout: flex row align-end */}
              <div className="pricing-card__price">
                <span className="pricing-card__currency">$</span>
                <span className="pricing-card__amount">{plan.amount}</span>
              </div>
              <p className="pricing-card__period">{plan.period}</p>

              <p className="pricing-card__desc">{plan.desc}</p>

              <div className="pricing-card__divider" aria-hidden="true" />

              {/* Feature list */}
              <ul className="pricing-card__features" role="list">
                {plan.features.map(({ text, included }) => (
                  <li
                    key={text}
                    className={`pricing-card__feature${included ? '' : ' pricing-card__feature--dim'}`}
                    aria-label={`${text} — ${included ? 'included' : 'not included'}`}
                  >
                    <span className="pricing-card__check">
                      <CheckIcon />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href={`#signup-${plan.id}`}
                className={`btn ${plan.ctaStyle}`}
                id={`pricing-cta-${plan.id}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Fine print */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.8125rem',
            color: 'var(--color-slate-500)',
          }}
        >
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
