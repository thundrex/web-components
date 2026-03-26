import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-badge')
export class TxBadge extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 3px 10px;
        font-family: var(--tx-font);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        border-radius: var(--tx-radius-pill);
        white-space: nowrap;
        line-height: 1.6;
        background: var(--tx-bg);
        color: var(--tx-text-secondary);
        box-shadow:
          2px 2px 4px var(--tx-neu-dark),
          -2px -2px 4px var(--tx-neu-light);
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        flex-shrink: 0;
      }

      :host([color='primary']) .badge { background: var(--tx-primary-soft); color: var(--tx-primary); }
      :host([color='accent']) .badge  { background: var(--tx-accent-soft); color: #C48A1A; }
      :host([color='success']) .badge { background: var(--tx-success-soft); color: #1E8E3E; }
      :host([color='danger']) .badge  { background: var(--tx-danger-soft); color: #D32F2F; }

      :host([size='lg']) .badge {
        padding: 5px 14px;
        font-size: 0.78rem;
      }
    `,
  ];

  @property({ type: String, reflect: true }) color: 'default' | 'primary' | 'accent' | 'success' | 'danger' = 'default';
  @property({ type: Boolean }) dot = false;
  @property({ type: String, reflect: true }) size: 'md' | 'lg' = 'md';

  override render() {
    return html`
      <span class="badge" part="badge">
        ${this.dot ? html`<span class="dot"></span>` : ''}
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-badge': TxBadge;
  }
}
