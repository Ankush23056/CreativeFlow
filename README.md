# CreativeFlow — Responsive Landing Page

🔗 **Live Demo:** [https://creative-flow-omega.vercel.app/](https://creative-flow-omega.vercel.app/)

💻 **Github:** [https://github.com/Ankush23056/CreativeFlow.git](https://github.com/Ankush23056/CreativeFlow.git)

A production-quality SaaS landing page built with **React + Vite**, showcasing
modern design-system thinking, CMS architecture, and scalable component patterns.

---

## Tech Stack

| Layer	| Implementation	| Technical Logic |
|---|---|---|
| Framework	| Framer	| Component-based architecture with advanced Breakpoint logic. |
| Styling	| Design Tokens	| Centralized variables for colors, spacing (8px scale), and radii. |
| Animations	| Spring & Stagger	| Optimized scroll-transforms and entrance animations (100ms–340ms). |
| Typography	| Fluid Type	| Sora (Headings) & Inter (Body) with semantic tagging. |

---

## Project Structure

To maintain a "Clean Structure" (as requested in the brief), the project is organized into logical functional blocks:

- **Navigation:** Glassmorphism sticky nav with conditional mobile overlay.
- **Hero:** Center-aligned high-conversion section with optimized H1.
- **Social Proof:** Infinite marquee (Phase 2) and trust-badge strip.
- **Features:** Responsive CSS Grid utilizing "Auto-layout" stacks.
- **CMS Engine:** Dynamic Customer Stories section with category-specific logic.
- **Conversion:** Multi-tier pricing with toggle logic and global CTA.

---

## Technical Features

### 1. Scalable CMS Architecture (Phase 3)
Instead of static content, the Customer Stories section is powered by a structured CMS Collection. This ensures the marketing team can scale content without layout breakage.

- **Content-Agnostic Layouts:** Used `align-items: start` and auto-height containers to prevent Cumulative Layout Shift (CLS) when testimonials vary in length.
- **Data Modeling:** Implemented typed fields (Plain Text, Long Text, Image, Options) to maintain design integrity.
- **Category Logic:** Built-in "Option" fields allow for dynamic filtering (SaaS, Agency, Enterprise), enabling targeted marketing views.

### 2. Advanced Responsiveness
The site isn't just "fluid"; it's architected for four distinct viewports:

- **Ultrawide (1920px+):** Max-width containers prevent "stretching" and maintain readability.
- **Desktop (1200px):** Standard 12-column alignment.
- **Tablet (768px):** Reflowed grids (3-column to 2-column) for touch-target optimization.
- **Mobile (375px):** Stacked hierarchy with high-contrast typography.

### 3. SEO & Accessibility (Phase 4)
- **Semantic HTML:** Strict adherence to heading levels (H1–H3) for crawler optimization.
- **Metadata:** Full OpenGraph suite (Title, Description, OG:Image) for social preview consistency.
- **A11y:** High-contrast ratios (WCAG AA) and descriptive alt tags for all visual assets.

---

## Phase Log

| Phase | Focus | Key Deliverables |
|---|---|---|
| Phase 1 | Foundations | Hero, Nav, Features Skeleton, Semantic Tags. |
| Phase 2 | Interactions | Infinite Marquee, Pricing Toggles, Mobile Overlay. |
| Phase 3 | Scalability | CMS Schema, Testimonial Collection, Filter Logic. |
| Phase 4 | Optimization | SEO Audit, Alt Tags, Responsiveness Polish. |  

---

## 👤 Author
**Ankush Kumar** | Frontend Developer Intern
