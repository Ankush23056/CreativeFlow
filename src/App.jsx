import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import ValueProp from './components/ValueProp'
import Features from './components/Features'
import Trust from './components/Trust'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      <Header scrolled={scrolled} onMenuOpen={() => setMenuOpen(true)} />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="main-content">
        <Hero />
        <MetricsStrip />
        <ValueProp />
        <Features />
        <Trust />
        <CtaSection />
      </main>

      <Footer />
    </>
  )
}
