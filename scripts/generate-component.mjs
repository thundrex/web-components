#!/usr/bin/env node

/**
 * thundrex Component Generator
 *
 * Creates a new component with all the necessary files and wiring:
 *   - src/components/<name>/<name>.ts     — Lit component
 *   - src/components/<name>/README.md     — Component documentation
 *   - docs/components/<name>.md           — VitePress docs page
 *   - Updates src/index.ts                — Barrel export
 *
 * Usage:
 *   node scripts/generate-component.mjs <name>
 *   npm run generate <name>
 *
 * Example:
 *   npm run generate tx-tooltip
 *
 * IMPORTANT: Always use this generator to add new components.
 * Do NOT manually create component files — this script ensures
 * everything is properly wired (exports, docs, sidebar).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const rawName = process.argv[2];

if (!rawName) {
  console.error('\n  Usage: npm run generate <component-name>\n');
  console.error('  Example: npm run generate tx-tooltip\n');
  process.exit(1);
}

const name = rawName.startsWith('tx-') ? rawName : `tx-${rawName}`;

if (!/^tx-[a-z][a-z0-9-]*$/.test(name)) {
  console.error(`\n  Invalid name "${name}". Must match tx-<lowercase-kebab>.\n`);
  process.exit(1);
}

const compDir = join(ROOT, 'src', 'components', name);
if (existsSync(compDir)) {
  console.error(`\n  Component "${name}" already exists at src/components/${name}/\n`);
  process.exit(1);
}

const pascal = name
  .split('-')
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  .join('');

const humanName = name
  .replace('tx-', '')
  .split('-')
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  .join(' ');

// ── 1. Component file ──────────────────────────────────────────────

const componentTs = `import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('${name}')
export class ${pascal} extends LitElement {
  static override styles = [
    txTokens,
    css\`
      :host {
        display: inline-block;
      }

      .${name.replace('tx-', '')} {
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        color: var(--tx-text);
        background: var(--tx-surface);
        border: 1px solid var(--tx-border);
        border-radius: var(--tx-radius);
        padding: var(--tx-space-3) var(--tx-space-4);
        transition: var(--tx-transition);
      }
    \`,
  ];

  @property({ type: String }) label = '';

  override render() {
    return html\`
      <div class="${name.replace('tx-', '')}" part="base">
        <slot>\${this.label}</slot>
      </div>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '${name}': ${pascal};
  }
}
`;

// ── 2. Component README ────────────────────────────────────────────

const readmeMd = `# ${name}

> TODO: Describe what this component does.

## Usage

\`\`\`html
<${name} label="Hello"></${name}>
\`\`\`

## Properties

| Property | Type     | Default | Description |
| -------- | -------- | ------- | ----------- |
| \`label\`  | \`string\` | \`''\`    | Label text  |

## Slots

| Slot      | Description      |
| --------- | ---------------- |
| (default) | Default content  |

## CSS Parts

| Part   | Description         |
| ------ | ------------------- |
| \`base\` | The root container  |
`;

// ── 3. VitePress docs page ─────────────────────────────────────────

const docsDir = join(ROOT, 'docs', 'components');
if (!existsSync(docsDir)) {
  mkdirSync(docsDir, { recursive: true });
}

const docsMd = `---
title: ${humanName}
---

<script setup>
import '../../src/components/${name}/${name}.ts';
</script>

# ${humanName}

<div class="component-readme">

<!--@include: ../../src/components/${name}/README.md{3,}-->

</div>

## Live Demo

<div class="demo-panel">
  <${name} label="Hello"></${name}>
</div>
`;

// ── 4. Update barrel export (src/index.ts) ─────────────────────────

const indexPath = join(ROOT, 'src', 'index.ts');
let indexContent = readFileSync(indexPath, 'utf-8');

const exportLine = `export { ${pascal} } from './components/${name}/${name}.js';`;

if (!indexContent.includes(exportLine)) {
  const themeExportIdx = indexContent.indexOf("export { setTheme");
  if (themeExportIdx !== -1) {
    indexContent =
      indexContent.slice(0, themeExportIdx) +
      exportLine +
      '\n' +
      indexContent.slice(themeExportIdx);
  } else {
    indexContent += '\n' + exportLine + '\n';
  }
  writeFileSync(indexPath, indexContent);
}

// ── 5. Update VitePress sidebar (docs/.vitepress/config.ts) ────────

const configPath = join(ROOT, 'docs', '.vitepress', 'config.ts');
if (existsSync(configPath)) {
  let configContent = readFileSync(configPath, 'utf-8');
  const sidebarEntry = `        { text: '${humanName}', link: '/components/${name}' },`;

  if (!configContent.includes(`'/components/${name}'`)) {
    const marker = '// __GENERATOR_COMPONENT_SLOT__';
    if (configContent.includes(marker)) {
      configContent = configContent.replace(
        marker,
        sidebarEntry + '\n' + '        ' + marker,
      );
      writeFileSync(configPath, configContent);
    }
  }
}

// ── Write files ────────────────────────────────────────────────────

mkdirSync(compDir, { recursive: true });
writeFileSync(join(compDir, `${name}.ts`), componentTs);
writeFileSync(join(compDir, 'README.md'), readmeMd);
writeFileSync(join(docsDir, `${name}.md`), docsMd);

console.log(`
  ✓ Created src/components/${name}/${name}.ts
  ✓ Created src/components/${name}/README.md
  ✓ Created docs/components/${name}.md
  ✓ Updated src/index.ts with ${pascal} export
  ✓ Updated VitePress sidebar (if config exists)

  Next: edit src/components/${name}/${name}.ts to build your component.
`);
