import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('tx-checkbox')
export class TxCheckbox extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .box {
        position: relative;
        width: 18px;
        height: 18px;
        background: var(--tx-surface);
        border-radius: 4px;
        border: 1.5px solid #D1D5DB;
        cursor: pointer;
        transition: var(--tx-transition);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .box {
        background: var(--tx-primary);
        border-color: var(--tx-primary);
      }

      .checkmark {
        width: 12px;
        height: 12px;
        opacity: 0;
        transform: scale(0.5);
        transition: var(--tx-transition);
      }

      .checkmark svg {
        width: 100%;
        height: 100%;
      }

      :host([checked]) .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .box:hover {
        border-color: var(--tx-primary);
      }

      .box:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 2px;
      }

      .label {
        font-size: var(--tx-text-sm);
        font-weight: 500;
        color: var(--tx-text);
        user-select: none;
        cursor: pointer;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: String }) label = '';

  private _toggle() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('tx-change', { detail: { checked: this.checked }, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div
        class="box"
        role="checkbox"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${(e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this._toggle(); } }}
      >
        <span class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 12 10 18 20 6"></polyline>
          </svg>
        </span>
      </div>
      ${this.label ? html`<span class="label" @click=${this._toggle}>${this.label}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-checkbox': TxCheckbox;
  }
}
