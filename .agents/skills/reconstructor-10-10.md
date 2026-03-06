---
name: design-system-reconstruction-10-10
description: Codified procedure for 10/10 "Steakhouse Standard" frontend reconstruction. Implements pixel-perfect parity with fluid typography, professional micro-interactions, and institutional SVG data-viz.
---

# Reconstruction Grade: 10/10 — The Steakhouse Standard

The goal of this skill is to take Phase 1 (Extraction) data and generate a working integration that is **visually indistinguishable** from the source.

## 1. The Fluid Typography Engine
Use `clamp()` for all font sizes to ensure a smooth transition between mobile and desktop without rigid breakpoints.
```css
font-size: clamp(2.5rem, 8vw, 6.5625rem);
```

## 2. Institutional SVG Visualization
Never use PNG screenshots for data charts. Reconstruct them using clean, standard-compliant SVG code:
- **Donut Charts**: Use `stroke-dasharray` and `stroke-dashoffset`.
- **Line Graphs**: Use `<path>` elements.
- **Legends**: Mirror the typography and bullet alignment exactly.

## 3. Micro-Interaction Polish
A 10/10 reconstruction "feels" right. Implement:
- **Active States**: Subtle `scale(0.98)` on buttons.
- **Hover Transitions**: 250ms ease-in-out on card backgrounds.
- **Glassmorphism**: Use `backdrop-filter: blur(12px)` and translucent borders (`rgba(255, 255, 255, 0.1)`).

## 4. Mobile Responsiveness (iOS Standard)
iOS Safari has unique rubber-banding and gutter behaviors.
- **Width Stability**: Use `width: 100%; max-width: 100vw; overflow-x: hidden;` on the `html` and `body` tags.
- **Background Sync**: Ensure the body background matches the hero or applied system theme to prevent "white gutters" during scroll.

## 5. Deployment & Vercel
Always verify the build locally before pushing. Use `vercel --prod` to ensure the production environment mirrors the local fidelity.
