import { useState, useEffect } from 'react'
import Header       from './components/Header'
import Hero         from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import ValueProp    from './components/ValueProp'
import Features     from './components/Features'
import Marquee      from './components/Marquee'
import PricingSection from './components/PricingSection'
import Trust        from './components/Trust'
import CtaSection   from './components/CtaSection'
import Footer       from './components/Footer'
import MobileMenu   from './components/MobileMenu'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Glassmorphism nav trigger
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer — scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Re-observe on every render to catch dynamically added .reveal elements
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      {/* Nav_Main */}
      <Header scrolled={scrolled} onMenuOpen={() => setMenuOpen(true)} />

      {/* Full-screen mobile overlay */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="main-content">
        <Hero />
        <MetricsStrip />
        <ValueProp />
        <Features />

        {/* Phase 2: infinite logo marquee */}
        <Marquee />

        {/* Phase 2: pricing cards (Card_Feature) */}
        <PricingSection />

        <Trust />
        <CtaSection />
      </main>

      <Footer />
    </>
  )
}
