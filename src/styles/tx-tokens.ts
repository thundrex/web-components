import { css } from 'lit';

/**
 * Inject token defaults into the document's :root so they naturally inherit
 * through Shadow DOM boundaries. setTheme() sets inline styles on
 * documentElement which override these defaults (higher specificity).
 */
if (typeof document !== 'undefined' && !document.getElementById('tx-defaults')) {
  const style = document.createElement('style');
  style.id = 'tx-defaults';
  style.textContent = `
    :root {
      /* ── Surface ── */
      --tx-bg: #F5F6FA;
      --tx-surface: #FFFFFF;
      --tx-surface-alt: #F8F9FC;

      /* ── Palette ── */
      --tx-accent: #F3B23A;
      --tx-accent-soft: rgba(243, 178, 58, 0.10);
      --tx-primary: #4A7CFF;
      --tx-primary-soft: rgba(74, 124, 255, 0.08);
      --tx-success: #22C55E;
      --tx-success-soft: rgba(34, 197, 94, 0.08);
      --tx-danger: #EF4444;
      --tx-danger-soft: rgba(239, 68, 68, 0.08);

      /* ── Text ── */
      --tx-text: #111827;
      --tx-text-secondary: #4B5563;
      --tx-text-muted: #9CA3AF;

      /* ── Border ── */
      --tx-border: #E5E7EB;
      --tx-border-focus: var(--tx-primary);

      /* ── Shadows ── */
      --tx-shadow-xs: 0 1px 2px rgba(0,0,0,0.05);
      --tx-shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
      --tx-shadow-md: 0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04);
      --tx-shadow-lg: 0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.03);
      --tx-shadow-xl: 0 20px 25px rgba(0,0,0,0.07), 0 8px 10px rgba(0,0,0,0.03);
      --tx-ring-focus: 0 0 0 3px var(--tx-primary-soft);

      /* ── Radius ── */
      --tx-radius-sm: 6px;
      --tx-radius: 8px;
      --tx-radius-lg: 12px;
      --tx-radius-xl: 16px;
      --tx-radius-pill: 999px;

      /* ── Spacing ── */
      --tx-space-1: 4px;
      --tx-space-2: 8px;
      --tx-space-3: 12px;
      --tx-space-4: 16px;
      --tx-space-5: 20px;
      --tx-space-6: 24px;
      --tx-space-8: 32px;
      --tx-space-10: 40px;
      --tx-space-12: 48px;
      --tx-space-16: 64px;

      /* ── Typography ── */
      --tx-text-xs: 0.75rem;
      --tx-text-sm: 0.875rem;
      --tx-text-base: 1rem;
      --tx-text-lg: 1.125rem;
      --tx-text-xl: 1.25rem;
      --tx-text-2xl: 1.5rem;
      --tx-text-3xl: 1.875rem;
      --tx-text-4xl: 2.25rem;

      /* ── Motion ── */
      --tx-transition: all 0.15s ease;
      --tx-transition-slow: all 0.25s ease;

      /* ── Font ── */
      --tx-font: 'Red Hat Text', system-ui, -apple-system, sans-serif;
      --tx-font-mono: 'Red Hat Mono', 'JetBrains Mono', monospace;
    }
  `;
  document.head.prepend(style);
}

export const txTokens = css`
  :host {
    font-family: var(--tx-font);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
