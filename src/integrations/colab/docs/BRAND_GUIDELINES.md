# CoLab Communications // Brand Guidelines

> **System Version:** 1.0.1  
> **Extraction Level:** 1:1 Reconstruction Grade  
> **Source:** [colabcomms.co](https://www.colabcomms.co/)

## Core Aesthetic & Philosophy
The **CoLab** design system champions a bold, editorial layout fueled by striking typographic contrast and confident use of negative space. It relies on a warm **Alabaster** foundation, cut by sharp **Ebony** text, and accented with playful **Violet** and **Melon** tones.

---

## 1. Color System
The color palette uses distinct branded hues to create depth without relying heavily on borders.

### Brand Colors
| Token | Hex | Role |
| :--- | :--- | :--- |
| `--sys-bg-main` | `#F5F2E8` | **Alabaster** - The primary warm background surface. |
| `--bi-bg` | `#FFFAFC` | **Snow** - Secondary crisp background or highlight surface. |
| `--sys-text-primary` | `#180F26` | **Ebony** - High-contrast text and inverted surfaces. |
| `--sys-text-secondary` | `rgba(24,15,38,0.6)` | **Ebony (60%)** - Muted text and metadata. |
| `--sys-accent` | `#C3A0FA` | **Violet 200** - Primary interaction and call-to-action color. |
| `color.brand.secondary` | `#F8B5AF` | **Melon** - Secondary accent and warning states. |

### Semantic & UI Colors
- **Borders/Dividers:** `rgba(24,15,38,0.1)` (10% Ebony opacity)
- **Glass/Overlays:** Ebony at 20% opacity (`rgba(24,15,38,0.2)`) and Alabaster at 20% opacity.

---

## 2. Typography System
The system is built on a pairing of a sans-serif body font with a condensed serif display font, giving it a modern magazine feel.

### Font Families
- **Primary / Body:** `PP Neue Montreal` (Fallback: Arial, sans-serif)
- **Display / Headers:** `Roslindale Condensed` (Fallback: Times New Roman, serif)
- **Mono / Meta:** `IBM Plex Mono` (Fallback: monospace)

### Type Scale (Fluid)
The site extensively uses `clamp()` to ensure perfect proportional scaling across all viewports.
- **Display Large**: `clamp(4.5rem, 3.8rem + 3.5vw, 8rem)`
- **Display Base**: `clamp(3rem, 2.4rem + 3vw, 6rem)`
- **H1**: `clamp(2.5rem, 2.1rem + 2vw, 4.5rem)`
- **H2**: `clamp(2rem, 1.7rem + 1.5vw, 3.5rem)`
- **Body Large**: `1.125rem`
- **Body Base**: `1rem`
- **Meta/Small**: `0.875rem`

---

## 3. Structural Guidelines
- **Spacing:** Built on a fluid scalar system ranging from `0.5rem` to `6rem`.
- **Radii:** UI elements prefer rounded pill shapes (`3rem` or `100vw`) for buttons, while image containers remain sharp (`0`).
- **Layout:** Heavy reliance on max-width containers (`120rem`) and flexbox for horizontal scrolls and sticky sections.
- **Interactions:** Standard transitions use a snappy ease curve `cubic-bezier(0.165, 0.84, 0.44, 1)` at `0.5s`.
