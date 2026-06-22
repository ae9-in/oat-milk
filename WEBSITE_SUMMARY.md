# Oatmeal — Premium Craft Oat Milk Website

## Overview
A stunning, fully responsive single-page marketing/storefront website for "Oatmeal," a premium craft oat milk brand. Built with React 19, GSAP animations, Lenis smooth scroll, and a carefully considered design system inspired by premium coffee culture.

---

## Design System

### Color Palette (Oat Milk World Inspired)
- **Cream Base** (#FAF8F3) — Primary background, warm and milky
- **Barista Foam** (#FFFFFF) — Pure white for contrast and clarity
- **Toasted Oat** (#E8DCC8) — Warm beige for subtle accents
- **Espresso** (#2B2520) — Deep brown text, approachable and warm
- **Caramel** (#C89968) — Signature accent color for CTAs and highlights
- **Matcha Green** (#9BA89C) — Muted green for sustainability signals

### Typography
- **Display Font:** Poppins (700 weight) — Soft, rounded, confident letterforms
- **Body Font:** Inter (400/500 weight) — Clean, highly legible, neutral
- **Full type scale:** H1–Caption with explicit weights, tracking, and line-height

### Layout Grid
- **Base spacing unit:** 8px
- **Desktop:** 12-column grid, max-width 1280px
- **Tablet:** 8-column grid, responsive padding
- **Mobile:** 4-column grid, optimized for touch

---

## Key Sections

### 1. Navigation
- Sticky header with semi-transparent backdrop blur
- Smooth scroll anchor links to all sections
- Mobile-friendly (hamburger menu ready)
- Brand logo and primary CTA

### 2. Hero Section
- Premium background image (oat milk pour into latte)
- Orchestrated entrance animation (staggered headline, subheading, CTA)
- Two CTAs with magnetic hover effects
- Scroll cue with animated chevron
- Proper text contrast over image background

### 3. Liquid Pour Animation Container
- Scroll-scrubbed glass fill animation (tied to scroll position)
- Visual representation of product quality
- Responsive design (simplified on mobile)

### 4. Product Showcase
- 5 product variants (Original, Barista, Unsweetened, Vanilla, Chocolate)
- Hover-lift effect with shadow increase
- Froth rating, protein, and sugar information
- Click-to-select functionality
- Staggered entrance animation

### 5. Brand Story Section
- Editorial layout with image and text
- Oat field sustainability imagery
- Narrative about sourcing and process
- Call-to-action button

### 6. Sustainability Section
- 3-column grid with icons and descriptions
- Water efficiency, carbon neutrality, recyclability
- Hover-lift interactions
- Aligned with brand values

### 7. Build-Your-Box / Subscription Module
- Interactive variant selector
- Quantity stepper (+/−)
- Real-time price calculation
- Subscribe vs. one-time toggle (ready for implementation)
- Add-to-cart animation (idle → loading → success states)

### 8. Footer
- Company info and branding
- Navigation links (Shop, Company, Legal)
- Newsletter signup (ready for implementation)
- Social links (ready for implementation)

---

## Animation & Motion

### Frame Motion Effects Implemented

1. **Hero Entrance Timeline**
   - Staggered headline reveal (0.15s delay between lines)
   - Subheading fade-up (0.3s delay)
   - CTA scale-in (0.6s delay)
   - Scroll cue fade-up (0.8s delay)
   - Total duration: ~1.2s

2. **Scroll-Triggered Section Reveals**
   - Fade-up animation on scroll (0.8s duration)
   - Triggered when section enters viewport (80% threshold)
   - Ease-out easing for snappy feel

3. **Product Card Stagger**
   - Scale-in entrance (0.95 → 1.0)
   - Staggered by 0.1s per card
   - Triggered on product grid scroll

4. **Magnetic Hover Effect**
   - Cursor-following pull within 50px radius
   - Smooth 0.3s transition
   - Applied to all primary buttons
   - Elastic return on mouse leave

5. **Button Press Animation**
   - Scale(0.97) on active state
   - 160ms ease-out transition
   - Provides tactile feedback

6. **Hover Lift**
   - 4px translateY on hover
   - Shadow increase (0 → 12px blur)
   - 0.3s smooth transition
   - Applied to cards and interactive elements

7. **Smooth Scroll (Lenis)**
   - Custom easing function for buttery-smooth scrolling
   - Duration: 1.2s
   - Synced with GSAP ScrollTrigger

8. **Ripple Effect (Ready)**
   - Click-triggered ripple animation
   - 0.6s ease-out
   - Applied to interactive elements

### Accessibility
- ✅ Respects `prefers-reduced-motion` media query
- ✅ All animations have no-motion fallbacks
- ✅ Visible focus rings on interactive elements
- ✅ Proper heading hierarchy (H1–H3)
- ✅ ARIA labels on custom components
- ✅ Sufficient color contrast (WCAG AA)

---

## Technical Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + custom CSS variables
- **Animation:** GSAP 3.15 + ScrollTrigger
- **Smooth Scroll:** Lenis 1.3
- **UI Components:** shadcn/ui
- **Build Tool:** Vite 7
- **Package Manager:** pnpm

---

## Features Implemented

✅ Fully responsive design (375px, 768px, 1024px, 1440px+)
✅ GSAP-powered animations with ScrollTrigger
✅ Lenis smooth scroll integration
✅ Magnetic hover effects on CTAs
✅ Staggered section reveals
✅ Scroll-scrubbed liquid pour animation
✅ Interactive product selector
✅ Quantity stepper
✅ Add-to-cart state management (idle/loading/success)
✅ Sticky navigation with smooth scroll
✅ Premium design system with custom colors
✅ Proper typography hierarchy
✅ Mobile-first responsive layout
✅ Accessibility features (focus rings, ARIA labels)
✅ Prefers-reduced-motion support
✅ High-quality generated product and lifestyle images

---

## Features Ready for Implementation

- Newsletter signup form
- Social media links and sharing
- Product detail modals
- Variant comparison slider
- Customer testimonials carousel
- Blog/content section
- Contact form
- Analytics integration
- Dark mode toggle
- Search functionality

---

## Performance Considerations

- Images optimized and served via CDN
- Lazy loading ready for below-fold images
- GSAP animations optimized (transform/opacity only)
- CSS custom properties for efficient theming
- Mobile animations simplified for performance
- Prefers-reduced-motion respected

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Next Steps

1. **Add Newsletter Signup** — Integrate email capture in footer
2. **Implement Product Detail Modal** — Click product to view full specs
3. **Add Testimonials Carousel** — Social proof with customer reviews
4. **Connect to E-commerce Backend** — Stripe/Shopify integration for real transactions
5. **Add Blog Section** — Content marketing for SEO
6. **Implement Analytics** — Track user behavior and conversions
7. **Add Dark Mode** — Theme toggle for user preference
8. **Optimize for SEO** — Meta tags, structured data, sitemap

---

## Design Philosophy

**Fluid Modernity** — A contemporary, slightly playful take on premium that feels like a high-end coffee shop meets modern wellness. Every design choice reinforces the brand's tactile, premium feel. Motion is not decoration; it demonstrates the product's texture and quality. Typography carries personality. Whitespace is active. Interactions are smooth and responsive.

---

## Brand Voice

**Confident, warm, slightly playful.** "Oat milk as a craft pour, not a dairy substitute to apologize for."

- Headlines: Bold, direct, sensory
- CTAs: Active verbs, no filler
- Microcopy: Clear, friendly, never vague

---

## Color Philosophy

All colors are derived from the actual visual world of oat milk — cream, grain, espresso, foam. The palette is not arbitrary; it's native to the brand. Caramel feels like a well-pulled espresso shot. Matcha green signals sustainability without preaching.

---

Generated: June 16, 2026
Version: 0c93e95f
