# Cipher Digital Brand Guidelines & Tokens

## Brand Identity Overview
Cipher Digital represents advanced compute and next-generation data centers. The aesthetic relies on high contrast, technical precision, and modern typography suitable for an industrial-scale technology infrastructure company. 

## 1. Design Tokens: Colors
The palette leans heavily on absolute contrasts (Black/White), a deep space/technical "Brand" color, a distinct "Green" for success/action, and specific grays.

*   **Primary Background:** `#ffffff` (White - Light Mode) / `#000000` (Black - Dark Mode)
*   **Brand Primary (Accent):** `#0082f3` (Vibrant Tech Blue) and `#0f87ff` (Lighter Tech Blue)
*   **Brand Action/Highlight:** `var(--_colors---all--green)` (Technical Green, likely `#00FFCC` or `#39FF14` mapping conceptually)
*   **Secondary/Tertiary Accents:**
    *   `#ea384c` / `#e31700` (Red/Error)
    *   `#3898ec` (Soft Blue)
    *   `#ff0062` (Pink/Magenta - Potential highlight)
*   **Neutrals:** `#222222`, `#2c2c2c`, `#333333`, `#999999`, `#c8c8c8`, `#dddddd`, `#eeeeee`, `#efeeec`, `#fafafa`

## 2. Design Tokens: Typography
The font stack relies on the Adobe Typekit font **Articulat CF** for a modern, geometric sans-serif look.

*   **Primary Font Family:** "articulat-cf", sans-serif
*   **Fallback Stack:** Arial, Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif
*   **Weights Used:** 500 (Medium) and 600 (Semi-Bold)
*   **Styles Used:** Normal and Italic

## 3. Design Tokens: Structure & Effects

*   **Border Radii:** 
    *   `0.125rem` (2px) - Sharp
    *   `0.25rem` (4px) - Buttons/Small Elements
    *   `0.5rem` (8px) - Inputs/Cards
    *   `0.75rem` (12px) - Soft Cards
    *   `50%` / `100%` - Pills/Circles
*   **Transparency/Glass:** Heavy use of alpha-channel blacks and whites (e.g., `#0000003d`, `#00000008`, `#ffffffb3`, `#ffffff1f`) to create glassmorphism and depth atop backgrounds.

---

## Technical Codification Draft (CSS Variables)
```css
:root {
  /* Colors */
  --color-brand-blue: #0f87ff;
  --color-brand-blue-dark: #0082f3;
  --color-brand-green: #39FF14; /* Inferred technical green */
  --color-brand-red: #ea384c;
  
  --color-bg-primary: #000000;
  --color-bg-secondary: #222222;
  --color-bg-tertiary: #333333;
  
  --color-text-primary: #ffffff;
  --color-text-secondary: #999999;
  --color-text-tertiary: #aaadb0;
  
  --color-surface-glass-dark: rgba(0, 0, 0, 0.4);
  --color-surface-glass-light: rgba(255, 255, 255, 0.12);
  
  /* Typography */
  --font-family-primary: 'articulat-cf', sans-serif;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  
  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-pill: 50%;
}
```
