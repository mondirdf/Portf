# Generated Image Art Direction

## 1) Mood + brand character
- Primary mood keywords: **clean, futuristic, elegant, premium**.
- Visual tone: calm, high-end, restrained motion, minimal visual noise.
- Detail level: medium abstraction with clear hierarchy, no over-rendered micro-textures.

## 2) Color bias from design tokens
Color usage should map to the portfolio token system in `src/tokens.css`:

- Base darks: `--color-bg-base` `#040b22`, `--color-bg-elevated` `#081834`, `--color-bg-overlay` `#06112b`
- Gradient spine: `--color-bg-gradient-start` `#040b22`, `--color-bg-gradient-mid` `#0a1d43`, `--color-bg-gradient-end` `#060f2b`
- Accent family: `--color-accent` `#7dd3fc`, `--color-accent-strong` `#38bdf8`
- Supporting atmospheric hues: `--color-blob-cyan`, `--color-blob-indigo`, `--color-blob-blue`

### Palette rules
- 70–80% deep navy / indigo base.
- 15–20% cool mid-tones.
- 5–10% cyan/sky accent highlights.
- Avoid warm color cast except sparse warning/story cues in blog thumbnails.

## 3) Lighting + composition rules
### Lighting
- Soft volumetric key light with controlled bloom.
- Low-contrast fill; preserve deep blacks.
- Rim highlights in cyan/blue only where needed for separation.
- No harsh hotspots, blown highlights, or lens dirt/grain overlays.

### Composition
- Keep clear negative space for copy overlays (especially hero/blog).
- Use diagonal or radial flow leading eye toward center-left or center-right focal zone.
- Avoid busy edge detail near safe text zones.
- Depth via layered gradients and subtle blur, not cluttered objects.

## 4) Subject constraints
- No noisy backgrounds.
- No over-detailed clutter.
- No illegible micro-elements, fake UI gibberish, or watermark-like artifacts.
- Prefer 1–2 primary subjects max with clear silhouette.

## 5) Prompt schema (apply to all use-cases)
Use this structure:

```txt
Use case: <slug>
Asset type: <destination placement>
Primary request: <what to depict>
Mood keywords: clean, futuristic, elegant, premium
Color bias: deep navy/indigo base with cyan accents based on token palette
Lighting style: soft volumetric, controlled bloom, subtle rim light
Composition: strong focal hierarchy, preserve negative text-safe space
Subject constraints: no noisy background, no clutter, no watermark/text artifacts
Aspect ratio: <16:9 | 4:3 | 1:1 | 9:16>
```
