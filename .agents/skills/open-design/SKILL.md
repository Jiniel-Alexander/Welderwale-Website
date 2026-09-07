---
name: open-design
description: OpenDesign - Open-source design system and agent-native design engine for creating brand-grade UI, web & mobile prototypes, design systems (DESIGN.md), dashboards, and design reviews.
---

# OpenDesign: Agent-Native Design Studio & Design Systems

OpenDesign enables AI agents to function as lead designers, transforming ideas into polished design systems, responsive web & mobile layouts, and high-fidelity artifacts.

## Core Capabilities

1. **Design Brief & Direction Discovery**:
   - Establish target audience, tone, aesthetic risk tolerance, and visual identity before generating UI.
   - Lock brand tokens into a `DESIGN.md` contract.
2. **Distinctive Visual Direction**:
   - Avoid generic, cliché AI aesthetics (avoid generic purple gradients, oversized default cards, and robotic typography).
   - Tailor typography, color harmonies, elevation, and spacing deliberately to the specific subject domain.
3. **Design System & Token Engineering**:
   - Establish semantic color tokens (`primary`, `secondary`, `accent`, `surface`, `border`, `text`).
   - Define purposeful typographic scales, line lengths (<80 chars), and harmonious border radiuses.
4. **Design Review & Critique**:
   - Evaluate accessibility (WCAG AA contrast ratios).
   - Scrutinize visual hierarchy, whitespace rhythm, mobile responsiveness, and interactive states (hover, focus, active).

## Core Design Workflow

```
1. Brief Discovery ➔ 2. Aesthetic & Token Framing ➔ 3. Component Architecture ➔ 4. Polish & Critique
```

- **Step 1: Brief Discovery**: Identify the audience, brand positioning, and functional requirements.
- **Step 2: Token Framing**: Choose intentional font pairings, high-contrast semantic palettes, and layout grids.
- **Step 3: Component Architecture**: Build clean, accessible, mobile-first HTML/Tailwind/CSS or React components.
- **Step 4: Critique**: Audit against common AI design tells, ensure distinctive personality, and verify responsiveness.

## Design Rules for Coding Agents

- **Content First**: Design around real copy, authentic dimensions, and actual domain data rather than generic filler.
- **Motion with Purpose**: Restrict animations to purposeful interactive feedback (drawer slide, accordions, toggles) rather than gratuitous floating transitions.
- **Strict Visual Hierarchy**: Structural elements (borders, dividers, headers, badges) must convey semantic meaning, not purely decorative clutter.
