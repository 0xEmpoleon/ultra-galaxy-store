# 🌌 Ultra Design System

**Ultra Design System** is an agentic, multi-brand platform designed for rapid extraction, codification, and implementation of premium brand identities. It bridges the gap between raw brand materials and production-ready code.

## 🎯 Project Purpose

This repository is built to showcase a **universal design system** that can morph to fit any brand identity through an "Applied Design" mechanic. It serves three primary functions:

1.  **AI-Driven Extraction**: An agentic system that reverse-engineers design tokens (color, type, spacing, motion) from websites, PDFs, and Figma exports.
2.  **Fluid & Responsive Foundation**: A core CSS architecture built on fluid variables (`clamp()`, `rem`, `vw`) that ensures visual consistency from 320px to 2560px without media-query bloat.
3.  **Cross-Brand Integrations**: Real-world reconstructions of premium brands (**Cipher Digital**, **Joy Tech**, **Telekom OT**) to demonstrate the system's flexibility and precision.

---

## 🏗️ Architecture

### 1. Token-Based Theming (`src/tokens/`)
The system's "brain" lives in [design-tokens.css](src/tokens/design-tokens.css). It organizes brand identities into namespaced custom properties (`--color-*`, `--font-*`, etc.), allowing for instant site-wide theme switching.

### 2. Component Layer (`src/components/`)
A library of modular, theme-agnostic components:
-   **Buttons**: Primary, secondary, ghost, and destructive variants.
-   **Cards**: Header/Body/Footer structures with container-query responsiveness.
-   **Inputs**: Accessible forms with fluid spacing and custom styling.
-   **Layout**: `grid`, `stack`, `cluster`, and `sidebar` primitives for rapid layout building.

### 3. Integrations (`src/integrations/`)
Detailed reconstructions of world-class web experiences:
-   **Cipher Digital**: Industrial hyperscale. Dark, precision-engineered aesthetic.
-   **Joy Tech**: Retro-futuristic gaming. Neon accents and brutalist layouts.
-   **Telekom OT**: Editorial Swiss minimalism. Light, whitespace-heavy design.
-   **Steakhouse Financial**: Institutional DeFi. Deep teal themes, SVG data-viz, and 1:1 asset parity. (The "Gold Standard" for reconstruction).

---

## 🚀 Key Features

-   **Apply System**: A runtime mechanic that swaps the entire storefront's identity, including fonts, 3D assets (Three.js), and spacing protocols.
-   **Reconstruct Mode (10/10 Grade)**: High-fidelity website reconstructions built using exact CSS extraction, SVG component replication, and asset mirroring.
-   **Visual Brand Guidelines**: A documentation layer for each brand showing color swatches, typography specimens, and component usage.

---

## 🛠️ Usage for Developers

### Prerequisites
-   **Docker**: Used to offload compute-heavy tasks or run isolated design extraction agents.

### Installation
```bash
# Clone the repository
git clone https://github.com/0xEmpoleon/ultra-galaxy-store.git

# Run via Docker (if required)
docker-compose up
```

---

## 📜 Documentation Links
-   [Full Token Reference](src/tokens/design-tokens.css)
-   [Changelog](CHANGELOG.md)
-   [Extraction Research](docs/DESIGN_SYSTEM_EXTRACTION_RESEARCH.md)

---

**Built with Precision for the Ultra Galaxy.**
**GitHub:** [0xEmpoleon](https://github.com/0xEmpoleon) | **Vercel:** [ti8218b-5326s-projects](https://vercel.com/ti8218b-5326s-projects)
