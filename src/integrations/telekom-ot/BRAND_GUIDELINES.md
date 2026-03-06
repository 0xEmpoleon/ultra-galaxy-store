# Telekom OT Brand Guidelines & Tokens

## Brand Identity Overview
Telekom OT (Telkom-OT d.o.o.) is a Slovenian precision tooling and engineering company specializing in die-casting molds, injection molds, and complex industrial tooling for the automotive and electrical industries. The visual identity is defined by a brutalist-industrial aesthetic: sharp edges, high-contrast light/dark section alternation, monospace technical labeling, and vibrant red accent elements. The site was designed by [.raw](https://www.rawlab.co/) and built on Webflow.

**Original Source:** [https://telkom-ot.si/](https://telkom-ot.si/)

## 1. Design Tokens: Colors

| Token | Hex | Usage |
|---|---|---|
| **Brand Primary (Red-Orange)** | `#FF4F33` | CTAs, buttons, section labels, decorative corner brackets, hover states |
| **Background Light** | `#F2F2F2` | Primary background for light content sections |
| **Background Dark** | `#000000` | Background for dark contrast sections |
| **Background Dark Alt** | `#1A1A1A` | Subtle dark variation for depth |
| **Text Primary (Dark)** | `#1A1A1A` | Body/heading text on light backgrounds |
| **Text Secondary** | `#666666` | Muted body text on light backgrounds |
| **Text Inverse (White)** | `#FFFFFF` | Text on dark backgrounds |
| **Text Muted Inverse** | `#999999` | Subdued text on dark backgrounds |
| **Border Light** | `rgba(0,0,0,0.15)` | Thin dividers, navigation segments (light mode) |
| **Border Dark** | `rgba(255,255,255,0.15)` | Thin dividers (dark mode) |

### Special Decorative Element: Corner Brackets
Red `L-shaped` corner brackets (`#FF4F33`, 2px thick, ~40px arm length) frame key content sections. They appear at opposite corners (top-left + bottom-right or all four corners) to create a "technical specification" framing effect.

## 2. Design Tokens: Typography

### Fonts
| Font | Classification | Source | Usage |
|---|---|---|---|
| **Aeonik Pro** | Geometric Sans-Serif | Self-hosted (AeonikPro-Regular.ttf) | Primary: Headings, body text, statements |
| **SF Mono** | Technical Monospace | Self-hosted (SFMono-Medium.otf) | Secondary: Navigation labels, section numbers (e.g., "1.0 ORODJA") |

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | 56px | 400 | 1.1 | Statement paragraphs |
| H1 | 38px | 400–700 | 1.1 | Hero headings |
| H2 | 32px | 700 | 1.2 | Section headings |
| H3 | 24px | 700 | 1.3 | Sub-section headings |
| Body | 14–16px | 400 | 1.5–1.75 | Paragraphs |
| Label | 11–14px | 500 | 1.2 | Navigation, technical labels (SF Mono, uppercase, wide spacing) |

### Text Transform
- Navigation labels: `uppercase` + `letter-spacing: 0.15em` (SF Mono)
- Section headers in red: `uppercase` (SF Mono)

## 3. Design Tokens: Spacing & Layout

### Grid System
- **Max Width:** 1440px (centered)
- **Section Padding:** 120px vertical, 40px horizontal
- **Content Sections:** Alternating light (#F2F2F2) and dark (#000000) backgrounds
- **Two-Column Layout:** Text (left, ~40%) + 3D Asset (right, ~60%)

### Navigation
- **Height:** 70px
- **Style:** Segmented horizontal bar with thin 1px borders between sections
- **Labels:** Monospace numbered format: `[1.0 ORODJA] | [2.0 IZDELKI] | ...`
- **CTA:** Red pill-button "KONTAKT" at the far right

### Breakpoints
| Breakpoint | Width | Behavior |
|---|---|---|
| Desktop | >1024px | Full horizontal nav, two-column sections |
| Tablet | 768–1024px | Stacked layout, simplified nav |
| Mobile | <768px | Floating bottom hamburger menu, fully stacked content |

## 4. Design Tokens: Structure & Effects

### Border Radii
- **All elements:** `0px` (brutalist/industrial — no rounded corners anywhere)
- **Exception:** KONTAKT button uses a slight pill radius at nav level

### Shadows
- **None.** The design relies on contrast and color differences rather than elevation.

### Transitions
- **Standard:** `0.4s cubic-bezier(0.25, 0.1, 0.25, 1)` — Smooth scroll-triggered reveals
- **Fast:** `0.2s ease` — Hover states

### 3D Models
- The site uses `<model-viewer>` elements (Google's model-viewer.min.js) for interactive 3D renders of industrial tooling
- Models are displayed on both light and dark backgrounds with rotating interaction

## 5. Component Patterns

### Hero Section
- Full-viewport height with wireframe 3D background
- Large centered statement text (Aeonik Pro, ~38px)
- Red downward arrow scroll prompt

### Content Sections
- Alternate between light and dark backgrounds
- Two-column: Text (left) + Large 3D render (right)
- Red monospace label at top (e.g., "KOMPLEKSNE KONSTRUKCIJE")
- Body paragraph below the label

### Footer
- Black background
- Contact information (phone, email)
- Navigation links
- Language selector (SLO / EN / DE)
- "Designed by .raw" credit

### Buttons
- **Primary CTA:** `background: #FF4F33`, `color: #FFFFFF`, `padding: 9px 15px`, `border-radius: 0`, `text-transform: uppercase`
- **Navigation CTA (KONTAKT):** Red background with rounded border

## 6. Responsive Behavior

### Mobile
- Navigation switches to a floating bottom-center hamburger button
- Full-screen navigation overlay with large numbered links
- Content sections stack fully vertical
- 3D models scale down but remain interactive

### Tablet
- Simplified two-column or stacked layout
- Navigation may condense

## 7. Animation & Interaction Guidelines

- **Scroll Reveals:** Text and 3D models animate in on scroll (opacity + mild translateY)
- **3D Interaction:** Model-viewer elements respond to touch/drag
- **Hover States:** Buttons shift from `#FF4F33` to slightly darker on hover
- **Navigation Transitions:** Smooth border/opacity transitions on nav items

---

## Technical Codification Draft (CSS Variables)
```css
:root {
  /* Colors */
  --color-brand-red: #FF4F33;
  --color-bg-light: #F2F2F2;
  --color-bg-dark: #000000;
  --color-bg-dark-alt: #1A1A1A;
  --color-text-dark: #1A1A1A;
  --color-text-muted: #666666;
  --color-text-light: #FFFFFF;
  --color-text-muted-light: #999999;
  --color-border-light: rgba(0,0,0,0.15);
  --color-border-dark: rgba(255,255,255,0.15);
  --color-bracket: #FF4F33;

  /* Typography */
  --font-primary: 'Aeonik Pro', sans-serif;
  --font-technical: 'SF Mono', 'SFMono-Regular', monospace;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --section-padding: 120px 40px;
  --nav-height: 70px;
  --max-width: 1440px;

  /* Radii */
  --radius: 0px;

  /* Transitions */
  --transition-standard: 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  --transition-fast: 0.2s ease;
}
```
