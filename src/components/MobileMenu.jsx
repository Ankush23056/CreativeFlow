const NAV_LINKS = [
  { href: '#features',   label: 'Features'    },
  { href: '#solutions',  label: 'Solutions'   },
  { href: '#pricing',    label: 'Pricing'     },
  { href: '#resources',  label: 'Resources'   },
]

export default function MobileMenu({ open, onClose }) {
  return (
    /* Full-screen overlay — staggered link animations */
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      id="mobile-overlay"
    >
      {/* Glassmorphism backdrop */}
      <div
        className="mobile-menu__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding full-screen drawer */}
      <div className="mobile-menu__drawer">

        {/* Close button */}
        <button
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
          id="mobile-menu-close-btn"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
            aria-hidden="true">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2"  y2="14" />
          </svg>
        </button>

        {/* Staggered nav links (delay set by nth-child in CSS) */}
        <ul className="mobile-menu__links" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={onClose}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons — fade up after links */}
        <div className="mobile-menu__bottom">
          <div className="mobile-menu__divider" aria-hidden="true" />
          <a
            href="#login"
            className="btn btn--secondary"
            id="mobile-login-btn"
            onClick={onClose}
          >
            Log in
          </a>
          <a
            href="#signup"
            className="btn btn--primary"
            id="mobile-cta-btn"
            onClick={onClose}
          >
            Start Free Trial
          </a>
        </div>

      </div>
    </div>
  )
}
