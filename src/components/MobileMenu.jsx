export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop */}
      <div
        className="mobile-menu__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="mobile-menu__drawer">
        <button
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
          id="mobile-menu-close-btn"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2" y2="14" />
          </svg>
        </button>

        <ul className="mobile-menu__links" role="list">
          <li><a href="#features" onClick={onClose}>Features</a></li>
          <li><a href="#how-it-works" onClick={onClose}>How it works</a></li>
          <li><a href="#pricing" onClick={onClose}>Pricing</a></li>
          <li><a href="#resources" onClick={onClose}>Resources</a></li>
        </ul>

        <div className="mobile-menu__divider" aria-hidden="true" />

        <a href="#login" className="btn btn--secondary" id="mobile-login-btn" onClick={onClose}>
          Log in
        </a>
        <a href="#signup" className="btn btn--primary" id="mobile-signup-btn" onClick={onClose}>
          Get Started Free
        </a>
      </div>
    </div>
  )
}
