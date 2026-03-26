import { css } from 'lit';

export const neuTokens = css`
  :host {
    /* ─── Surface ─── */
    --neu-bg: #E2E6EE;

    /* ─── Accent / Typography ─── */
    --neu-accent: #F3B23A;
    --neu-text: #6B7A8D;
    --neu-text-muted: #9BA7B4;

    /* ─── Shadows ─── */
    --neu-light: rgba(255, 255, 255, 0.8);
    --neu-dark: rgba(184, 197, 214, 0.6);
    --neu-shadow-distance: 6px;
    --neu-shadow-blur: 12px;

    /* Extruded (raised) */
    --neu-shadow-extruded:
       calc(-1 * var(--neu-shadow-distance))
       calc(-1 * var(--neu-shadow-distance))
       var(--neu-shadow-blur) var(--neu-light),
       var(--neu-shadow-distance)
       var(--neu-shadow-distance)
       var(--neu-shadow-blur) var(--neu-dark);

    /* Hover (slightly lifted) */
    --neu-shadow-hover:
       calc(-1 * var(--neu-shadow-distance) - 2px)
       calc(-1 * var(--neu-shadow-distance) - 2px)
       calc(var(--neu-shadow-blur) + 4px) var(--neu-light),
       calc(var(--neu-shadow-distance) + 2px)
       calc(var(--neu-shadow-distance) + 2px)
       calc(var(--neu-shadow-blur) + 4px) var(--neu-dark);

    /* Recessed (pressed / inset) */
    --neu-shadow-inset:
       inset calc(-1 * var(--neu-shadow-distance))
             calc(-1 * var(--neu-shadow-distance))
             var(--neu-shadow-blur) var(--neu-light),
       inset var(--neu-shadow-distance)
             var(--neu-shadow-distance)
             var(--neu-shadow-blur) var(--neu-dark);

    /* ─── Geometry ─── */
    --neu-radius: 16px;
    --neu-radius-lg: 24px;
    --neu-radius-pill: 999px;

    /* ─── Transition ─── */
    --neu-transition: all 0.2s ease-in-out;

    /* ─── Font ─── */
    --neu-font: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;

    font-family: var(--neu-font);
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
