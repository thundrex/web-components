import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('tx-toggle')
export class TxToggle extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .track {
        position: relative;
        width: 40px;
        height: 22px;
        background: #D1D5DB;
        border-radius: var(--tx-radius-pill);
        cursor: pointer;
        transition: var(--tx-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .track {
        background: var(--tx-primary);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff;
        box-shadow: var(--tx-shadow-xs);
        transition: var(--tx-transition);
      }

      :host([checked]) .thumb {
        left: 20px;
      }

      .track:focus-visible {
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
        class="track"
        role="switch"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${(e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this._toggle(); } }}
      >
        <div class="thumb"></div>
      </div>
      ${this.label ? html`<span class="label" @click=${this._toggle}>${this.label}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-toggle': TxToggle;
  }
}
