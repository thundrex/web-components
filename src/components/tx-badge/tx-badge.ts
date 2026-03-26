import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

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
        padding: 2px 8px;
        font-family: var(--tx-font);
        font-size: var(--tx-text-xs);
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: var(--tx-radius-pill);
        white-space: nowrap;
        line-height: 1.6;
        background: var(--tx-surface-alt);
        color: var(--tx-text-secondary);
        border: 1px solid var(--tx-border);
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        flex-shrink: 0;
      }

      :host([color='primary']) .badge { background: var(--tx-primary-soft); color: #3B63CC; border-color: transparent; }
      :host([color='accent']) .badge  { background: var(--tx-accent-soft); color: #B8891E; border-color: transparent; }
      :host([color='success']) .badge { background: var(--tx-success-soft); color: #16803C; border-color: transparent; }
      :host([color='danger']) .badge  { background: var(--tx-danger-soft); color: #DC2626; border-color: transparent; }

      :host([size='lg']) .badge {
        padding: 3px 12px;
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
