import { CATEGORY_META } from '../data/testimonialsData'

/**
 * TestimonialCard — Dynamic CMS-driven component
 * ─────────────────────────────────────────────────
 * Props map 1:1 to the CMS schema fields.
 * The `quote` container is auto-height (no fixed min-height) so longer
 * testimonials simply expand the card — zero layout shift, zero overlap.
 */
export default function TestimonialCard({
  name,
  role,
  company,
  companyInitials,
  quote,
  avatarInitials,
  avatarColor,
  category,
  rating,
}) {
  const meta = CATEGORY_META[category] ?? CATEGORY_META['SaaS']

  return (
    <article className="testimonial-card" aria-label={`Testimonial from ${name} at ${company}`}>
      {/* ── Top row: company logo + category tag ── */}
      <div className="tcard__header">
        <div className="tcard__company-logo" aria-hidden="true">
          {companyInitials}
        </div>

        {/* Category tag — dynamic background from CATEGORY_META */}
        <span
          className="tcard__category"
          style={{
            background:    meta.bg,
            border:        `1px solid ${meta.border}`,
            color:         meta.color,
          }}
        >
          <span
            className="tcard__category-dot"
            style={{ background: meta.dot }}
          />
          {category}
        </span>
      </div>

      {/* ── Star rating ── */}
      <div className="tcard__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="tcard__star" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0l2.245 4.55 5.01.727-3.627 3.536.856 4.993L8 11.45l-4.484 2.356.856-4.993L.245 5.277l5.01-.727L8 0z" />
          </svg>
        ))}
      </div>

      {/* ── Quote — auto-height, no fixed constraint ── */}
      <blockquote className="tcard__quote">
        <span className="tcard__quote-mark" aria-hidden="true">"</span>
        {quote}
      </blockquote>

      {/* ── Author row ── */}
      <footer className="tcard__author">
        <div
          className="tcard__avatar"
          style={{ background: avatarColor }}
          aria-hidden="true"
        >
          {avatarInitials}
        </div>
        <div className="tcard__author-info">
          <p className="tcard__name">{name}</p>
          <p className="tcard__role">
            {role} · <span className="tcard__company">{company}</span>
          </p>
        </div>
      </footer>
    </article>
  )
}
