# CoLab Communications Brand Guidelines & Tokens

## Brand Identity Overview
CoLab Communications embraces a warm, editorial aesthetic that balances approachability with clarity. The color palette relies on a soft ‘Alabaster’ background, grounded by deep ‘Ebony’ text, and highlighted by pastel ‘Violet’ and ‘Melon’ accents.

**Original Source:** [colabcomms.co](https://www.colabcomms.co/)

## 1. Design Tokens: Colors
| Token | Hex | Role |
| :--- | :--- | :--- |
| `color-brand-snow` | `#FFFAFC` | Pure highlight / Inverted Text |
| `color-brand-alabaster` | `#F5F2E8` | Primary Warm Background |
| `color-brand-ebony` | `#180F26` | Deep off-black for text & inverted surface |
| `color-brand-violet` | `#C3A0FA` | Primary Pastel Accent |
| `color-brand-melon` | `#F8B5AF` | Secondary Pastel / Active State |

## 2. Design Tokens: Typography
- **Primary Font**: PP Neue Montreal (fallback: sans-serif)

## 3. Aesthetic Vibe
- Soft, inviting contrast (Alabaster vs Ebony)
- Clean, brutalist-lite typography structure (large display headers)
- Ample negative space focusing on text content over boundaries.

---

## Technical Codification Draft (CSS Variables)
```css
:root {
    --sys-bg-main: #F5F2E8;
    --sys-text-primary: #180F26;
    --sys-text-secondary: rgba(24, 15, 38, 0.6);
    --sys-border: rgba(24, 15, 38, 0.1);
    --sys-accent: #C3A0FA;
    
    --font-primary: 'PP Neue Montreal', 'Inter', sans-serif;
}
```
