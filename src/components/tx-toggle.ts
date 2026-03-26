import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

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
        width: 44px;
        height: 24px;
        background: var(--tx-bg);
        border-radius: var(--tx-radius-pill);
        box-shadow: var(--tx-shadow-inset-sm);
        cursor: pointer;
        transition: var(--tx-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .track {
        background: var(--tx-primary);
        box-shadow: inset 1px 1px 3px rgba(0,0,0,0.15), inset -1px -1px 3px rgba(255,255,255,0.08);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--tx-bg);
        box-shadow: var(--tx-shadow-sm);
        transition: var(--tx-transition);
      }

      :host([checked]) .thumb {
        left: 22px;
        background: #fff;
      }

      .track:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 3px;
      }

      .label {
        font-size: 0.875rem;
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
