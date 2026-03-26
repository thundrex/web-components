import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-input')
export class NeuInput extends LitElement {
  static override styles = [
    neuTokens,
    css`
      :host {
        display: block;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      label {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--neu-accent);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding-left: 4px;
      }

      .field {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        all: unset;
        width: 100%;
        padding: 14px 20px;
        background: var(--neu-bg);
        color: var(--neu-text);
        font-family: var(--neu-font);
        font-size: 1rem;
        font-weight: 500;
        border-radius: var(--neu-radius);
        box-shadow: var(--neu-shadow-inset);
        transition: var(--neu-transition);
      }

      input::placeholder {
        color: var(--neu-text-muted);
      }

      input:focus {
        box-shadow:
          var(--neu-shadow-inset),
          0 0 0 2px var(--neu-accent);
      }

      :host([search]) .field::before {
        content: '';
        position: absolute;
        left: 16px;
        width: 16px;
        height: 16px;
        border: 2px solid var(--neu-text-muted);
        border-radius: 50%;
        pointer-events: none;
      }

      :host([search]) .field::after {
        content: '';
        position: absolute;
        left: 30px;
        top: calc(50% + 4px);
        width: 2px;
        height: 8px;
        background: var(--neu-text-muted);
        transform: rotate(-45deg);
        pointer-events: none;
      }

      :host([search]) input {
        padding-left: 44px;
      }
    `,
  ];

  @property({ type: String }) label = '';
  @property({ type: String }) name = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) type = 'text';
  @property({ type: Boolean, reflect: true }) search = false;

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent('neu-input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="wrapper">
        ${this.label ? html`<label>${this.label}</label>` : ''}
        <div class="field">
          <input
            part="input"
            type=${this.search ? 'search' : this.type}
            name=${this.name || this.label?.toLowerCase().replaceAll(/\s+/g, '-') || 'input'}
            .value=${this.value}
            placeholder=${this.placeholder}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neu-input': NeuInput;
  }
}
