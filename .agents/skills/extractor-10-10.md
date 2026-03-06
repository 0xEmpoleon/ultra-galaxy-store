---
name: design-system-extraction-10-10
description: Codified procedure for 10/10 "Steakhouse Standard" design system extraction. Capture pixel-perfect DOM, CSS, assets, and typography from any live institutional site.
---

# Extraction Grade: 10/10 — The Steakhouse Standard

This skill is the first phase of the **ULTRA Reconstruction Engine**. It focuses on the absolute technical capture of a source brand.

## 1. Multi-Viewport Ground Truth
Extracting a design system requires more than a single glance. You MUST capture the following states:
- **Desktop (1920px)**: The master institutional layout.
- **Mobile (390px)**: The responsive logic and fluid scaling boundaries.
- **Dark/Light Modes**: Switch the browser preference or interact with toggles to capture both token sets.

## 2. Technical Token Extraction (The "Brain" Files)
Do not approximate. Use these specific browser commands to generate the `_raw/` data:

- **Colors**: Search for `:root` variables first. If absent, sample computed styles from the Hero, Primary Buttons, and Cards.
- **Typography**: Check for Google Fonts or Typekit links. Extract `font-family`, `font-weight`, and `line-height` from `h1` and `p`.
- **Spacing**: Identify the grid (e.g., 4px or 8px base). Document section paddings.

## 3. Asset Mirroring (100% Parity)
- **Logos**: Always extract the SVG source if possible. If not, use high-res PNGs. 
- **Icons**: Locate the icon set (e.g., FontAwesome, Phosphor) or copy the inline SVG paths.
- **Textures**: Look for `background-image` properties on sections. A 10/10 reconstruction requires the "noise", "grain", or "grid" overlays (e.g., the Steakhouse dot-grid).

## 4. Logical Deliverables
Save all data to the `src/integrations/[name]/_raw/` folder:
- `tokens.json`: The raw color/type dictionary.
- `dom-snapshot.html`: The structural skeleton.
- `assets/`: The folder containing all mirrored images/SVGs.

> [!IMPORTANT]
> A reconstruction is only 10/10 if the `_raw` data is sufficient to build the site *without* re-opening the live URL.
