import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

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
        padding: 8px 16px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        font-weight: 500;
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        cursor: pointer;
        transition: var(--tx-transition);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
      }

      button:hover {
        background: var(--tx-surface-alt);
        border-color: #D1D5DB;
      }

      button:active {
        background: var(--tx-surface-alt);
      }

      button:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      button[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([variant='primary']) button {
        background: var(--tx-primary);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='primary']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='primary']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='accent']) button {
        background: var(--tx-accent);
        color: #fff;
        border-color: transparent;
        box-shadow: var(--tx-shadow-xs);
      }

      :host([variant='accent']) button:hover {
        filter: brightness(1.08);
        box-shadow: var(--tx-shadow-sm);
      }

      :host([variant='accent']) button:active {
        filter: brightness(0.95);
        box-shadow: none;
      }

      :host([variant='ghost']) button {
        background: transparent;
        border-color: transparent;
        color: var(--tx-text-secondary);
      }

      :host([variant='ghost']) button:hover {
        background: var(--tx-surface-alt);
        color: var(--tx-text);
      }

      :host([size='sm']) button {
        padding: 5px 10px;
        font-size: var(--tx-text-xs);
        border-radius: var(--tx-radius-sm);
      }

      :host([size='lg']) button {
        padding: 12px 24px;
        font-size: var(--tx-text-base);
        border-radius: var(--tx-radius);
      }

      :host([pill]) button {
        border-radius: var(--tx-radius-pill);
      }

      :host([icon-only]) button {
        padding: 8px;
        border-radius: 50%;
        aspect-ratio: 1;
      }

      :host([icon-only][size='sm']) button {
        padding: 5px;
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
