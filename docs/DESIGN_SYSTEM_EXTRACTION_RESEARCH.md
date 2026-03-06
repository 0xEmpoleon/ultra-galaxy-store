# Design System Extraction — Research & Architecture

> Research findings on optimal methods for AI agents to extract, codify, and deploy design systems from external websites and brand materials.

---

## 1. Problem Statement

When onboarding a new brand or external website into the ULTRA Galaxy Store, the current process is manual:
1. Visit the website, visually inspect it.
2. Manually note colors, fonts, spacing.
3. Write a `BRAND_GUIDELINES.md` by hand.
4. Hand-code a `style.css` and `index.html`.

This is slow, error-prone, and doesn't scale. We need an automated agent pipeline that can accept a URL or screenshot as input and produce a complete, deployable design system integration as output.

---

## 2. Research Findings

### 2a. CSS Extraction (Programmatic)

**Best Approach:** Use a headless browser (via `browser_subagent`) to load the target site and execute JavaScript directly in the DOM to extract:

- **All CSS Custom Properties** from `:root` and other selectors.
- **Computed styles** from key semantic elements (`body`, `h1`–`h6`, `a`, `button`, `nav`).
- **External stylesheet URLs** for deeper parsing.
- **Font `<link>` tags** for Google Fonts / Typekit identification.

**Why this works:** Computed styles give us the *actual rendered values* regardless of how the CSS is authored (preprocessors, frameworks, etc.). This eliminates the need to parse Sass/Less/Tailwind source.

**Key tools identified:**
- `getComputedStyle()` — Native browser API, zero dependencies.
- `document.styleSheets` — Access to all loaded CSS rules.
- Style Dictionary (Amazon) — Industry-standard token transformation tool.

### 2b. Visual Analysis (Screenshot-Based)

**Best Approach:** For sites that heavily use images, SVGs, or canvas-rendered content, supplement CSS extraction with screenshot analysis.

**Capabilities:**
- Color palette extraction from screenshots using dominant color algorithms.
- Font identification from rendered text (cross-referencing with Google Fonts API).
- Layout pattern recognition (grid vs. flex, sidebar vs. full-width).

**Key tools identified:**
- Codia AI, screen.to.design — Convert screenshots to editable design files.
- Screenshot to Code — Open-source tool for HTML/CSS generation from images.
- Builder.io Fusion — Generates code using existing design system components.

### 2c. Token Structuring (JSON Schema)

**Industry Standard:** The W3C Design Tokens Community Group has established a format for interoperable design tokens. Our schema follows this pattern:

```json
{
  "$schema": "design-tokens-v1",
  "meta": { "name": "...", "source": "...", "version": "1.0.0" },
  "color": { ... },
  "typography": { ... },
  "spacing": { ... },
  "radii": { ... },
  "effects": { ... }
}
```

**Why JSON over raw CSS:** JSON is machine-readable and can be transformed into CSS, Sass, Swift (iOS), Kotlin (Android), or any other platform format. It serves as the single source of truth.

### 2d. Mock Website Generation

**Best Approach:** After tokens are structured, generate a complete `index.html` + `style.css` pair that:
1. Declares all tokens as CSS Custom Properties.
2. Implements the type scale and color system.
3. Recreates the source website's *visual language* (not a pixel-perfect clone).
4. Includes responsive breakpoints.

**Key insight:** The mock site should demonstrate the design system through real components (hero sections, cards, buttons, navigation), not just display swatches. This makes the system immediately usable and testable.

---

## 3. Recommended Architecture

### Pipeline: Crawl → Extract → Generate

```
┌─────────────────────────────────────────────────────┐
│  INPUT                                               │
│  ├── URL (primary)                                   │
│  ├── Screenshot (secondary)                          │
│  └── Brand PDF (tertiary)                            │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│  PHASE 1: CRAWL & CAPTURE                            │
│  ├── Load URL in headless browser                    │
│  ├── Capture desktop + mobile screenshots            │
│  ├── Extract CSS rules via document.styleSheets      │
│  ├── Extract computed styles via getComputedStyle()  │
│  └── Identify font sources (Google Fonts, Typekit)   │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│  PHASE 2: EXTRACT & TOKENIZE                        │
│  ├── Parse & categorize colors                       │
│  ├── Parse & categorize typography                   │
│  ├── Parse spacing, radii, effects                   │
│  ├── Generate tokens.json (W3C-aligned schema)       │
│  └── Map 3D visualization tokens                    │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│  PHASE 3: GENERATE & BUILD                           │
│  ├── Write BRAND_GUIDELINES.md                       │
│  ├── Generate style.css (CSS Custom Properties)      │
│  ├── Scaffold index.html (mock website)              │
│  ├── Register <system-card> in storefront            │
│  └── Add token map to script.js DESIGN_SYSTEMS       │
└──────────────┬──────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────┐
│  OUTPUT                                              │
│  ├── src/integrations/[name]/BRAND_GUIDELINES.md     │
│  ├── src/integrations/[name]/tokens.json             │
│  ├── src/integrations/[name]/style.css               │
│  ├── src/integrations/[name]/index.html              │
│  └── Updated storefront (index.html + script.js)     │
└─────────────────────────────────────────────────────┘
```

---

## 4. Integration with ULTRA Galaxy Store

Each extracted design system becomes a **Node** in the storefront. The integration points are:

| File | Change |
|---|---|
| `index.html` | Add `<system-card>` tag with name, accent, font, link |
| `script.js` | Add entry to `DESIGN_SYSTEMS` JSON map with all `--sys-*` tokens |
| `style.css` | No changes needed (token-driven architecture) |
| `src/integrations/[name]/` | New directory with 3-4 files |

### Token-to-Storefront Mapping

The `tokens.json` maps directly to the `DESIGN_SYSTEMS` JavaScript object:

```
tokens.json                    →  script.js DESIGN_SYSTEMS[name]
─────────────────────────────────────────────────────────────────
color.bg.primary               →  --sys-bg-main
color.text.primary             →  --sys-text-primary  
color.text.secondary           →  --sys-text-secondary
color.brand.primary            →  accent attribute + --sys-accent-shadow
typography.font.primary        →  --sys-font-primary
typography.font.display        →  --sys-font-display
3d.mesh-color                  →  --sys-3d-color
3d.edge-color                  →  --sys-3d-edge
```

---

## 5. Limitations & Mitigations

| Limitation | Mitigation |
|---|---|
| CORS blocks CSS extraction on some CDNs | Use browser DevTools extraction instead |
| Custom fonts may not be freely available | Identify closest Google Fonts alternative |
| Dynamic/JS-rendered content may not expose CSS | Use computed styles as fallback |
| Brand PDFs are unstructured | Focus on visual analysis + manual annotation |
| Color values may vary (hex vs rgb vs hsl) | Normalize all values to hex in tokens.json |

---

## 6. Future Enhancements

1. **Figma Plugin Integration**: Connect to Figma API to pull design tokens directly from design files.
2. **Automated WCAG Validation**: Run contrast ratio checks on all color pairings during extraction.
3. **Multi-Page Analysis**: Crawl multiple pages to capture the full breadth of a design system.
4. **Token Diffing**: Compare extracted tokens against previous versions to detect brand updates.
5. **Component Library Generation**: Beyond mock websites, generate a reusable component library.
