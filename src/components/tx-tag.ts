import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-tag')
export class TxTag extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-flex;
      }

      .tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        font-family: var(--tx-font);
        font-size: 0.82rem;
        font-weight: 500;
        border-radius: var(--tx-radius);
        background: var(--tx-bg);
        color: var(--tx-text);
        border: none;
        box-shadow: var(--tx-shadow-sm);
        transition: var(--tx-transition);
        white-space: nowrap;
      }

      :host([color='primary']) .tag { background: var(--tx-primary-soft); color: var(--tx-primary); border-color: transparent; }
      :host([color='accent']) .tag  { background: var(--tx-accent-soft); color: #C48A1A; border-color: transparent; }
      :host([color='success']) .tag { background: var(--tx-success-soft); color: #1E8E3E; border-color: transparent; }
      :host([color='danger']) .tag  { background: var(--tx-danger-soft); color: #D32F2F; border-color: transparent; }

      .close {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 0.7rem;
        line-height: 1;
        color: currentColor;
        opacity: 0.5;
        transition: var(--tx-transition);
      }

      .close:hover {
        opacity: 1;
        background: rgba(0, 0, 0, 0.08);
      }

      .close svg {
        width: 10px;
        height: 10px;
      }

      :host([size='sm']) .tag {
        padding: 3px 8px;
        font-size: 0.75rem;
        border-radius: var(--tx-radius-sm);
      }
    `,
  ];

  @property({ type: String, reflect: true }) color: 'default' | 'primary' | 'accent' | 'success' | 'danger' = 'default';
  @property({ type: Boolean }) removable = false;
  @property({ type: String, reflect: true }) size: 'sm' | 'md' = 'md';

  private _remove() {
    this.dispatchEvent(new CustomEvent('tx-remove', { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <span class="tag" part="tag">
        <slot></slot>
        ${this.removable ? html`
          <button class="close" @click=${this._remove} aria-label="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        ` : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-tag': TxTag;
  }
}
