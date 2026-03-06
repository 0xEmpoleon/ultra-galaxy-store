# JOY Design System Guidelines & Tokens

## Brand Identity Overview
The canonical visual identity reference for JOY (Joy Tech). This UI library embodies the technical credibility, community-first energy, and hardware-meets-Web3 precision of the JOY ecosystem.

**Original Source:** [https://design-system-eight-henna.vercel.app/](https://design-system-eight-henna.vercel.app/)

## 1. Design Tokens: Colors
A dual-base system of Soft Dark and Circuit Grey provides the foundation. Signal Lime acts as the singular high-impact action colour.

*   **Primary Background:** `#111111` (Soft Dark)
*   **Secondary Background:** `#222222` (Circuit Grey)
*   **Brand Action (Accent):** `#39FF14` (Signal Lime)
*   **Text/Icons:** `#ffffff` (White), `#aaaaaa` (Light Grey)

## 2. Design Tokens: Typography
Source Code Pro acts as the core workhorse. Twobit is reserved strictly for exceptional display pops and Easter eggs.

### Type Hierarchy
*   **Primary Font (Headlines & Body):** "Source Code Pro", monospace
    *   *Classification:* Geometric Monospace
    *   *Sourcing:* Google Fonts API
*   **Display Font (Pops & Easter Eggs):** "Twobit" or fallback pixel/display font.

## 3. Product & Mascot (Genesis Renders)
*   Always display Genesis renders on Soft Dark backgrounds.
*   Do not add drop shadows directly to the render files.
*   **Partner Node:** Somnia Network
*   **Partner Node:** Moonbeam
*   **Software Overlay:** JOY Store (Hyperplay)

---

## Technical Codification Draft (CSS Variables)
```css
:root {
  /* Colors */
  --color-joy-bg: #111111;
  --color-joy-grey: #222222;
  --color-joy-lime: #a3ff00; /* Signal Lime */
  --color-joy-lime-hover: #8ce600;
  
  --color-text-primary: #ffffff;
  --color-text-secondary: #aaaaaa;
  
  /* Typography */
  --font-family-primary: 'Source Code Pro', monospace;
  --font-family-display: 'Twobit', 'Press Start 2P', cursive;
  
  /* Radii - Industrial sharp edges */
  --radius-sm: 0;
  --radius-md: 2px;
}
```
