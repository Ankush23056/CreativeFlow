// Bar heights as percentages for the mini dashboard chart
const BAR_HEIGHTS = [38, 55, 42, 70, 58, 85, 63, 90, 72, 95, 78, 100]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background effects */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />
      </div>

      <div className="hero__inner">
        <div className="container">
          {/* Hero Content */}
          <div className="hero__content">
            {/* Announcement badge */}
            <div className="hero__badge" role="note">
              <span className="hero__badge-dot" aria-hidden="true" />
              Just launched — AI-powered project workflows
            </div>

            {/* H1 - Primary heading */}
            <h1 id="hero-heading" className="hero__heading">
              Automate your agency's{' '}
              <em>creative chaos</em>
            </h1>

            {/* Subheadline */}
            <p className="hero__sub">
              CreativeFlow unifies briefs, assets, approvals, and billing into one
              intelligent workspace — so your team ships faster and clients stay
              delighted.
            </p>

            {/* CTA Buttons */}
            <div className="hero__actions">
              <a
                href="#signup"
                className="btn btn--primary btn--lg"
                id="hero-cta-primary"
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
                id="hero-cta-secondary"
              >
                <span className="play-icon" aria-hidden="true">
                  <svg viewBox="0 0 10 10" aria-hidden="true">
                    <polygon points="2,1 9,5 2,9" />
                  </svg>
                </span>
                Watch Demo
              </a>
            </div>

            {/* Social proof */}
            <div className="hero__social-proof" role="note" aria-label="User statistics">
              <div className="hero__avatars" aria-hidden="true">
                <div className="hero__avatar hero__avatar--1">AK</div>
                <div className="hero__avatar hero__avatar--2">MJ</div>
                <div className="hero__avatar hero__avatar--3">SR</div>
                <div className="hero__avatar hero__avatar--4">PL</div>
                <div className="hero__avatar hero__avatar--5">+</div>
              </div>
              <p className="hero__social-text">
                Trusted by <strong>4,200+</strong> creative agencies worldwide
              </p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="hero__preview" aria-label="Product dashboard preview">
            <div className="hero__preview-wrapper">
              {/* Fake browser topbar */}
              <div className="hero__preview-topbar" aria-hidden="true">
                <span className="preview-dot preview-dot--red" />
                <span className="preview-dot preview-dot--yellow" />
                <span className="preview-dot preview-dot--green" />
                <span className="preview-url">app.creativeos.io/dashboard</span>
              </div>

              {/* Dashboard Content */}
              <div className="hero__dashboard">
                {/* Stat Cards */}
                <div className="preview-stats" role="list">
                  {[
                    { label: 'Active Projects', value: '148', change: '+12 this week' },
                    { label: 'Tasks Automated', value: '3.2K', change: '↑ 28% vs last mo.' },
                    { label: 'Team Velocity', value: '94%', change: '↑ 11pts improvement' },
                    { label: 'Revenue Tracked', value: '$218K', change: '↑ $34K MoM' },
                  ].map((stat) => (
                    <div key={stat.label} className="preview-stat" role="listitem">
                      <div className="preview-stat__label">{stat.label}</div>
                      <div className="preview-stat__value">{stat.value}</div>
                      <div className="preview-stat__change">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Mini Bar Chart */}
                <div className="preview-chart" aria-label="Revenue trend chart">
                  <div className="preview-chart__title">Revenue Trend — Last 12 Months</div>
                  <div className="preview-chart__bars" aria-hidden="true">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="preview-bar"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.06}s`,
                          opacity: i === BAR_HEIGHTS.length - 1 ? 1 : 0.55 + (i / BAR_HEIGHTS.length) * 0.45,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
