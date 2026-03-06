# Steakhouse Financial — Dark Mode Guidelines

Steakhouse Financial uses a precision-engineered "Institutional Dark" theme. It avoids pure black in favor of deep charcoal greys (`oklch(17% .004 229)`), providing a high-end, stable feel suitable for institutional DeFi.

## 🎨 Color System (OKLCH)

The color system is built on **Tailwind v4** architecture, utilizing OKLCH for consistent perceptual lightness.

| Token | OKLCH / HEX | Description |
|---|---|---|
| **Background** | `oklch(17% .004 229)` | Primary page surface. |
| **Foreground** | `oklch(97% .022 92.9)` | High-contrast off-white text. |
| **Primary** | `oklch(55% .103 173)` | Brand Green / Mint accent logo and primary buttons. |
| **Card** | `oklch(22.8% .007 229)` | Surface for vault cards and dashboard widgets. |
| **Border** | `oklch(31.1% .004 229)` | Subtle interactive borders. |

### Vault Strategy Colors
- **Prime**: `#355a52` (Muted Teal)
- **High Yield**: `#7c4032` (Earthy Red)
- **Term**: `#5b3a5d` (Royal Purple)
- **Turbo**: `#726343` (Industrial Gold)

## ✍️ Typography

- **Primary Font**: **Söhne** (Swiss industrial sans).
- **Secondary Font**: **Söhne Mono** for financial figures and addresses.
- **Hierarchy**: Medium weights for labels, Semibold (`600`) for headers, and Regular (`400`) for data descriptions.

## 🏗️ Structure & Radius

- **Card Radius**: `8px` specifically for vault cards.
- **Button Radius**: `4px` for a sharp, technical look.
- **Grid**: Uses a strictly 12-column grid system on desktop with a `1440px` max-width.
- **Interactions**: Subtle glow effects (`ring`) using the primary brand green.

---

## 🌓 Dark Mode Rationale
The dark mode is the **default** interface for the Steakhouse App. It reduces eye strain for power users monitoring liquidity while making the vivid "Strategy Accents" stand out as visual signifiers of risk/category.
