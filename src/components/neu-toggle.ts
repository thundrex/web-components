import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-toggle')
export class NeuToggle extends LitElement {
  static override styles = [
    neuTokens,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        gap: 12px;
      }

      .track {
        position: relative;
        width: 56px;
        height: 30px;
        background: var(--neu-bg);
        border-radius: var(--neu-radius-pill);
        box-shadow: var(--neu-shadow-inset);
        cursor: pointer;
        transition: var(--neu-transition);
        -webkit-tap-highlight-color: transparent;
      }

      .thumb {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--neu-bg);
        box-shadow: var(--neu-shadow-extruded);
        transition: var(--neu-transition);
      }

      :host([checked]) .thumb {
        left: 30px;
        background: var(--neu-accent);
        box-shadow:
          0 2px 6px rgba(243, 178, 58, 0.4);
      }

      .track:focus-visible {
        outline: 2px solid var(--neu-accent);
        outline-offset: 4px;
      }

      .label {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--neu-text);
        user-select: none;
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
        class="track"
        role="switch"
        tabindex="0"
        aria-checked=${this.checked}
        @click=${this._toggle}
        @keydown=${(e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this._toggle(); } }}
      >
        <div class="thumb"></div>
      </div>
      ${this.label ? html`<span class="label">${this.label}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neu-toggle': NeuToggle;
  }
}
