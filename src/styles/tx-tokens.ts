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
      --tx-bg: #E8ECF0;
      --tx-surface: #E8ECF0;
      --tx-surface-alt: #DFE3E8;

      /* ── Palette ── */
      --tx-accent: #F3B23A;
      --tx-accent-soft: rgba(243, 178, 58, 0.12);
      --tx-primary: #4A7CFF;
      --tx-primary-soft: rgba(74, 124, 255, 0.10);
      --tx-success: #34C759;
      --tx-success-soft: rgba(52, 199, 89, 0.10);
      --tx-danger: #FF3B30;
      --tx-danger-soft: rgba(255, 59, 48, 0.10);

      /* ── Text ── */
      --tx-text: #1A2138;
      --tx-text-secondary: #4D5B6A;
      --tx-text-muted: #6B7886;

      /* ── Border ── */
      --tx-border: rgba(0, 0, 0, 0.06);
      --tx-border-focus: var(--tx-primary);

      /* ── Neumorphic shadows ── */
      --tx-neu-dark: rgba(174,182,196,0.18);
      --tx-neu-light: rgba(255,255,255,0.65);

      --tx-shadow-sm:
        2px 2px 5px var(--tx-neu-dark),
        -2px -2px 5px var(--tx-neu-light);
      --tx-shadow-md:
        4px 4px 8px var(--tx-neu-dark),
        -4px -4px 8px var(--tx-neu-light);
      --tx-shadow-lg:
        6px 6px 14px var(--tx-neu-dark),
        -6px -6px 14px var(--tx-neu-light);
      --tx-shadow-inset:
        inset 2px 2px 5px var(--tx-neu-dark),
        inset -2px -2px 5px var(--tx-neu-light);
      --tx-shadow-inset-sm:
        inset 1px 1px 3px var(--tx-neu-dark),
        inset -1px -1px 3px var(--tx-neu-light);

      /* ── Radius ── */
      --tx-radius-sm: 8px;
      --tx-radius: 12px;
      --tx-radius-lg: 16px;
      --tx-radius-xl: 20px;
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
      --tx-transition: all 0.2s ease;
      --tx-transition-slow: all 0.3s ease;

      /* ── Font ── */
      --tx-font: 'Red Hat Text', system-ui, -apple-system, sans-serif;
      --tx-font-mono: 'Red Hat Mono', 'JetBrains Mono', monospace;
    }
  `;
  document.head.prepend(style);
}

/** Shared host styles — only layout/font, no token re-declarations */
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
