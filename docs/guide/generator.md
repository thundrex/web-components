# Component Generator

**Always use the generator to create new components.** This applies to both humans and AI assistants.

The generator is the single source of truth for wiring up a new component. It automatically:

1. Creates `src/components/<name>/<name>.ts` with base Lit component and design tokens
2. Creates `src/components/<name>/README.md` with API documentation template
3. Creates `docs/components/<name>.md` with a VitePress docs page
4. Updates `src/index.ts` with the barrel export
5. Updates the VitePress sidebar in `docs/.vitepress/config.ts`

## Usage

```bash
npm run generate <component-name>
```

The name will be automatically prefixed with `tx-` if not already:

```bash
npm run generate tooltip        # creates tx-tooltip
npm run generate tx-tooltip     # same result
```

## Example

```bash
npm run generate tx-dialog
```

Output:

```
  ✓ Created src/components/tx-dialog/tx-dialog.ts
  ✓ Created src/components/tx-dialog/README.md
  ✓ Created docs/components/tx-dialog.md
  ✓ Updated src/index.ts with TxDialog export
  ✓ Updated VitePress sidebar (if config exists)
```

Then edit `src/components/tx-dialog/tx-dialog.ts` to build your component.

## Why Use the Generator?

Manually creating component files risks:

- Forgetting to add the barrel export in `src/index.ts`
- Missing the VitePress docs page
- Inconsistent file structure or naming
- Missing the sidebar entry

The generator eliminates all of these. **Do not skip it.**

::: warning For AI Assistants
If you are an AI working on this codebase, **always** run `npm run generate <name>` before implementing a new component. Do not manually create component files, as you will miss wiring steps.
:::
