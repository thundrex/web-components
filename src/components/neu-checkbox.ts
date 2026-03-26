import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-checkbox')
export class NeuCheckbox extends LitElement {
  static override styles = [
    neuTokens,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }

      .box {
        position: relative;
        width: 28px;
        height: 28px;
        background: var(--neu-bg);
        border-radius: 8px;
        box-shadow: var(--neu-shadow-extruded);
        cursor: pointer;
        transition: var(--neu-transition);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
      }

      :host([checked]) .box {
        box-shadow: var(--neu-shadow-inset);
      }

      .checkmark {
        width: 14px;
        height: 14px;
        opacity: 0;
        transform: scale(0.5);
        transition: var(--neu-transition);
      }

      .checkmark svg {
        width: 100%;
        height: 100%;
      }

      :host([checked]) .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .box:focus-visible {
        outline: 2px solid var(--neu-accent);
        outline-offset: 4px;
      }

      .label {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--neu-text);
        user-select: none;
        cursor: pointer;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: String }) label = '';

  private _toggle() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('neu-change', { detail: { checked: this.checked }, bubbles: true, composed: true }));
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
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--neu-accent)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
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
    'neu-checkbox': NeuCheckbox;
  }
}
