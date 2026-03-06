# ULTRA Galaxy Store — Design System

A multi-brand design system extracted from three brand identities: **Cipher Digital**, **Joy Tech**, and **Telekom OT**. Fully responsive with fluid typography, rem-based spacing, and container queries.

## Quick Start

```html
<!-- Import tokens + components -->
<link rel="stylesheet" href="src/tokens/design-tokens.css">
<link rel="stylesheet" href="src/components/typography.css">
<link rel="stylesheet" href="src/components/button.css">
<link rel="stylesheet" href="src/components/card.css">
<link rel="stylesheet" href="src/components/input.css">
<link rel="stylesheet" href="src/components/layout.css">
```

## Brand Systems

| Brand | Source | Design Language | Primary Accent |
|---|---|---|---|
| **Cipher Digital** | [cipherdigital.com](https://cipherdigital.com) | Industrial hyperscale, dark theme | `#0F87FF` (Tech Blue) |
| **Joy Tech** | [playonjoy.com](https://playonjoy.com) | Retro-futuristic gaming, dark theme | `#39FF14` (Signal Lime) |
| **Telekom OT** | [telkom-ot.si](https://telkom-ot.si) | Editorial Swiss minimalism, light theme | `#FF4F33` (Constructivist Red) |

## Token Reference

### Global Spacing Scale
| Token | Value | Equivalent |
|---|---|---|
| `--spacing-1` | `0.25rem` | 4px |
| `--spacing-2` | `0.5rem` | 8px |
| `--spacing-3` | `0.75rem` | 12px |
| `--spacing-4` | `1rem` | 16px |
| `--spacing-6` | `1.5rem` | 24px |
| `--spacing-8` | `2rem` | 32px |
| `--spacing-10` | `2.5rem` | 40px |
| `--spacing-12` | `3rem` | 48px |
| `--spacing-16` | `4rem` | 64px |
| `--spacing-20` | `5rem` | 80px |
| `--spacing-24` | `6rem` | 96px |

### Fluid Typography Scale
| Token | clamp() Value |
|---|---|
| `--font-size-xs` | `clamp(0.55rem, 0.5rem + 0.1vw, 0.625rem)` |
| `--font-size-sm` | `clamp(0.6rem, 0.5rem + 0.15vw, 0.75rem)` |
| `--font-size-base` | `clamp(0.75rem, 0.65rem + 0.2vw, 0.875rem)` |
| `--font-size-md` | `clamp(0.875rem, 0.75rem + 0.25vw, 1rem)` |
| `--font-size-lg` | `clamp(1rem, 0.85rem + 0.4vw, 1.25rem)` |
| `--font-size-xl` | `clamp(1.25rem, 1rem + 0.5vw, 1.5rem)` |
| `--font-size-2xl` | `clamp(1.5rem, 1.25rem + 0.75vw, 2rem)` |
| `--font-size-3xl` | `clamp(2rem, 1.5rem + 1.5vw, 3rem)` |
| `--font-size-4xl` | `clamp(2.5rem, 2rem + 2vw, 4rem)` |
| `--font-size-display` | `clamp(3rem, 2rem + 4vw, 6rem)` |
| `--font-size-hero` | `clamp(3.5rem, 3rem + 5vw, 8rem)` |

### Per-System Tokens

<details>
<summary>Cipher Digital</summary>

| Token | Value |
|---|---|
| `--color-bg-primary` | `#000000` |
| `--color-brand-blue` | `#0F87FF` |
| `--color-status-green` | `#39FF14` |
| `--font-primary` | `'articulat-cf', 'Inter', sans-serif` |
| `--font-display` | `'articulat-cf', sans-serif` |
| `--radius-pill` | `3.125rem` |
| `--shadow-glow` | `0 0 40px rgba(15, 135, 255, 0.3)` |
</details>

<details>
<summary>Joy Tech</summary>

| Token | Value |
|---|---|
| `--color-bg-primary` | `#111111` |
| `--color-brand-lime` | `#39FF14` |
| `--font-primary` | `'Source Code Pro', monospace` |
| `--font-display` | `'Press Start 2P', cursive` |
| `--radius-*` | `0` (all zero — brutalist) |
| `--shadow-card` | `6px 6px 0 rgba(255, 255, 255, 0.1)` |
</details>

<details>
<summary>Telekom OT</summary>

| Token | Value |
|---|---|
| `--color-bg-primary` | `#FAFAFA` |
| `--color-brand-red` | `#FF4F33` |
| `--font-primary` | `'Inter', sans-serif` |
| `--radius-*` | `0` (all zero — editorial) |
| `--shadow-*` | `none` |
</details>

## Assumptions Log

| Item | Assumption | Source |
|---|---|---|
| Cipher font family | `articulat-cf` from Adobe Typekit | Confirmed via `<link>` tag in HTML |
| Joy display font | `Press Start 2P` as Twobit substitute | Closest pixel font on Google Fonts |
| Joy accent | `#39FF14` Signal Lime | Extracted from CSS computed styles |
| Telekom OT typography | Inter across all weights | Confirmed from website inspection |
| Telekom OT spacing values | Converted from pixel analysis | Measured from DOM computed styles |

## Component Library

| Component | File | Variants |
|---|---|---|
| Button | `src/components/button.css` | primary, secondary, ghost, destructive, sm/lg, pill, icon |
| Card | `src/components/card.css` | default, elevated, interactive, flush; header/body/footer slots |
| Input | `src/components/input.css` | text, textarea, select; sm/lg; error state; label + helper |
| Typography | `src/components/typography.css` | hero→h6 headings, body-lg/md/sm, label, caption, mono |
| Layout | `src/components/layout.css` | container (sm→full), grid (auto/2/3/4), stack, cluster, sidebar |

## Responsive Behavior

All sizing is inherently responsive:

- **Root font** scales from `14px` (320px viewport) to `18px` (2560px viewport) via `clamp()`
- **All `rem` values** scale proportionally with the root
- **Typography** uses `clamp()` with viewport-relative preferred values
- **Grids** use `repeat(auto-fit, minmax())` — no media queries needed
- **Container queries** enable components to adapt to their parent width
- **No fixed `px` widths** on any layout element

Tested at: 320px, 768px, 1024px, 1440px, 1920px, 2560px viewports and 50%–200% browser zoom.

## Repository Structure

```
├── design-tokens.css              # Root-level tokens (legacy)
├── src/
│   ├── tokens/
│   │   └── design-tokens.css      # Canonical token file
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── input.css
│   │   ├── typography.css
│   │   └── layout.css
│   ├── shared/
│   │   └── brand-guidelines.css   # Shared template for View System pages
│   └── integrations/
│       ├── design-system/         # Cipher Digital
│       ├── joy/                   # Joy Tech
│       └── telekom-ot/            # Telekom OT
├── style.css                      # Storefront styles
├── components.js                  # SystemCard web component
├── script.js                      # Theme toggle + Apply System
└── index.html                     # Entry point
```

## Live

**Production:** https://ultra-galaxy-store.vercel.app
