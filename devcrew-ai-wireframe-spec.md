# DevCrew AI: Wireframe Specification for Google Antigravity

This file is the working brief for an Antigravity agent. Read all of it before generating anything. Produce the deliverables listed in section 12, and verify them against the checklist in section 13.

---

## 1. Mission

Build a mid-fidelity, fully navigable wireframe of the DevCrew AI marketing and product-overview site as a single scrolling page, with three switchable visual themes.

### Project statement (use as source of truth for all copy)

Modern software engineering workflows suffer from high operational overhead, siloed development steps, delayed security reviews, and manual deployment friction. Traditional AI coding assistants are limited to single-turn prompt completions. They lack structural state management, fail to verify runtime security, and cannot autonomously execute or test code in isolated environments.

DevCrew AI solves this with a collaborative multi-agent architecture controlled by a stateful orchestration engine. The platform automates the whole software delivery lifecycle:

1. Architectural task decomposition
2. Isolated containerized execution (Docker)
3. Static application security testing (SAST)
4. Self-healing failure correction loops
5. Human-in-the-loop governance
6. Automated CI/CD preview deployments

---

## 2. Visual Reference Analysis

Two reference images define the look. Follow their structure and style, not just their colors.

### Reference A: dark ink and paper character page

Carry these traits over:

- A black hero at the top whose bottom edge is a torn, ink-splattered boundary, not a straight line. Below it the page turns to off-white paper.
- A dark ink "spine" shape that runs vertically down the center of the paper area and widens and narrows as the page scrolls. Content sits on both sides of it and overlaps it.
- Content blocks are offset and staggered left and right, never aligned in a single column. Blocks overlap the spine and each other by 24 to 48 px.
- Oversized index numerals with a plus sign ("01 +"), and ordinal rank labels ("1st.", "2nd.") in a high-contrast serif.
- Solid crimson rectangles carrying white attribute lists, placed against black or white areas.
- Small uppercase tracked captions beside a thin horizontal rule, and tiny "+" markers as section anchors.
- Small vertical or rotated micro-labels on the page edge.
- A dense dark footer with multi-column link lists.

### Reference B: Sutera technical HUD interface

Carry these traits over:

- Three interchangeable themes of the same layout: light (white card), dark (black with a single mint-green accent), and blueprint (white with one royal-blue ink).
- A very large two-line headline in the top left, uppercase, tightly leaded.
- One central hero object, with thin leader lines running to it from labeled nodes. Each leader line ends in a small square node.
- Window-frame panels: a one-line title bar, a close "x" at the right of the title bar, a thin 1 px border, square corners.
- Micro text in an uppercase monospaced face, with bracketed section labels such as [CORE THREADS OF MY WORK].
- A centered pill button in the top bar with an icon, used as the theme switch.
- A local time readout in the top right corner.
- Barcode strips, tick-mark scales, segmented bar meters, and registration crosshairs used as functional detail, not decoration.
- A lower-left index list with numbered rows, and a lower-right "about" box with a bordered frame.

### Combined direction

Reference A supplies the page rhythm and the layering of blocks. Reference B supplies the interface language: callouts, frames, labels, data readouts, and the theme switch. The central hero object is the DevCrew agent pipeline drawn as a node graph, not an illustration of a character or plant.

---

## 3. Hard Constraints

The agent must obey all of these without exception.

- No emojis anywhere: not in copy, labels, commit messages, comments, or file names.
- No lorem ipsum. Every text block uses real copy derived from section 1 or written to match it.
- No stock gradient hero, no purple-to-blue gradients, no glassmorphism cards, no glowing blobs, no floating 3D shapes.
- No generic icon-in-circle feature grids with three equal cards.
- No rounded corners above 2 px on any frame, button, or card. Pill shape is permitted only for the theme switch.
- No drop shadows except one hard 1 px offset line where an overlap needs separation.
- No marketing filler: banned phrases include "revolutionize", "supercharge", "seamless", "unlock", "next-generation", "cutting-edge", "empower", "game-changing", "streamline your workflow".
- No decorative sparkle or "AI" iconography (stars, magic wands, brain glyphs, chat bubbles).
- No centered three-column symmetry. Layouts must be staggered per Reference A.
- No placeholder stats. If a number appears, it is clearly marked as an example value in a bracketed label such as [EXAMPLE VALUE].
- Use only the typefaces and tokens in section 4. Do not add others.

---

## 4. Design Tokens

### 4.1 Themes

Implement all three as CSS custom properties on `[data-theme]` on the root element. The layout must not change between themes. Only tokens change.

| Token | Paper (default) | Void | Blueprint |
|---|---|---|---|
| --bg | #F4F2EE | #050505 | #FFFFFF |
| --bg-inverse | #0B0B0B | #F4F2EE | #1F3BB3 |
| --ink | #0B0B0B | #E9EDEB | #1F3BB3 |
| --ink-soft | #4A4743 | #8C9692 | #5B6FC9 |
| --rule | #0B0B0B | #3A4541 | #1F3BB3 |
| --accent | #9B2B27 | #3DF2B0 | #1F3BB3 |
| --accent-ink | #FFFFFF | #050505 | #FFFFFF |
| --panel | #FFFFFF | #0C0F0E | #FFFFFF |

Notes:

- Paper uses crimson as the only accent, matching Reference A.
- Void uses a single mint-green accent, matching the dark Sutera frame.
- Blueprint is monochrome. Every line, label, and fill is the one blue.
- The torn-edge hero is always near-black in Paper and Blueprint, and in Void it blends into the page background with only a faint rule marking the edge.

### 4.2 Typography

| Role | Face | Use |
|---|---|---|
| Display serif | A high-contrast serif with sharp serifs (for example Playfair Display or Cormorant Garamond) | Index numerals, ordinal labels, section titles in Paper theme |
| Display grotesk | A wide technical sans (for example Space Grotesk or Syne) | Main headline in Void and Blueprint themes |
| Mono | A clean monospace (for example JetBrains Mono or IBM Plex Mono) | All micro text, labels, panel content, readouts |

Scale (desktop):

- Headline: 96 px / 0.92 line height, uppercase, tracking -0.01em
- Index numeral: 144 px serif, with a 32 px plus sign raised at the top right
- Ordinal label: 56 px serif
- Section title: 40 px
- Body: 15 px / 1.55, measure 52 to 60 characters
- Micro label: 10 to 11 px mono, uppercase, tracking 0.08em
- Panel text: 11 to 12 px mono

Headline theme rule: Paper theme sets the headline in the display serif. Void and Blueprint set it in the display grotesk. Everything else stays the same.

### 4.3 Grid and spacing

- 12-column grid, 1440 px design width, 64 px outer margins, 24 px gutters.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- Stagger offsets for blocks are taken from the scale above, never arbitrary.
- Hairlines are 1 px. Heavy rules are 3 px and reserved for section starts.

---

## 5. Component Inventory

Build each as a reusable component with a short name, then compose the page from them.

1. **TopBar**: logo block (solid accent square, two letters "DC" in --accent-ink), hamburger at far right, centered ModeSwitch, LocalTime at right.
2. **ModeSwitch**: pill with a globe-style glyph and the label CHANGE MODE. Click cycles Paper, Void, Blueprint. Shows the current mode name in a bracketed micro label under it.
3. **LocalTime**: two-line readout, label "LOCAL TIME" above, "IST 00:12 AM" below, updating each minute.
4. **IndexNumeral**: large serif numeral, a plus sign, a title in caps, and a small subtitle line.
5. **OrdinalLabel**: "1st." style label in serif, followed by a caps name and a one-line caption, with a heavy rule above.
6. **Frame**: window panel. Title bar with a caps title and a close "x". Body area padded 16 px. 1 px border.
7. **Callout**: a thin line from a label to a target, ending in a 6 px square node. Label is mono micro text, max 3 lines. Lines are straight with at most one 45 degree bend.
8. **AttributePanel**: solid accent rectangle with white mono key and value pairs separated by hairlines, matching the crimson attribute blocks in Reference A.
9. **MeterRow**: label, then a segmented bar of 12 segments with a number at the right.
10. **Barcode**: a decorative strip generated from a deterministic pattern, always paired with a real identifier next to it, such as a run id.
11. **TickScale**: a horizontal ruler with labeled ticks, used under graphs.
12. **InkSpine**: SVG path for the central dark shape. Width varies between 120 and 360 px. Edges are irregular.
13. **TornEdge**: SVG mask for the hero bottom boundary, with scattered ink fragments beyond the edge.
14. **Crosshair**: small registration mark used at frame corners and graph intersections.
15. **DataTable**: hairline-only table, mono text, no zebra fill.
16. **FooterColumns**: five columns of link lists, mono micro text.

---

## 6. Page Structure and Wireframes

Desktop width 1440 px. The ASCII layouts are structural guides. Honor proportions and overlaps. Dimensions in parentheses are suggestions.

### 6.0 TopBar (fixed, 64 px)

```
+----------------------------------------------------------------------------------+
| [DC]                      ( (o)  CHANGE MODE )                      LOCAL TIME  [=] |
|                              [ MODE: PAPER ]                         IST 00:12 AM   |
+----------------------------------------------------------------------------------+
```

### 6.1 Hero (section 01), full viewport height, near-black

Content:

- Top left: IndexNumeral "01 +" with title "DEVCREW AI" and subtitle "Multi-agent software delivery".
- Headline, two lines, uppercase: "ONE TASK IN." / "A VERIFIED PREVIEW OUT."
- Supporting paragraph, 2 sentences, taken from the project statement.
- Center: the PipelineGraph hero object (see 7.1).
- Bottom left: [CORE STAGES] index list with six numbered rows.
- Bottom right: Frame titled "ABOUT THIS BUILD" with 4 lines of copy and two text links, "DOCUMENTATION" and "SOURCE".
- Bottom boundary: TornEdge into the paper area.

```
+----------------------------------------------------------------------------------+
| 01 +                                                                              |
| DEVCREW AI                                  .-- label --[]                        |
| Multi-agent software delivery              /                                      |
|                                  [] node--+      +-----------------------+        |
| ONE TASK IN.                      \         \    | PIPELINE GRAPH        |        |
| A VERIFIED PREVIEW OUT.            [] ---- (ORCH) ----[] ---- [] ---- []  |       |
|                                    /         /    +-----------------------+        |
| paragraph paragraph               []node-----+                 +-----------------+ |
| paragraph                                                      | ABOUT THIS BUILD| |
| [CORE STAGES]                                                  | text text text  | |
| 01 DECOMPOSE   02 EXECUTE   03 SCAN                            | DOCS    SOURCE  | |
| 04 HEAL        05 APPROVE   06 DEPLOY                          +-----------------+ |
|~~~~~~~~~~~~~ torn ink edge ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
```

### 6.2 Problem (section 02), paper area, ink spine begins

Two column staggered. The spine starts as a thin tendril at the top and widens by the end of this section.

Left block, large: IndexNumeral "02 +", title "THE PROBLEM", subtitle "Why delivery still stalls".

Four problem items, each a Frame with a number and a two-sentence description, placed alternately left and right of the spine at different vertical offsets:

1. Operational overhead
2. Siloed development steps
3. Delayed security review
4. Manual deployment friction

Fifth block, a solid accent panel overlapping the spine: AttributePanel titled "SINGLE-TURN ASSISTANTS" with rows:

- STATE: none between turns
- EXECUTION: not run, only suggested
- SECURITY: unverified at runtime
- ISOLATION: none
- RECOVERY: manual retry

```
          +---------------------+          ##
          | 02 +                |        ####
          | THE PROBLEM         |       #####
          +---------------------+      ######
                      +----------------+######
                      | 1 OVERHEAD [x] |#######
                      | text text      |######
                      +----------------+#####
         +-------------+              +---------------+
         | 2 SILOED [x]|##############| 3 SECURITY [x]|
         | text text   |#####SPINE####| text text     |
         +-------------+##############+---------------+
                       +-------------------+
                       |/// SINGLE-TURN ///|
                       |/// attributes  ///|
                       +-------------------+
```

### 6.3 Architecture (section 03)

Heading: IndexNumeral "03 +", "THE ARCHITECTURE", subtitle "Stateful orchestration over specialized agents".

Content, built as a vertical sequence on the spine, using OrdinalLabel for each stage and alternating sides:

- **1st. DECOMPOSE** (left): Planner agent breaks a request into a task graph with dependencies. Frame shows a small task tree.
- **2nd. EXECUTE** (right): Coder and Executor agents run each task inside an isolated Docker container. Frame shows a container boundary with a terminal strip.
- **3rd. SCAN** (left): Security agent runs SAST over the diff and the built artifact. Frame shows a findings table with severity column.
- **4th. HEAL** (right): Healer agent reads failures and findings, proposes a patch, and sends it back to Executor. Frame shows the loop with an iteration counter and a cap.
- **5th. APPROVE** (left): Human reviewer gate. Frame shows a diff summary with APPROVE, REQUEST CHANGES, and REJECT actions.
- **6th. DEPLOY** (right): Deployer builds and publishes a CI/CD preview. Frame shows a preview URL row and a status line.

Each stage has an AttributePanel with four rows: AGENT, INPUT, OUTPUT, GUARD.

A persistent vertical micro-label along the left page edge reads "STATE: SHARED, VERSIONED, RESUMABLE".

### 6.4 Orchestration engine (section 04)

Single wide composition, dark band that interrupts the paper, with a torn top and bottom edge.

- Center: the orchestration engine drawn as a large state machine diagram, nodes as squares, edges as hairlines with arrowheads. States: PENDING, RUNNING, SCANNING, HEALING, AWAITING_APPROVAL, DEPLOYING, DONE, FAILED.
- Left column: [STATE STORE] Frame with a key list: run id, task graph, artifacts, findings, approvals, logs.
- Right column: [GUARANTEES] list: resumable after crash, every transition logged, every agent call bounded by timeout, no agent writes outside its sandbox.
- Bottom: TickScale with run timeline and a Barcode paired with a run identifier.

### 6.5 Agent roster (section 05)

Heading: OrdinalLabel style. A staggered strip of seven agent cards overlapping each other by 32 px, each card with:

- Agent name in caps
- A one-line role
- AttributePanel with: TOOLS, SANDBOX, TIMEOUT, WRITES

Agents: Planner, Coder, Executor, Security, Healer, Reviewer Gateway, Deployer.

Place the first card large with a Frame showing detail, and the other six smaller, as in the large "feature" card and the smaller cards in Reference A.

### 6.6 Self-healing loop (section 06)

Left half: a looping diagram.

```
   +---------+     +----------+     +--------+
   | EXECUTE |---->|   TEST   |---->|  SCAN  |
   +---------+     +----------+     +--------+
        ^                                |
        |             fail / finding     |
        |                                v
        |          +---------------------------+
        +----------|          HEAL             |
                   +---------------------------+
                   attempt 2 of 4   [EXAMPLE VALUE]
```

Right half: a Frame titled "ATTEMPT LOG" with a DataTable of attempt number, trigger, patch summary, and result. Include a MeterRow labeled "ATTEMPT BUDGET".

Below, one line of copy explaining that the loop is capped and escalates to a human when the cap is reached.

### 6.7 Governance (section 07)

Staggered pair:

- Left: Frame titled "APPROVAL GATE" showing a diff summary, a list of checks passed, and three actions: APPROVE, REQUEST CHANGES, REJECT. Square buttons.
- Right: Frame titled "AUDIT TRAIL" with a vertical list of events, each with time, actor (agent or person), and action.

Overlay a Callout from the gate frame to a node labeled "NO DEPLOY WITHOUT APPROVAL".

### 6.8 Preview deployments (section 08)

Two blocks overlapping the spine:

- A browser-style Frame titled "PREVIEW" containing a grayscale placeholder of a web page with a URL bar reading a sample address.
- A "HISTORIC VERSION" style Frame listing previous previews by version tag and time, each row with a status mark, matching the version list in Reference A.

Add a short text row with the pipeline steps: BUILD, PUSH, DEPLOY, VERIFY.

### 6.9 Comparison (section 09)

A full-width DataTable with hairlines only, two columns of values:

| Capability | Single-turn assistant | DevCrew AI |
|---|---|---|
| State across steps | None | Persistent, versioned |
| Runs the code | No | Yes, in Docker |
| Security verification | None | SAST on every run |
| Failure handling | User retries | Healing loop with cap |
| Human oversight | Implicit | Explicit approval gate |
| Deployment | Manual | Automated preview |

Title above: OrdinalLabel "1st. SINGLE-TURN" and "2nd. DEVCREW AI" side by side, echoing the ranked headings of Reference A.

### 6.10 Footer (dark)

- Large closing line in display type: "SEND A TASK. REVIEW THE RESULT."
- A Frame titled "START" containing a command line block and two actions: READ THE DOCS, VIEW SOURCE.
- FooterColumns with five groups: PLATFORM, AGENTS, SECURITY, DEPLOYMENT, PROJECT. Four links each.
- A bottom hairline row with version label, license label, and the LocalTime readout repeated.

---

## 7. Hero Object and Callouts

### 7.1 PipelineGraph

Drawn in SVG, not an image. Structure:

- One central square node labeled ORCHESTRATOR, 96 px, 2 px border, with crosshairs at each corner.
- Six satellite square nodes around it on an imperfect ring, one per stage: DECOMPOSE, EXECUTE, SCAN, HEAL, APPROVE, DEPLOY.
- Hairline connections from the orchestrator to each satellite, plus a directional ring path joining the satellites in stage order.
- The EXECUTE node contains a small container outline. The SCAN node contains a small bracket-and-line mark. The APPROVE node contains a checkbox glyph. Draw these as simple line marks, no fills.
- A dashed return path from HEAL back to EXECUTE.
- In Paper theme, the graph sits over the near-black hero with --ink strokes inverted to the light value. In Void, strokes are --ink with --accent used only on the active node. In Blueprint, everything is the single blue.

### 7.2 Hero callouts (four)

Each Callout is a line from a node to a label.

1. From DECOMPOSE: "TASK GRAPH. A request is split into ordered, dependent tasks."
2. From EXECUTE: "ISOLATED RUN. Each task runs in its own Docker container."
3. From SCAN: "SAST. Findings block the pipeline before review."
4. From APPROVE: "GATE. A person signs off before any preview is published."

Labels are mono, uppercase title followed by sentence-case detail, max 3 lines.

---

## 8. Ink Spine and Torn Edges

- InkSpine is a single SVG path rendered in --bg-inverse. It starts below the hero tear as a thin line, grows to a heavy mass behind sections 03 and 05, and tapers to a thin line before the footer.
- Edges are irregular with small protrusions, matching the rough brush quality in Reference A. Use a seeded noise function so the shape is the same on every load.
- TornEdge fragments: 8 to 14 small separated ink pieces beyond the main boundary, sizes 4 to 40 px.
- In wireframe fidelity, these may be flat shapes. Do not add textures, grain overlays, or particle effects.
- On narrow screens, collapse the spine to a 24 px wide strip at the left edge.

---

## 9. Interaction Behavior

Keep interactions minimal and functional.

- ModeSwitch cycles themes, writes the choice to localStorage with try/catch, and applies it before first paint to avoid a flash.
- Anchor nav from the hamburger opens a full-height panel listing the nine sections with their index numerals.
- Frames can be collapsed by their close "x". Collapsed frames show only the title bar, with a "+" in place of the "x".
- Callouts highlight their target node on hover or focus, by thickening the line from 1 px to 2 px. No other motion.
- The ink spine and block offsets may shift by up to 24 px on scroll, linear and slow. No parallax on text.
- Respect `prefers-reduced-motion`: disable all scroll-linked movement.
- Everything reachable by keyboard. Focus ring is a 2 px solid --accent outline with 2 px offset.

---

## 10. Responsive Rules

| Breakpoint | Behavior |
|---|---|
| 1280 and above | Full layout as in section 6 |
| 768 to 1279 | Stagger offsets halved, hero graph scaled to 80%, agent cards in two rows |
| Below 768 | Single column, spine becomes a left edge strip, callouts become a numbered list under the graph, all frames full width with 16 px side gutters |

Rules at every size: no horizontal scroll, minimum tap target 44 px, micro labels never below 10 px.

---

## 11. Content Rules

- Voice is plain and technical. Short sentences. State what the system does.
- Headings are nouns or noun phrases, not slogans.
- Every claim about behavior must correspond to a capability in section 1.
- Numbers appear only as clearly marked example values.
- Use real, specific terms: Docker, SAST, CI/CD, orchestration, sandbox, task graph, state store, approval gate.
- Section numbers use two digits (01 to 09). Stage ordinals use 1st through 6th.
- Alt text and ARIA labels are written for every SVG diagram.

---

## 12. Deliverables

Produce these in the project root.

1. `index.html`: semantic structure for all sections, no inline styles.
2. `styles/tokens.css`: the three themes and scales from section 4.
3. `styles/layout.css`: grid, stagger offsets, spine positioning, responsive rules.
4. `styles/components.css`: every component from section 5.
5. `scripts/mode.js`: theme switch, time readout, frame collapse, nav panel. Vanilla JavaScript only, no framework.
6. `assets/pipeline-graph.svg`, `assets/ink-spine.svg`, `assets/torn-edge.svg`: hand-authored SVG.
7. `docs/wireframe-notes.md`: a short list of layout decisions, the stagger offsets used per section, and any deviations from this file with the reason.
8. Screenshots of the full page in all three themes at 1440 px, and of the Paper theme at 390 px, captured in the browser and attached as artifacts.

Wireframe fidelity means grayscale structure plus the theme tokens. Image areas use flat tonal placeholders with a crosshair and a dimension label, such as "PREVIEW 960 x 540".

---

## 13. Acceptance Checklist

The agent verifies each item and reports pass or fail with evidence.

- [ ] The hero is near-black with a torn, irregular bottom edge, and the page below is paper-toned.
- [ ] An ink spine runs through sections 02 to 08 and blocks overlap it.
- [ ] Blocks are staggered left and right. No section uses a symmetric three-column grid.
- [ ] Index numerals with plus signs are present for sections 01 to 09.
- [ ] Ordinal labels appear in sections 03 and 09.
- [ ] Accent attribute panels appear in sections 02, 03, and 05.
- [ ] Window-style frames have title bars with a close "x" and square corners.
- [ ] Hero has a central node graph with exactly four callouts ending in square nodes.
- [ ] ModeSwitch cycles Paper, Void, Blueprint with no layout shift.
- [ ] Blueprint uses one blue only. Void uses one green accent only. Paper uses one crimson accent only.
- [ ] Only the three specified typeface roles are used.
- [ ] No emojis, no lorem ipsum, no banned phrases from section 3.
- [ ] No border radius above 2 px except the mode switch pill.
- [ ] No gradients and no blur effects.
- [ ] Keyboard navigation works across the whole page. Focus rings are visible.
- [ ] No horizontal scroll at 390, 768, and 1440 px.
- [ ] `prefers-reduced-motion` disables scroll movement.
- [ ] Every statement on the page traces back to section 1.

---

## 14. Agent Working Instructions

1. Read this file fully. Write a short plan listing the components and the order you will build them.
2. Build tokens and the three themes first. Confirm the theme switch works on a blank page.
3. Build components in isolation, then compose sections in page order.
4. After each section, open the page in the browser, capture a screenshot, and compare it with the matching wireframe in section 6.
5. If a decision is not covered here, choose the option closest to Reference A for layout and Reference B for interface detail, and record it in `docs/wireframe-notes.md`.
6. Finish by running the full checklist in section 13 and attach the results.
