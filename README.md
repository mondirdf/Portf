# Portf

## Motion Guidelines

### Timing Constraints
- **Micro interactions:** `150ms–250ms` (standardized at `200ms`).
- **Section transitions on scroll:** `300ms–500ms` (standardized at `420ms`).
- **Decorative ambient motion:** slow loop (`14s+`) and non-blocking.

### Easing
- Use **cubic-bezier** curves for natural acceleration and deceleration.
- Default interaction curve: `cubic-bezier(0.22, 1, 0.36, 1)`.

### Reusable Motion Utilities
- Entrance animations:
  - `.motion-enter-fade-up`
  - `.motion-enter-scale-in`
  - `.motion-enter-slide`
- Hover states:
  - `.motion-hover-lift`
  - `.motion-hover-glow`
  - `.motion-hover-parallax`
- Section transitions:
  - `.motion-section-transition`
- Button feedback:
  - `.motion-button-feedback` (press/release via `:active` transform)

### Performance Rules
- Animate only **GPU-friendly properties**:
  - `transform`
  - `opacity`
- Avoid layout-triggering animation targets (e.g., width, height, top/left, margin).
- Use `will-change: transform, opacity` on frequently animated elements.

### Accessibility
- Respect `prefers-reduced-motion: reduce`:
  - Disable non-essential animation.
  - Disable floating particles.
  - Preserve content visibility and interactivity with near-instant transitions.
