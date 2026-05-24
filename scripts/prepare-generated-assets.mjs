import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const baseDir = path.join(root, 'public/assets/generated');
const promptPath = path.join(baseDir, 'prompts.json');

const promptData = JSON.parse(await readFile(promptPath, 'utf8'));
const timestamp = new Date().toISOString();

const manifest = {
  generatedAt: timestamp,
  artDirectionRef: promptData.artDirectionRef,
  namingConvention: promptData.namingConvention,
  formats: ['webp', 'jpg'],
  items: []
};

for (const [useCase, spec] of Object.entries(promptData.useCases)) {
  for (const ratio of Object.keys(promptData.ratios)) {
    const dir = path.join(baseDir, useCase, ratio);
    await mkdir(dir, { recursive: true });

    const metadata = {
      useCase,
      slug: spec.slug,
      ratio,
      size: promptData.ratios[ratio],
      prompt: spec.template.replace('{{ratio}}', ratio),
      outputs: {
        webp: `${useCase}-core-${ratio}-v1.webp`,
        jpg: `${useCase}-core-${ratio}-v1.jpg`
      },
      status: 'pending-generation'
    };

    await writeFile(path.join(dir, '_metadata.json'), JSON.stringify(metadata, null, 2) + '\n');
    manifest.items.push(metadata);
  }
}

await writeFile(path.join(baseDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${manifest.items.length} asset slots under public/assets/generated.`);
