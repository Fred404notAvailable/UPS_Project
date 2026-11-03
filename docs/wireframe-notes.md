# DevCrew AI Wireframe Implementation Notes

## 1. Architectural Overview and Design Decisions
The single-page technical wireframe was engineered using vanilla HTML5, CSS custom properties, and vanilla JavaScript in accordance with devcrew-ai-wireframe-spec.md. No frameworks or external component libraries are used.

### Reference Synthesis
- Reference A provided the organic vertical rhythm, the black hero transitioning across a torn boundary into paper, the dark ink spine running down the page axis, staggered block overlaps (24px to 48px), and solid crimson attribute blocks.
- Reference B provided the technical HUD vocabulary: window-frame title bars with closing controls, precise callouts with 45-degree leader lines terminating in 6px square nodes, micro-labels in monospace uppercase, registration crosshairs, segmented meter bars, and the centered pill ModeSwitch.
- The hero object is an authored SVG diagram of the stateful multi-agent orchestrator rather than an illustration.

---

## 2. Stagger Offsets and Grid Alignment per Section

A 12-column grid is enforced at 1440px desktop width (64px outer margins, 24px gutters):

1. Section 01 (Hero):
   - Grid split: 5 columns for typography and problem thesis, 7 columns for PipelineGraph and Callouts.
   - Graph width: 880px with four callout nodes directly intersecting satellite stage nodes.

2. Section 02 (The Problem):
   - Left column (columns 1 to 6): Operational Overhead and Siloed Development frames.
   - Right column (columns 7 to 12): Delayed Security Review and Manual Deployment Friction frames, offset downward by a 64px vertical stagger.
   - Central overlap: Single-Turn Assistants AttributePanel centered across columns 4 to 10, pulled upward by -32px to overlap the ink spine and adjacent frames.

3. Section 03 (The Architecture):
   - Left stages (1st Decompose, 3rd Scan, 5th Approve): Primary frame and OrdinalLabel span columns 1 to 7; AttributePanel spans columns 6 to 11 with a 36px downward offset, overlapping the ink spine by 48px.
   - Right stages (2nd Execute, 4th Heal, 6th Deploy): Primary frame and OrdinalLabel span columns 7 to 13; AttributePanel spans columns 3 to 8 with a 36px downward offset, overlapping the ink spine from the opposite side.
   - Ordinal labels are enclosed in 1px panel containers with 3px top heavy rules to ensure legibility when crossing the ink spine boundary.

4. Section 04 (Orchestration Engine):
   - Enclosed within a full-width dark band bounded by torn-edge SVG masks at top and bottom.
   - Three-column technical layout: State Store frame (columns 1 to 3), Finite State Machine diagram (columns 4 to 9), Guarantees frame (columns 10 to 12).
   - Bottom: TickScale calibration ruler and deterministic Barcode paired with RUN-ID.

5. Section 05 (Agent Roster):
   - Lead architect card (Planner): Wide feature card across columns 1 to 12 with internal 7:5 split between prompt specification and AttributePanel.
   - Six secondary agent cards: Arranged in an alternating staggered cascade. Odd cards span columns 1 to 7; even cards span columns 7 to 13 with -24px upward vertical offset to eliminate 3-column symmetry and create overlapping layers.

6. Section 06 (Self-Healing Loop):
   - Staggered 6:6 column split: Closed-loop cycle diagram on the left; Attempt Log frame with 12-segment budget meter on the right.

7. Section 07 (Governance):
   - Staggered 6:6 column split: Approval Gate frame with diff summary and square action buttons on the left; Append-only Audit Trail on the right.
   - Precision callout node badge overlays the gate frame.

8. Section 08 (Preview Deployments):
   - 7:5 column split: Browser frame mockup with grayscale crosshair placeholder on the left; Historic Version registry frame on the right.

9. Section 09 (Capability Matrix):
   - Full-width DataTable with strict 1px hairlines and no zebra fills, preceded by ranked OrdinalLabels ("1st. Single-Turn" and "2nd. DevCrew AI").

10. Section 10 (Footer):
    - Dark inverse band featuring closing display headline, START frame with curl command block, five 4-link directory columns, and bottom metadata row.

---

## 3. Responsive Adaptations
- 1280px and above: Full desktop grid and stagger offsets.
- 768px to 1279px: Stagger offsets halved, hero graph scaled to 85%, secondary agent cards split into 2-column staggered rows.
- Below 768px (Mobile 390px):
  - Single-column flow with 16px side gutters and 36px left padding to provide clearance from the collapsed 24px left edge spine strip.
  - Zero horizontal overflow.
  - Interactive ModeSwitch and Navigation Panel preserved with 44px minimum tap target.

---

## 4. Theme Verification and Color Invariants
- Paper: #F4F2EE background, #0B0B0B ink and rules, #9B2B27 crimson accent, #0B0B0B hero background. Display serif for main headline.
- Void: #050505 background, #E9EDEB ink, #3A4541 rules, #3DF2B0 mint-green accent, #050505 hero background blending seamlessly into page body. Display grotesk for main headline.
- Blueprint: #FFFFFF background, #1F3BB3 monochrome ink and rules, #1F3BB3 accent. Display grotesk for main headline.

---

## 5. Recorded Decisions and Clarifications
1. SVG Styling Context:
   - External SVGs loaded via standard img elements do not inherit external CSS variables by default. The SVG files (pipeline-graph.svg, ink-spine.svg, torn-edge.svg) have hand-authored internal style rules with matching fallbacks so they render correctly in standalone contexts and theme switches.
2. Lining Numerals on High-Contrast Serifs:
   - Cormorant Garamond defaults to proportional old-style figures. For index numerals and ordinals, CSS font-feature-settings: "lnum" 1, "tnum" 1 was applied to guarantee modern lined numerals while retaining sharp high-contrast serifs.
3. Zero Inline Styles:
   - All styling in index.html is strictly bound via semantic CSS classes in tokens.css, components.css, and layout.css.

