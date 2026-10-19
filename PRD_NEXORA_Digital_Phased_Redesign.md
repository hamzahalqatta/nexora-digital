# PRD --- NEXORA Digital Website Modernization

**Document type:** Product Requirements Document (PRD)\
**Purpose:** Guide Antigravity through a controlled, phased redesign of
the existing website.\
**Working rule:** Implement one phase at a time. Do not start the next
phase until the current phase is reviewed and explicitly approved.

------------------------------------------------------------------------

## 1. Project Overview

### Project name

NEXORA Digital --- Website Refresh

### Objective

Modernize the existing single-page agency/portfolio website while
preserving its useful content structure. Improve brand identity,
responsive behavior, accessibility, consistency, and maintainability
without making a large, uncontrolled set of changes in one pass.

### Reference

Use the user-provided screenshot as a visual and structural reference.
Treat it as a guide, not as a requirement to reproduce every pixel.

### Fictional business

**NEXORA Digital** is a fictional digital studio specializing in: -
Website design and development - Front-end engineering - UI/UX design -
Responsive digital experiences

### Target audience

Small and medium-sized businesses, founders, and teams looking for a
professional digital presence.

------------------------------------------------------------------------

## 2. Scope

### In scope

-   Review the existing repository and identify the current framework,
    entry points, styling approach, assets, and available scripts.
-   Update the fictional brand identity and website copy.
-   Improve layout and responsive behavior across mobile, tablet, and
    desktop.
-   Implement an accessible mobile navigation menu using the project's
    existing technology.
-   Standardize buttons, spacing, typography, icons, and common
    components.
-   Optimize image formats and loading behavior where practical.
-   Improve accessibility, performance, and maintainability.
-   Validate each phase before proceeding.

### Out of scope unless separately approved

-   Rebuilding the project in a different framework.
-   Adding a backend, CMS, authentication, database, or payment system.
-   Introducing new dependencies without explaining why and requesting
    approval.
-   Replacing all images with generated images without review.
-   Removing existing sections or features without approval.
-   Deploying the website, changing hosting, or modifying production
    credentials.
-   Rewriting the entire application in a single pass.

------------------------------------------------------------------------

## 3. Brand and Design Direction

### Brand name

**NEXORA Digital**

### Brand attributes

Modern, capable, clear, dependable, and technology-focused.

### Suggested visual direction

-   Primary: electric blue
-   Dark neutral: deep navy
-   Background: white or very light neutral
-   Text: high-contrast charcoal/navy
-   Accent: restrained cyan, used sparingly
-   Visual style: clean layouts, generous whitespace, consistent
    alignment, restrained shadows, and clear hierarchy

Do not introduce a large number of colors, gradients, animations, or
decorative effects. Keep the design professional and readable.

### Typography

-   Use a clear, modern font appropriate to the site's language.
-   If the site is Arabic or bilingual, ensure the selected font
    supports Arabic well and verify RTL behavior where applicable.
-   Use responsive type sizes, preferably with CSS `clamp()` where
    suitable.
-   Maintain readable body text and consistent heading levels.

### Image policy

-   Use **WebP or AVIF** for photographic images when the available
    source and build pipeline support them.
-   Use **SVG** for logos and simple vector icons where appropriate.
-   Do not convert photographs to SVG.
-   Preserve image quality, aspect ratio, meaningful alt text, and
    appropriate cropping.
-   Prefer local assets already in the repository. If new assets are
    required, document the source or placeholder used.
-   Do not invent file paths or reference assets that do not exist.

------------------------------------------------------------------------

## 4. Existing Page Structure to Review

Inspect the current implementation before changing it. The reference
page appears to contain these sections:

1.  Header/navigation
2.  Hero/banner
3.  About
4.  Team
5.  Portfolio/work gallery
6.  Testimonials
7.  Blog
8.  Contact form
9.  Footer/copyright

Retain these sections unless repository inspection shows they do not
exist or the user approves a structural change. Replace generic
placeholder copy with suitable NEXORA Digital copy where practical, but
avoid fabricating customer testimonials, credentials, or measurable
business claims. Mark sample team members, blog posts, and testimonials
as fictional/demo content if retained.

------------------------------------------------------------------------

## 5. Global Implementation Rules for Antigravity

1.  **Work in phases.** Complete only the currently authorized phase.
2.  **Inspect before editing.** First identify the framework, project
    structure, styling system, existing assets, scripts, and current
    state.
3.  **Do not overwrite blindly.** Preserve working behavior and
    unrelated code.
4.  **Keep changes scoped.** Avoid opportunistic refactors outside the
    active phase.
5.  **Use existing conventions.** Follow the repository's framework and
    patterns unless there is a clear reason not to.
6.  **Avoid unnecessary dependencies.** Prefer native HTML, CSS, and
    JavaScript or the existing framework.
7.  **Do not claim tests passed unless they were run.** Report commands
    and actual outcomes.
8.  **No fake functionality.** Forms, buttons, links, and menu controls
    must behave as described. If backend submission is not configured,
    clearly indicate the limitation and implement only a safe front-end
    state.
9.  **Accessibility matters.** Use semantic HTML, visible focus styles,
    keyboard support, appropriate labels, and adequate contrast.
10. **Protect user data and secrets.** Never expose environment
    variables, tokens, credentials, or private configuration in reports.
11. **Report changed files.** At the end of every phase, list modified
    files and explain the reason for each.
12. **Stop at the phase boundary.** Do not continue automatically into
    the next phase.
13. **Ask before expanding scope.** If a requirement cannot be
    implemented safely or conflicts with the current architecture,
    explain the issue and ask before making a broader change.
14. **No unrelated redesign.** Keep each phase focused on its stated
    deliverables.

------------------------------------------------------------------------

## 6. Phased Execution Plan

## Phase 0 --- Repository Audit and Baseline

**Goal:** Understand the project before modifying it.

### Tasks

-   Inspect the repository structure and identify the framework and
    entry points.
-   Identify global styles, component styles, page components, asset
    directories, and available scripts.
-   Determine whether the page is already responsive and identify the
    main defects.
-   Identify the current navigation implementation and whether a contact
    form has working submission behavior.
-   Run the existing build, lint, and test commands if available.
-   Record any existing errors before changes.

### Deliverables

-   A short architecture summary.
-   A list of relevant files and current behavior.
-   A prioritized issue list grouped by visual design, responsive
    layout, navigation, accessibility, and assets.
-   Baseline test/build results, including any pre-existing failures.

### Acceptance criteria

-   No application code or visual styles are changed in this phase.
-   Findings are based on the actual repository, not assumptions.
-   Antigravity stops and requests approval before Phase 1.

------------------------------------------------------------------------

## Phase 1 --- Brand Identity and Content

**Goal:** Establish NEXORA Digital's identity without restructuring the
page.

### Tasks

-   Replace the old/generic site identity with NEXORA Digital where
    relevant.
-   Update page title and metadata if the project already supports them.
-   Replace generic headings and placeholder descriptions with concise
    copy appropriate to a digital studio.
-   Define reusable brand color and typography tokens using the existing
    styling approach.
-   Keep the existing page structure and layout substantially unchanged.
-   Avoid inventing real customer names, testimonials, awards, or
    performance statistics.

### Deliverables

-   Updated brand text and page metadata.
-   A small, consistent set of brand design tokens.
-   A concise summary of changed content and files.

### Acceptance criteria

-   Brand naming is consistent.
-   Existing sections and working interactions remain present.
-   No broad layout redesign occurs in this phase.
-   Run the relevant checks and report results.
-   Stop for approval before Phase 2.

------------------------------------------------------------------------

## Phase 2 --- Responsive Layout and Typography

**Goal:** Make the current page readable and usable on mobile, tablet,
and desktop.

### Tasks

-   Audit and improve breakpoints and responsive containers.
-   Correct overflow, horizontal scrolling, awkward wrapping, and
    misaligned elements.
-   Stack multi-column layouts on small screens in a sensible reading
    order.
-   Adjust typography, spacing, image sizing, and alignment for each
    viewport.
-   Use responsive CSS such as `clamp()`, flexible grids, and flex
    layouts where appropriate.
-   Ensure forms and cards fit within the viewport.
-   Preserve the desktop layout's core visual hierarchy.

### Required viewport checks

-   Small mobile: approximately 320--375 CSS px
-   Typical mobile: approximately 390--430 CSS px
-   Tablet: approximately 768 CSS px
-   Desktop: approximately 1280 CSS px or wider

### Acceptance criteria

-   No unintended horizontal overflow at the tested widths.
-   Text remains readable and controls remain usable.
-   Images do not stretch or unexpectedly crop.
-   Cards and columns reflow logically.
-   Existing navigation behavior is not replaced in this phase unless a
    change is necessary to fix a critical responsive defect; document
    any exception.
-   Stop for approval before Phase 3.

------------------------------------------------------------------------

## Phase 3 --- Mobile Navigation Menu

**Goal:** Add an accessible, functional mobile menu.

### Tasks

-   Keep the existing desktop navigation pattern unless a change is
    required for consistency.
-   At the mobile breakpoint, replace the visible navigation links with
    a menu toggle button.
-   Use the project's existing JavaScript or framework conventions.
-   Toggle the menu open and closed.
-   Close the menu after a navigation link is selected.
-   Support keyboard operation and visible focus.
-   Set appropriate `aria-expanded`, `aria-controls`, and accessible
    button text.
-   Support Escape to close the menu when appropriate.
-   Prevent the menu from obscuring content or causing unwanted
    horizontal overflow.
-   Avoid adding a navigation library unless approved.

### Acceptance criteria

-   The toggle works repeatedly without getting stuck.
-   The state communicated to assistive technology matches the visible
    state.
-   Menu links work and the menu closes after selection.
-   Desktop navigation still works.
-   Keyboard navigation and focus visibility are verified.
-   Stop for approval before Phase 4.

------------------------------------------------------------------------

## Phase 4 --- Unified Components and Section Styling

**Goal:** Make the page visually consistent.

### Tasks

-   Establish one shared button style for primary, secondary, and any
    necessary text/utility actions.
-   Standardize button height, padding, radius, typography, hover,
    active, disabled, and focus states.
-   Unify card spacing, border treatment, corner radius, and shadows.
-   Standardize heading hierarchy, section spacing, content widths, and
    alignment.
-   Refine the About, Team, Work, Testimonials, Blog, and Contact
    sections without changing their purpose.
-   Make social icons visually consistent and give icon-only links
    accessible names.
-   Reduce the visual prominence and font size of footer copyright text
    while keeping it readable.

### Acceptance criteria

-   Buttons look and behave consistently across the page.
-   Section headings and vertical spacing follow a coherent system.
-   Cards align appropriately at common breakpoints.
-   Footer copyright is smaller than body copy but still legible.
-   No unrelated sections are removed.
-   Stop for approval before Phase 5.

------------------------------------------------------------------------

## Phase 5 --- Image and Asset Optimization

**Goal:** Improve asset efficiency without reducing visual quality.

### Tasks

-   Inventory images and icons currently used.
-   Identify photographic assets suitable for WebP or AVIF conversion.
-   Use SVG for logos and simple vector icons where appropriate.
-   Preserve existing asset paths or update every reference if a path
    must change.
-   Add useful alt text for informative images and empty alt text for
    purely decorative images.
-   Set image dimensions or aspect ratios to reduce layout shift.
-   Use lazy loading for below-the-fold images where appropriate.
-   Avoid lazy-loading the main hero image if doing so would delay the
    primary visual content.
-   Remove only assets confirmed to be unused.

### Acceptance criteria

-   No broken image or icon references.
-   Photographs remain photographs; no inappropriate SVG conversion.
-   Images render at suitable sizes and retain aspect ratios.
-   Alt text reflects the image's purpose.
-   Any asset conversion and size changes are reported.
-   Stop for approval before Phase 6.

------------------------------------------------------------------------

## Phase 6 --- Accessibility, Interaction, and Contact Form Review

**Goal:** Improve usability and ensure visible controls have meaningful
behavior.

### Tasks

-   Check heading order, semantic landmarks, labels, keyboard access,
    focus states, and contrast.
-   Check links and buttons for clear purpose.
-   Check reduced-motion preferences if animations are present.
-   Verify the contact form's labels, required fields, input types, and
    validation.
-   Confirm whether a backend or form provider exists before changing
    submission logic.
-   If no submission service exists, do not imply messages are actually
    delivered. Provide clear validation and a truthful success/error
    state only for behavior that is genuinely implemented.
-   Check that menu and other interactions are usable on touch screens.

### Acceptance criteria

-   Main page functions are keyboard accessible.
-   Form controls have clear labels and usable validation.
-   No fake backend submission or misleading success message is
    introduced.
-   Report any accessibility issues that cannot be fully resolved in
    this phase.
-   Stop for approval before Phase 7.

------------------------------------------------------------------------

## Phase 7 --- Final QA and Handoff

**Goal:** Verify the integrated result and document the outcome.

### Tasks

-   Run the project's available build, lint, and test commands.
-   Check the required mobile, tablet, and desktop viewport sizes.
-   Recheck navigation, buttons, links, image loading, and form
    behavior.
-   Check the browser console if browser tooling is available.
-   Review the diff for accidental changes, dead code, broken
    references, and unrelated edits.
-   Confirm that no secrets or local environment data were committed.
-   Do not deploy without explicit approval.

### Deliverables

-   Summary of completed work.
-   List of files changed.
-   Commands executed and actual results.
-   Known limitations or outstanding issues.
-   Suggested next improvements, separated from completed work.

### Acceptance criteria

-   No known broken assets or critical navigation defects.
-   Build/tests are reported accurately.
-   Remaining limitations are documented.
-   Final handoff is complete; no further changes are made without a new
    request.

------------------------------------------------------------------------

## 7. Phase Completion Report Template

At the end of each phase, provide this report and then stop:

1.  **Phase completed:** Name and number.
2.  **Changes made:** Brief summary.
3.  **Files changed:** File path and reason.
4.  **Validation performed:** Commands, viewport checks, and interaction
    checks actually completed.
5.  **Results:** Passed, failed, or not run, with relevant details.
6.  **Known issues:** Anything unresolved or requiring a decision.
7.  **Next phase proposal:** What would be done next, without executing
    it.
8.  **Approval request:** Ask the user whether to proceed.

Do not begin the next phase until the user explicitly approves.

------------------------------------------------------------------------

## 8. Initial Instruction to Antigravity

Start with **Phase 0 only**. Inspect the actual project and report your
findings. Do not edit code, styles, content, assets, dependencies, or
configuration during Phase 0. After presenting the audit and baseline
results, stop and wait for approval to begin Phase 1.

If the current project differs from the screenshot or some requested
behavior already exists, report that fact and adapt the plan based on
the repository rather than duplicating functionality.
