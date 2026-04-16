/**
 * CreativeFlow CMS — Customer Stories Data Source
 * ─────────────────────────────────────────────
 * This file acts as a Framer CMS Collection substitute.
 * Each object maps 1:1 to the CMS fields defined in the schema:
 *
 *  Field          Type        Description
 *  ──────────────────────────────────────────────────────────────
 *  id             String      Unique slug for React key prop
 *  name           String      Client's full name
 *  role           String      Job title at their company
 *  company        String      Company / brand name
 *  companyInitials String     2-letter monogram used in the logo placeholder
 *  quote          String      Testimonial long text (auto-height container)
 *  avatarInitials String      2-letter monogram used in the avatar placeholder
 *  avatarColor    String      Gradient string for the avatar background
 *  category       "SaaS" | "Agency" | "Enterprise"   Option field
 *  rating         Number      Star rating (1–5)
 *
 * HOW TO ADD MORE TESTIMONIALS (for non-technical users)
 * ───────────────────────────────────────────────────────
 * 1. Copy any object below and paste it after the last entry.
 * 2. Give it a unique `id`.
 * 3. Fill in the text fields.
 * 4. Set `category` to one of the three allowed values.
 * 5. Save the file — the layout updates automatically with zero layout shift.
 *    The CSS Grid re-flows cards without any design code changes needed.
 */

export const TESTIMONIALS_DATA = [
  {
    id: "sarah-chen-nexacloud",
    name: "Sarah Chen",
    role: "Head of Product",
    company: "NexaCloud",
    companyInitials: "NC",
    quote:
      "CreativeFlow didn't just speed up our workflow — it completely transformed how our product and design teams collaborate. We went from 3-week sprint cycles to shipping polished features every 5 days. The atomic component system means our whole team speaks the same design language now.",
    avatarInitials: "SC",
    avatarColor: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
    category: "SaaS",
    rating: 5,
  },
  {
    id: "marcus-wright-pulse",
    name: "Marcus Wright",
    role: "Creative Director",
    company: "Pulse Agency",
    companyInitials: "PA",
    quote:
      "As a creative agency, our reputation lives or dies by how fast we deliver without sacrificing quality. CreativeFlow gave us both. We onboarded three new clients in 60 days and the handoff process is now completely seamless — clients can edit their own copy in the CMS without ever touching our design.",
    avatarInitials: "MW",
    avatarColor: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    category: "Agency",
    rating: 5,
  },
  {
    id: "priya-sharma-axiom",
    name: "Priya Sharma",
    role: "VP Engineering",
    company: "Axiom Systems",
    companyInitials: "AS",
    quote:
      "At enterprise scale, consistency is non-negotiable. CreativeFlow's design token architecture and CMS-driven content model let us roll out brand updates across 14 regional product lines simultaneously — a job that used to take a month now takes an afternoon. Security, accessibility, and scalability all check out.",
    avatarInitials: "PS",
    avatarColor: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
    category: "Enterprise",
    rating: 5,
  },
];

/**
 * Category metadata — controls badge colors, used in TestimonialCard.
 * Add a new category here if you ever extend the Option field in the CMS.
 */
export const CATEGORY_META = {
  SaaS: {
    bg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)",
    color: "#60A5FA",
    dot: "#3B82F6",
  },
  Agency: {
    bg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)",
    color: "#A78BFA",
    dot: "#8B5CF6",
  },
  Enterprise: {
    bg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)",
    color: "#34D399",
    dot: "#10B981",
  },
};
