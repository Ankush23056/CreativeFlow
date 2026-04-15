export default function CtaSection() {
  return (
    <section
      className="cta-section"
      aria-labelledby="cta-heading"
      id="get-started"
    >
      <div className="container">
        <div className="cta-card reveal">
          <h2 id="cta-heading" className="cta-card__heading">
            Ready to end the chaos?
          </h2>
          <p className="cta-card__sub">
            Join 4,200+ agencies already running on CreativeFlow. Set up takes
            less than 10 minutes — no credit card required.
          </p>

          <div className="cta-card__actions">
            <a
              href="#signup"
              className="btn btn--primary btn--lg"
              id="cta-primary-btn"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <path d="M1 8h14M9 2l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#demo"
              className="btn btn--secondary btn--lg"
              id="cta-secondary-btn"
            >
              Book a demo
            </a>
          </div>

          <p className="cta-note">
            ✓ 14-day free trial &nbsp;·&nbsp; ✓ No credit card &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
