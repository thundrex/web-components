import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-button')
export class TxButton extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-block;
      }

      button {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 24px;
        background: var(--tx-bg);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        border-radius: var(--tx-radius);
        border: none;
        box-shadow: var(--tx-shadow-sm);
        cursor: pointer;
        transition: var(--tx-transition);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
      }

      button:hover {
        box-shadow: var(--tx-shadow-md);
      }

      button:active {
        box-shadow: var(--tx-shadow-inset-sm);
      }

      button:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      button[disabled] {
        opacity: 0.45;
        pointer-events: none;
      }

      /* ── Variants ── */
      :host([variant='primary']) button {
        background: var(--tx-primary);
        color: #fff;
        box-shadow: 2px 2px 6px rgba(50,90,200,0.25), -2px -2px 5px rgba(255,255,255,0.4);
      }

      :host([variant='primary']) button:hover {
        box-shadow: 3px 3px 8px rgba(50,90,200,0.3), -3px -3px 7px rgba(255,255,255,0.5);
      }

      :host([variant='primary']) button:active {
        box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.08);
      }

      :host([variant='accent']) button {
        background: var(--tx-accent);
        color: #fff;
        box-shadow: 2px 2px 6px rgba(200,140,30,0.25), -2px -2px 5px rgba(255,255,255,0.4);
      }

      :host([variant='accent']) button:hover {
        box-shadow: 3px 3px 8px rgba(200,140,30,0.3), -3px -3px 7px rgba(255,255,255,0.5);
      }

      :host([variant='accent']) button:active {
        box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(255,255,255,0.08);
      }

      :host([variant='ghost']) button {
        background: transparent;
        box-shadow: none;
        color: var(--tx-text-secondary);
      }

      :host([variant='ghost']) button:hover {
        background: var(--tx-surface-alt);
        color: var(--tx-text);
        box-shadow: var(--tx-shadow-sm);
      }

      /* ── Sizes ── */
      :host([size='sm']) button {
        padding: 7px 14px;
        font-size: 0.8rem;
        border-radius: var(--tx-radius-sm);
      }

      :host([size='lg']) button {
        padding: 14px 32px;
        font-size: 1rem;
        border-radius: var(--tx-radius-lg);
      }

      :host([pill]) button {
        border-radius: var(--tx-radius-pill);
      }

      :host([icon-only]) button {
        padding: 10px;
        border-radius: 50%;
        aspect-ratio: 1;
      }

      :host([icon-only][size='sm']) button {
        padding: 7px;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) variant: 'default' | 'primary' | 'accent' | 'ghost' = 'default';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) pill = false;
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' }) iconOnly = false;

  override render() {
    return html`
      <button ?disabled=${this.disabled} part="button">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-button': TxButton;
  }
}
