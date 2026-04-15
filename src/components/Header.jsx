export default function Header({ scrolled, onMenuOpen }) {
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="nav" aria-label="Main navigation">
          {/* Logo */}
          <a href="/" className="nav__logo" aria-label="CreativeFlow home">
            <span className="nav__logo-icon" aria-hidden="true">CO</span>
            <span className="nav__logo-name">CreativeFlow</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav__links" role="list">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>

          {/* Desktop CTA */}
          <div className="nav__cta">
            <a href="#login" className="btn btn--ghost" id="nav-login-btn">Log in</a>
            <a href="#signup" className="btn btn--primary" id="nav-signup-btn">
              Get Started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="nav__menu-btn"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            id="mobile-menu-btn"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <line x1="2" y1="5" x2="18" y2="5" />
              <line x1="2" y1="10" x2="18" y2="10" />
              <line x1="2" y1="15" x2="18" y2="15" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
