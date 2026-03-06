# Changelog

All notable changes to this design system are documented in this file.

## [1.0.0] — 2026-03-06

### Brand Analysis (Phase 1)
- **Extracted:** Cipher Digital design tokens from [cipherdigital.com](https://cipherdigital.com)
  - Colors: `#000000` (base), `#0F87FF` (blue), `#39FF14` (green)
  - Typography: `articulat-cf` (Typekit), semibold/medium weights
  - Radii: 2px structural, 50px pill CTAs
  - Shadows: Blue glow `0 0 40px rgba(15,135,255,0.3)`

- **Extracted:** Joy Tech design tokens from [playonjoy.com](https://playonjoy.com)
  - Colors: `#111111` (base), `#39FF14` (lime), `#CCFF00` (alt lime)
  - Typography: `Source Code Pro` (body), `Press Start 2P` (display)
  - Radii: 0 everywhere (brutalist)
  - Shadows: Hard box-shadow `6px 6px 0`

- **Extracted:** Telekom OT design tokens from [telkom-ot.si](https://telkom-ot.si)
  - Colors: `#FAFAFA` (base), `#FF4F33` (red), `#1A1A1A` (dark)
  - Typography: `Inter` across all weights
  - Radii: 0 everywhere (editorial)
  - Shadows: None

- **Created:** `src/tokens/design-tokens.css` — ~100 CSS custom properties

### Responsive Optimization (Phase 2)
- Added fluid root `font-size: clamp(0.875rem, 0.7rem + 0.5vw, 1.125rem)` to all stylesheets
- Converted all `px` font sizes to `clamp()` expressions
- Converted all `px` spacing to `rem` units
- Replaced fixed-width containers with fluid `max-width` and `auto-fit` grids
- Added `container-type: inline-size` on storefront grid and spec grids
- Verified viewport meta tags in all HTML entry points

**Files modified:** `style.css`, `brand-guidelines.css`, `components.js`, `design-system/style.css`, `joy/style.css`, `telekom-ot/style.css`

### Component Scaffolding (Phase 3)
- **Created:** `src/components/button.css` — primary, secondary, ghost, destructive, sizes, pill
- **Created:** `src/components/card.css` — header/body/footer, elevated, interactive, container query
- **Created:** `src/components/input.css` — text, textarea, select, error states, labels
- **Created:** `src/components/typography.css` — hero→h6 headings, body sizes, utilities
- **Created:** `src/components/layout.css` — container, grid, stack, cluster, sidebar, divider

### Documentation (Phase 4)
- **Created:** `README.md` with token reference, assumptions, usage instructions
- **Created:** `CHANGELOG.md` (this file)

### Additional Changes
- Fixed light/dark mode toggle logic in `script.js`
- Expanded Apply System font coverage to all UI elements
- Rebuilt Cipher Digital reconstruction page from website research
- Rebuilt Joy Tech reconstruction page from website research
- Switched View System pages to Inter font defaults (brand fonts only in specimens)
