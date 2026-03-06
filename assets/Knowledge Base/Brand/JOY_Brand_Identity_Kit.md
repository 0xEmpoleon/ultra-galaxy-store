# JOY Brand Identity Kit

> **Purpose:** This document is the canonical visual identity reference for JOY (Joy Tech). Use it alongside `JOY_Tech_Brand_Context.md` to inform all design, content, and creative work. It covers colour, typography, logo usage, mascot, and product visuals.

---

## Brand Colours

Three colours define the JOY visual system. They are used across all product and marketing materials and should never be substituted or approximated.

| Name | Hex | Role |
|---|---|---|
| **Soft Dark** | `#242424` | Primary dark background; default dark surface |
| **Base Light / Circuit Grey** | `#E0E0E0` | Primary light background; default light surface / secondary text |
| **Signal Lime** | `#EDFFAD` | Primary accent; CTAs, highlights, active states |

### Colour Usage Rules

- A dual-base system of **Soft Dark** (`#242424`) and **Base Light** (`#E0E0E0`) provides the foundation. Choose the base that best fits the contextual mode (dark mode vs. light mode).
- **Signal Lime** is the action colour. Use it for key highlights, call-to-action buttons, interactive states, and brand pops. It should be used sparingly — its impact comes from stark contrast.
- On dark mode, **Circuit Grey (`#E0E0E0`)** acts as your reading texture: body text, secondary UI elements, borders, and metadata.
- Avoid placing Signal Lime on light grey backgrounds unless the contrast is intentionally structured to be legible.
- White (`#FFFFFF`) may be used for body copy on Soft Dark if necessary.

---

## Typography

JOY uses Source Code Pro as its core workhorse for both display and body copy, reserving Twobit strictly for dramatic, high-impact brand expression.

### Source Code Pro — Headings, Body & UI (Primary)

- **Style:** Variable-weight geometric monospace
- **Weights available:** ExtraLight through Black (variable axis), plus static TTF files for each weight; italic variants included
- **File format:** Variable TTF (+ static TTFs)
- **CDN:** Available on Google Fonts — `family=Source+Code+Pro:ital,wght@0,200..900;1,200..900`
- **Usage:** All headings (SemiBold), Body copy (Regular), product descriptions, UI labels, form fields, data readouts
- **Character:** Clean, technical, precise — communicates the engineering credibility behind JOY's hardware and blockchain infrastructure

### Twobit — Exceptional Display Only

- **Style:** Retro-digital pixel-inspired display typeface
- **Weights available:** Regular, Italic, Bold, Bold Italic
- **File format:** OTF
- **Usage:** Rarely used. Reserved strictly for dramatic effect, Easter eggs, or highly specific gaming callouts. Do not use if not directly relevant to the creative impact.
- **Notes:** Never use for standard headings, body copy, or functional UI.

### Type Pairing Examples

```
HEADLINE IN SOURCE CODE PRO        ← Source Code Pro SemiBold, large
Subheading or product name         ← Source Code Pro Medium
Body text uses Source Code Pro     ← Source Code Pro Regular
KEY STAT OR CALLOUT                ← Source Code Pro Bold, Signal Lime
ui label / metadata                ← Source Code Pro Light, small
# TWOBIT DRAMATIC POP              ← Twobit Bold, (rare usage only)
```

---

## Logo System

JOY has three logo variants, each in four colour configurations. All logo files are PNG with transparency and should be placed on Soft Dark or Base Light backgrounds depending on the contextual mode.

### Logo Variants

#### 1. Logomark Only (`Joy_Logo_1–4.png`)
- The standalone JOY icon/symbol without wordmark
- Use for: app icons, favicons, profile pictures, watermarks, embossed/embroidered applications, small-format usage where wordmark would be illegible
- Files: `Joy_Logo_1.png` through `Joy_Logo_4.png`

#### 2. Logomark + Mouse/Controller (`Joy_Logo_Mouse_1–4.png`)
- The JOY icon combined with a gaming peripheral motif (mouse/controller element)
- Use for: gaming-focused contexts, hardware marketing, gaming community materials, Discord/community assets
- Files: `Joy_Logo_Mouse_1.png` through `Joy_Logo_Mouse_4.png`

#### 3. Logo + Wordmark (`Joy_Logo_Text_1–4.png`)
- The full lockup: icon plus the "JOY" wordmark
- Use for: primary brand applications, website headers, presentation title slides, co-branding, press materials, any context where brand recognition is the priority
- Files: `Joy_Logo_Text_1.png` through `Joy_Logo_Text_4.png`

### Colour Configurations (1–4)

Each variant comes in four numbered colour configurations. The configuration numbering corresponds to background/foreground colour treatment:
- **_1** — Primary configuration (Soft Dark background, Signal Lime + Circuit Grey elements) — default choice
- **_2** — Secondary configuration (Signal Lime background or inverted treatment)
- **_3** — Monochrome or reduced palette configuration
- **_4** — Alternative contrast configuration

> **Selection guidance:** Default to `_1` for all dark-mode applications. Use `_2`–`_4` only when the primary conflicts with the background or for specific contextual needs (e.g. light-mode surfaces, co-branding on partner materials).

### Logo Usage Rules

- Never recolour logos manually — use the provided colour configurations
- Always maintain clear space equal to the height of the "J" in the wordmark around all sides
- Minimum display size: 24px height for logomark only; 80px width for full wordmark lockup
- Do not stretch, distort, rotate, or apply effects to any logo file
- Do not place logos on busy photographic backgrounds without a solid colour barrier

---

## Mascot

JOY has a mascot character that adds personality to community and marketing content.

### Mascot Variants
- Files: `Joy_Logo_Mouse_1.png` through `Joy_Logo_Mouse_4.png` (the mascot is integrated into the Mouse logo series)
- The mascot takes on the same four colour configurations as the logo system
- Use in: Discord community assets, social media reactions/stickers, event materials, casual community comms, merch designs

### Mascot Usage Notes
- The mascot communicates the playful, community-first side of the JOY brand
- It should appear in contexts that are warm, community-facing, or celebratory
- Avoid using the mascot in serious/formal contexts (whitepapers, investor materials, enterprise partnership decks)
- The mascot pairs best with Twobit typography and Signal Lime accents

---

## Product Renders — JOY Genesis Console

Six official 2D product renders of the JOY Genesis console are available. All are 1920×1080px, RGBA PNG format, suitable for high-resolution marketing use.

### Available Angles

| File | View | Primary Use Case |
|---|---|---|
| `Front JOY Genesis.png` | Straight-on front face | Hero images, product pages, announcements |
| `Back JOY Genesis.png` | Rear panel view | Technical/spec sheets, feature callouts (ports, connectivity) |
| `Left JOY Genesis.png` | Left side profile | Profile/silhouette uses, comparison layouts |
| `Right Front JOY Genesis.png` | Three-quarter front-right | Premium hero shots, social media, advertising |
| `Left Front JOY Genesis.png` | Three-quarter front-left | Variety hero, alternate angle for layouts |
| `Right Back JOY Genesis.png` | Three-quarter rear-right | Feature detail, behind-the-scenes aesthetic |

### 3D Asset
- **File:** `JOY Genesis 3D.glb`
- **Format:** GLB (binary glTF)
- **Use:** Interactive 3D viewers, AR/VR, real-time rendering, motion graphics, 3D marketing animations

### Render Usage Rules
- Always display renders on Soft Dark (`#242424`) backgrounds to maintain the premium hardware aesthetic
- Do not add drop shadows, strokes, or background fills directly to render files
- When cropping renders, maintain the console's proportions and avoid cutting off key design elements
- For print or large-format use, always source the original 1920×1080 PNG (not compressed web versions)
- The three-quarter angles (`Right Front`, `Left Front`) are the preferred hero angles for marketing materials

---

## Brand Expression Summary

| Element | Specification |
|---|---|
| Dark Base | Soft Dark `#242424` |
| Light Base | Base Light / Circuit Grey `#E0E0E0` |
| Primary Accent | Signal Lime `#EDFFAD` |
| Heading Typeface | Source Code Pro (SemiBold) |
| Body Typeface | Source Code Pro (Regular) |
| Dramatic Effect Pop | Twobit (OTF) — use sparingly |
| Brand Tone | Playful, technical, hype-driven, community-first |
| Tagline | "Game. Earn. JOY!" |

---

## Asset File Inventory

```
Brand Assets/
├── logos/
│   ├── Joy_Logo_1.png              ← Logomark, config 1
│   ├── Joy_Logo_2.png              ← Logomark, config 2
│   ├── Joy_Logo_3.png              ← Logomark, config 3
│   ├── Joy_Logo_4.png              ← Logomark, config 4
│   ├── Joy_Logo_Mouse_1.png        ← Logomark + Mouse/Mascot, config 1
│   ├── Joy_Logo_Mouse_2.png        ← Logomark + Mouse/Mascot, config 2
│   ├── Joy_Logo_Mouse_3.png        ← Logomark + Mouse/Mascot, config 3
│   ├── Joy_Logo_Mouse_4.png        ← Logomark + Mouse/Mascot, config 4
│   ├── Joy_Logo_Text_1.png         ← Full wordmark lockup, config 1 ✅ DEFAULT
│   ├── Joy_Logo_Text_2.png         ← Full wordmark lockup, config 2
│   ├── Joy_Logo_Text_3.png         ← Full wordmark lockup, config 3
│   └── Joy_Logo_Text_4.png         ← Full wordmark lockup, config 4
├── renders_2d/
│   └── JOY Genesis Product Render 2D/
│       ├── Front JOY Genesis.png
│       ├── Back JOY Genesis.png
│       ├── Left JOY Genesis.png
│       ├── Left Front JOY Genesis.png
│       ├── Right Front JOY Genesis.png   ← ✅ DEFAULT HERO ANGLE
│       └── Right Back JOY Genesis.png
├── renders_3d/
│   └── JOY Genesis 3D.glb
└── fonts/
    ├── twobit/
    │   ├── Twobit.otf
    │   ├── Twobit Bold.otf             ← ✅ PRIMARY
    │   ├── Twobit Italic.otf
    │   └── Twobit Bold Italic.otf
    └── Source_Code_Pro/
        ├── SourceCodePro-VariableFont_wght.ttf   ← ✅ PRIMARY (variable)
        └── static/                               ← Individual weight TTFs
```

---

*Last updated: February 2026*
*Assets extracted from: JOY_Genesis_Product_Render_2D.zip, JOY_Genesis_Product_Render_3D.zip, Joy_Fonts.zip, Joy_Logos.zip*
*See also: JOY_Tech_Brand_Context.md (brand strategy, messaging, chain partnerships)*
