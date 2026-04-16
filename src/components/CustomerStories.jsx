import { useState } from 'react'
import { TESTIMONIALS_DATA } from '../data/testimonialsData'
import TestimonialCard from './TestimonialCard'

/**
 * CustomerStories — Phase 3 CMS Section
 * ────────────────────────────────────────
 * Layout: CSS Grid — 3 columns (desktop), 2 (tablet), 1 (mobile)
 * Content: 100% driven by TESTIMONIALS_DATA — no hard-coded JSX testimonials
 * Filter:  Category tabs so marketing can highlight specific verticals
 *
 * SCALABILITY NOTE:
 * The grid is `auto-rows: 1fr` disabled in favour of `auto-rows: auto` so
 * each card is exactly as tall as its content. Adding 100+ CMS items will
 * never cause layout shift because there are no fixed heights anywhere in
 * the chain — grid, card wrapper, or quote container.
 */

const ALL_CATEGORIES = ['All', 'SaaS', 'Agency', 'Enterprise']

export default function CustomerStories() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.category === activeCategory)

  return (
    <section
      id="customer-stories"
      className="customer-stories reveal"
      aria-labelledby="stories-heading"
    >
      <div className="container">
        {/* ── Section header ── */}
        <div className="stories__header">
          <p className="section-label">Customer Stories</p>
          <h2 id="stories-heading" className="section-heading">
            Trusted by teams who <em>ship fast</em>
          </h2>
          <p className="section-sub">
            From nimble SaaS startups to global enterprise teams — see how
            NexusFlow customers cut delivery time and scale without chaos.
          </p>
        </div>

        {/* ── Category filter tabs ── */}
        <div
          className="stories__filters"
          role="tablist"
          aria-label="Filter testimonials by category"
        >
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`stories__filter-btn ${activeCategory === cat ? 'stories__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`filter-tab-${cat.toLowerCase()}`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="stories__filter-count">
                  {TESTIMONIALS_DATA.filter((t) => t.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Testimonial grid — 3col / 2col / 1col ── */}
        <div className="stories__grid" aria-live="polite">
          {filtered.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* ── CTA row ── */}
        <div className="stories__cta">
          <p className="stories__cta-text">
            Join <strong>2,400+</strong> teams already using NexusFlow
          </p>
          <a href="#pricing" className="btn btn--primary">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
