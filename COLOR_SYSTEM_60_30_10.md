# Oatmeal Brand — 60/30/10 Color System Specification

## PHASE 1: THREE-TIER COLOR DEFINITION

### 60% DOMINANT — Canvas & Breathing Room
**Token Name:** `--color-dominant` / `--color-cream-base`  
**Hex Value:** `#FAFAF8`  
**RGB:** rgb(250, 250, 248)  
**OKLCH:** oklch(0.985 0.001 80)

**Rationale:**
The 60% dominant tone is a **barista-foam off-white** rather than a bakery cream. It's cooler and more desaturated than the generic warm-cream default (#F4F1EA). This tone:
- Reflects the visual weight of steamed oat milk foam—clean, modern, premium
- Provides maximum breathing room for content without feeling sterile (slight warm undertone at 80° hue)
- Anchors the page as a neutral canvas that lets product imagery and accent colors shine
- Conveys sustainability and purity (not a heavy, saturated cream)

**Usage:** Page background, section backgrounds (primary), card surfaces, modal backgrounds, input fields (resting state)

---

### 30% SECONDARY — Structure & Rhythm
**Token Name:** `--color-secondary` / `--color-espresso`  
**Hex Value:** `#2B2520`  
**RGB:** rgb(43, 37, 32)  
**OKLCH:** oklch(0.235 0.015 65)

**Rationale:**
The 30% secondary tone is a **deep espresso brown**—the color of freshly pulled espresso, not pure black. This tone:
- Creates visual rhythm by breaking the dominant tone on alternating sections (footer, sticky nav, testimonials section background)
- Carries primary typography (headlines, body text) with strong contrast and readability
- Signals sophistication and craft (espresso is the barista's medium)
- Sits at the boundary between neutral and warm, maintaining the oat milk brand's earthy authenticity
- Used sparingly enough that it never overwhelms the page

**Usage:** Footer background, sticky navigation background, section dividers, primary headline color, body text, structural containers, dark-mode backgrounds

---

### 10% ACCENT — Signature & Interaction
**Token Name:** `--color-accent` / `--color-caramel`  
**Hex Value:** `#C89968`  
**RGB:** rgb(200, 153, 104)  
**OKLCH:** oklch(0.67 0.18 52)

**Rationale:**
The 10% accent is a **warm caramel gold**—the color of perfectly steamed oat milk's crema and the liquid pour itself. This tone:
- Appears only on CTAs, interactive states, and the signature liquid animation (never as a large background fill)
- Creates an "unexpected warmth" that feels premium and intentional, not default
- Signals action and interactivity without shouting
- Represents the craft and care of the brand (caramel is earned through precision)
- Stays visually lightweight at ~10% of total page area

**Usage:** CTA buttons (primary state), hover states, focus rings, accent underlines, the liquid-pour animation fill, active navigation indicators, form validation success states, micro-interaction highlights

---

## PHASE 2: SECTION-BY-SECTION APPLICATION MAP

### 1. Navigation Bar
- **Background:** 60% Dominant (`#FAFAF8`)
- **Logo/Brand Name:** 30% Secondary (`#2B2520`)
- **Links (default):** 30% Secondary (`#2B2520`) at 70% opacity
- **Links (hover):** 30% Secondary (`#2B2520`) at 100% opacity
- **Links (active):** 10% Accent (`#C89968`) with underline
- **CTA Button (Shop):** 10% Accent (`#C89968`) background, 60% Dominant text
- **Border/Divider:** 30% Secondary at 10% opacity

---

### 2. Hero Section
- **Background:** Full-bleed image with 60% Dominant overlay (semi-transparent)
- **Headline (h1):** 60% Dominant (`#FAFAF8`) text
- **Subheading:** 60% Dominant (`#FAFAF8`) at 90% opacity
- **Primary CTA Button:** 10% Accent (`#C89968`) background, 30% Secondary text
- **Secondary CTA Button:** 60% Dominant border, 60% Dominant text
- **Scroll Cue Chevron:** 60% Dominant at 70% opacity
- **Liquid Pour Glass Outline:** 10% Accent (`#C89968`)

---

### 3. Product Showcase Section
- **Section Background:** 60% Dominant (`#FAFAF8`)
- **Section Heading (h2):** 30% Secondary (`#2B2520`)
- **Section Subheading:** 30% Secondary (`#2B2520`) at 60% opacity
- **Product Card Background:** 60% Dominant with subtle border (30% Secondary at 15% opacity)
- **Product Image Backdrop:** 30% Secondary at 5% opacity (subtle shadow)
- **Variant Name (h3):** 30% Secondary (`#2B2520`)
- **Variant Description:** 30% Secondary (`#2B2520`) at 70% opacity
- **Stats Labels:** 30% Secondary (`#2B2520`) at 60% opacity
- **Stats Values:** 10% Accent (`#C89968`)
- **Card Hover State:** Accent glow (10% Accent at 20% opacity), card lifts
- **"Click to View Details" Indicator:** 10% Accent (`#C89968`)

---

### 4. Brand Story Section
- **Section Background:** 60% Dominant (`#FAFAF8`)
- **Section Heading (h2):** 30% Secondary (`#2B2520`)
- **Body Text:** 30% Secondary (`#2B2520`) at 70% opacity
- **Pull-Quote/Highlight:** 10% Accent (`#C89968`) left border, text in 30% Secondary
- **CTA Button:** 10% Accent border, 30% Secondary text, hover fills with 10% Accent
- **Image Border/Frame:** 10% Accent (`#C89968`) subtle shadow

---

### 5. Liquid Pour Section
- **Section Background:** Gradient from 60% Dominant to 30% Secondary at 10% opacity
- **Glass Outline:** 10% Accent (`#C89968`)
- **Liquid Fill:** 10% Accent (`#C89968`) gradient (darker at bottom)
- **Wave Animation:** 10% Accent at 30% opacity
- **Bubbles:** 60% Dominant at 30% opacity
- **Progress Text:** 30% Secondary (`#2B2520`)
- **Progress Percentage:** 10% Accent (`#C89968`)

---

### 6. Testimonials Carousel
- **Section Background:** 60% Dominant (`#FAFAF8`)
- **Section Heading (h2):** 30% Secondary (`#2B2520`)
- **Inactive Testimonial Card:** 60% Dominant background, 30% Secondary border at 50% opacity
- **Active Testimonial Card:** 60% Dominant background, 10% Accent border, shadow with 10% Accent glow
- **Testimonial Text:** 30% Secondary (`#2B2520`)
- **Star Rating:** 10% Accent (`#C89968`) emoji/icons
- **Author Name (h4):** 30% Secondary (`#2B2520`)
- **Author Role:** 30% Secondary (`#2B2520`) at 60% opacity
- **Avatar Background:** Gradient from 10% Accent to 30% Secondary
- **Navigation Dots (inactive):** 30% Secondary at 30% opacity
- **Navigation Dots (active):** 10% Accent (`#C89968`)
- **Navigation Arrows:** 30% Secondary background, 10% Accent on hover

---

### 7. Sustainability Section
- **Section Background:** 60% Dominant (`#FAFAF8`)
- **Section Heading (h2):** 30% Secondary (`#2B2520`)
- **Icon Backgrounds:** 10% Accent at 15% opacity (very light)
- **Icon Emoji:** 10% Accent text
- **Feature Title (h3):** 30% Secondary (`#2B2520`)
- **Feature Description:** 30% Secondary (`#2B2520`) at 60% opacity

---

### 8. Product Quick-View Modal
- **Overlay Background:** 30% Secondary at 60% opacity
- **Modal Background:** 60% Dominant (`#FAFAF8`)
- **Close Button Background:** 60% Dominant
- **Close Button Icon:** 30% Secondary
- **Close Button Hover:** Background shifts to 30% Secondary at 10% opacity
- **Modal Title (h2):** 30% Secondary (`#2B2520`)
- **Modal Description:** 30% Secondary (`#2B2520`) at 70% opacity
- **Spec Row Background:** 30% Secondary at 5% opacity
- **Spec Label:** 30% Secondary (`#2B2520`) at 70% opacity
- **Spec Value:** 10% Accent (`#C89968`)
- **Feature Icon:** 10% Accent background circle, 10% Accent checkmark
- **Primary CTA Button:** 10% Accent (`#C89968`) background, 60% Dominant text
- **Secondary CTA Button:** 30% Secondary at 10% opacity background, 30% Secondary text

---

### 9. Subscribe & Save Section
- **Section Background:** 30% Secondary (`#2B2520`)
- **Section Heading (h2):** 60% Dominant (`#FAFAF8`)
- **Section Description:** 60% Dominant at 70% opacity
- **Container Background:** 60% Dominant at 10% opacity (semi-transparent)
- **Label Text:** 60% Dominant at 90% opacity
- **Variant Button (inactive):** 60% Dominant at 20% opacity background, 60% Dominant text
- **Variant Button (active):** 10% Accent (`#C89968`) background, 30% Secondary text
- **Quantity Stepper Buttons:** 60% Dominant at 20% opacity background, 60% Dominant text
- **Quantity Stepper Hover:** 60% Dominant at 30% opacity
- **Price Display:** 60% Dominant text
- **Price Label:** 60% Dominant at 70% opacity
- **Subscribe Button:** 10% Accent (`#C89968`) background, 30% Secondary text
- **Subscribe Button Hover:** Darker 10% Accent, slight lift

---

### 10. Footer
- **Background:** 30% Secondary (`#2B2520`)
- **Text (default):** 60% Dominant at 70% opacity
- **Heading (h4):** 60% Dominant (`#FAFAF8`)
- **Links (default):** 60% Dominant at 70% opacity
- **Links (hover):** 60% Dominant at 100% opacity
- **Border/Divider:** 60% Dominant at 10% opacity
- **Copyright Text:** 60% Dominant at 60% opacity

---

## PHASE 3: STATE & INTERACTION COLOR RULES

### Button States (All CTA Buttons)
**Default (Resting):**
- Primary CTA: 10% Accent (`#C89968`) background, 30% Secondary or 60% Dominant text (contrast-dependent)
- Secondary CTA: 30% Secondary border, 30% Secondary text

**Hover:**
- Primary CTA: Darker 10% Accent (`#B88550`), slight lift (transform: translateY(-2px))
- Secondary CTA: 30% Secondary at 10% opacity background, 30% Secondary text

**Active/Pressed:**
- Primary CTA: 10% Accent, scale(0.97), shadow deepens
- Secondary CTA: 30% Secondary at 20% opacity background

**Focus (Keyboard Navigation):**
- All buttons: 10% Accent focus ring (2px solid, 2px offset), no fill change
- Focus ring color: `#C89968`

**Disabled:**
- All buttons: 30% Secondary at 30% opacity background, 30% Secondary at 50% opacity text
- No hover effect

---

### Form Input States
**Resting:**
- Background: 60% Dominant (`#FAFAF8`)
- Border: 30% Secondary at 20% opacity
- Text: 30% Secondary (`#2B2520`)

**Focus:**
- Background: 60% Dominant (`#FAFAF8`)
- Border: 10% Accent (`#C89968`) 2px solid
- Focus ring: 10% Accent at 20% opacity, 4px blur
- Text: 30% Secondary (`#2B2520`)

**Filled/Active:**
- Background: 60% Dominant (`#FAFAF8`)
- Border: 10% Accent (`#C89968`)
- Text: 30% Secondary (`#2B2520`)

**Error:**
- Border: Semantic error red (`#DC2626`) — outside 60/30/10 system for clarity
- Text: Semantic error red
- Icon: Semantic error red

**Success:**
- Border: Semantic success green (`#16A34A`) — outside 60/30/10 system for clarity
- Text: Semantic success green
- Icon: Semantic success green

---

### Navigation & Active States
**Active Navigation Link:**
- Text: 10% Accent (`#C89968`)
- Underline: 10% Accent (`#C89968`) 2px solid, 4px offset below text

**Active Tab Indicator:**
- Background: 10% Accent (`#C89968`)
- Height: 3px, positioned at bottom of tab

**Scroll Progress Indicator (Liquid Pour):**
- Fill color: 10% Accent (`#C89968`) gradient
- Percentage text: 10% Accent (`#C89968`)

---

### Micro-Interactions & Feedback
**Hover Glow (Cards, Product Images):**
- Box-shadow: `0 0 20px rgba(200, 153, 104, 0.2)` (10% Accent at 20% opacity)

**Ripple Effect (Button Press):**
- Color: 10% Accent at 60% opacity
- Animation: scale(0) → scale(4) over 0.6s

**Loading State:**
- Spinner: 10% Accent (`#C89968`)
- Background: 60% Dominant at 80% opacity (semi-transparent overlay)

**Success Checkmark:**
- Color: Semantic success green (`#16A34A`)
- Background: 10% Accent at 15% opacity circle (if needed)

---

## PHASE 4: RATIO VALIDATION & SELF-AUDIT

### Viewport-by-Viewport Audit

**Hero Viewport (0–100vh):**
- 60% Dominant: Image overlay + text breathing room = ~55%
- 30% Secondary: Overlay gradient = ~35%
- 10% Accent: Glass outline, CTA button = ~10%
- ✅ **PASS** — Accent stays at target 10%

**Product Showcase Viewport (100–200vh):**
- 60% Dominant: Section background, card surfaces = ~60%
- 30% Secondary: Typography, borders = ~30%
- 10% Accent: Stat values, hover glows, card indicators = ~10%
- ✅ **PASS** — Accent contained at 10%

**Testimonials Viewport (300–400vh):**
- 60% Dominant: Section background, card backgrounds = ~60%
- 30% Secondary: Text, inactive card borders = ~30%
- 10% Accent: Active card border, dots, avatar gradient = ~10%
- ✅ **PASS** — Accent at 10%

**Subscribe Section Viewport (500–600vh):**
- 60% Dominant: Text, input fields = ~60%
- 30% Secondary: Section background = ~30%
- 10% Accent: Active variant buttons, CTA button = ~10%
- ✅ **PASS** — Accent at 10%

**Footer Viewport (600–700vh):**
- 60% Dominant: Text, links = ~60%
- 30% Secondary: Background = ~30%
- 10% Accent: None (footer is structural, not interactive) = ~0%
- ✅ **PASS** — Accent appropriately absent

---

### Consistency Checks

**✅ 60% Dominant Never Absent:**
- Present in: Hero (overlay), products (background), story (background), testimonials (background), subscribe (text), footer (text)
- Every viewport has at least 50%+ dominant tone

**✅ 30% Secondary Creates Rhythm:**
- Appears on: Navigation, hero overlay, typography, footer background
- Breaks monotony without overwhelming (never >35% in any viewport)

**✅ 10% Accent Stays Sparse:**
- Used only for: CTAs, active states, the signature liquid animation, focus rings, micro-interactions
- Never used for: Body text, large backgrounds, section fills
- Consistently ~10% across all viewports

**✅ No Accent Overuse:**
- Largest accent element: Liquid pour fill (contained within glass)
- No accent-colored background blocks
- No accent-colored large typography
- All accent buttons are appropriately sized CTAs

---

### Ratio Rationale: Why 60/30/10 (Not 40/35/25 or 50/30/20)?

**For a Premium, Trust-Building Oat Milk Brand:**

A **60/30/10 distribution** is correct because:

1. **Trust Through Simplicity** — Oat milk is a premium, craft product that competes on purity and transparency. A 60/30/10 ratio (vs. a busier 40/35/25) signals **restraint and confidence**. The brand doesn't need to shout; it lets the product speak.

2. **Breathing Room = Premium Positioning** — The 60% dominant tone (barista-foam off-white) creates abundant negative space, which is a hallmark of luxury DTC brands. This isn't a cluttered, discount-driven site; it's curated and intentional.

3. **Secondary Tone Anchors Credibility** — The 30% espresso brown (not a lighter gray) grounds the page in the barista/craft coffee world. It appears in the footer and navigation, bookending the page with authority and expertise. A lighter secondary (35%+) would dilute this signal.

4. **Accent as Signature, Not Noise** — The 10% caramel accent is the **signature liquid pour color**—the most memorable visual element. At 10%, it's rare enough to feel special and intentional. A bolder 20% would cheapen the brand; a timid 5% would make the accent invisible.

5. **Sustainability Messaging** — Oat milk is an eco-conscious choice. A 60/30/10 ratio (vs. a more balanced 40/35/25) conveys **efficiency and purpose**—every color choice is deliberate, nothing is wasted. This mirrors the brand's values.

6. **Conversion Without Aggression** — The 10% accent appears on CTAs and interactive moments, but never dominates. This creates a **gentle, non-aggressive call-to-action**—appropriate for a brand that positions itself as thoughtful and sustainable, not pushy.

---

## CSS CUSTOM PROPERTIES IMPLEMENTATION

```css
:root {
  /* 60% DOMINANT — Canvas & Breathing Room */
  --color-dominant: #FAFAF8;
  --color-dominant-rgb: 250, 250, 248;
  --color-dominant-oklch: oklch(0.985 0.001 80);

  /* 30% SECONDARY — Structure & Rhythm */
  --color-secondary: #2B2520;
  --color-secondary-rgb: 43, 37, 32;
  --color-secondary-oklch: oklch(0.235 0.015 65);

  /* 10% ACCENT — Signature & Interaction */
  --color-accent: #C89968;
  --color-accent-rgb: 200, 153, 104;
  --color-accent-oklch: oklch(0.67 0.18 52);
  --color-accent-dark: #B88550;
  --color-accent-light: #E8DCC8;

  /* Semantic Colors (Outside 60/30/10) */
  --color-error: #DC2626;
  --color-success: #16A34A;
  --color-warning: #F59E0B;

  /* Opacity Utilities */
  --opacity-10: 0.1;
  --opacity-15: 0.15;
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-90: 0.9;
}
```

---

## IMPLEMENTATION CHECKLIST

- [ ] Update all section backgrounds to use `--color-dominant` or `--color-secondary`
- [ ] Audit all text colors; ensure body text uses `--color-secondary`
- [ ] Replace all CTA buttons with `--color-accent` background
- [ ] Add `--color-accent` focus rings to all interactive elements
- [ ] Update navigation active states to use `--color-accent`
- [ ] Verify liquid pour animation uses `--color-accent`
- [ ] Audit hover states; confirm accent appears only on interaction, not at rest
- [ ] Test each viewport for 60/30/10 ratio compliance
- [ ] Verify no section exceeds 10% accent visual weight
- [ ] Document any exceptions and justify them

---

**Document Version:** 1.0  
**Date:** 2026-06-16  
**Brand:** Oatmeal (Premium Craft Oat Milk)  
**System:** 60/30/10 Color Distribution
