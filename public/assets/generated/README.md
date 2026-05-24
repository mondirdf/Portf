# Generated Asset Pipeline

1. Update prompts in `public/assets/generated/prompts.json`.
2. Run:

```bash
node scripts/prepare-generated-assets.mjs
```

This scaffolds per-use-case, per-ratio `_metadata.json` files and a top-level `manifest.json`.

## Directory layout

```txt
public/assets/generated/
  hero-background/{16x9,4x3,1x1,9x16}/
  feature-illustrations/{16x9,4x3,1x1,9x16}/
  testimonial-placeholders/{16x9,4x3,1x1,9x16}/
  blog-thumbnails/{16x9,4x3,1x1,9x16}/
```

## Naming

`{useCase}-{variant}-{ratio}-v{version}.{ext}`

Examples:
- `hero-background-core-16x9-v1.webp`
- `feature-illustrations-core-1x1-v1.jpg`

## Compression targets

- Preferred delivery format: `webp`
- Compatibility fallback: `jpg`
- Keep both listed in each `_metadata.json` output section.
