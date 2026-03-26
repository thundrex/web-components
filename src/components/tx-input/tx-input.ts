import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('tx-input')
export class TxInput extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: block;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
        letter-spacing: 0.01em;
      }

      .field {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        all: unset;
        width: 100%;
        padding: 8px 12px;
        background: var(--tx-surface);
        color: var(--tx-text);
        font-family: var(--tx-font);
        font-size: var(--tx-text-sm);
        border-radius: var(--tx-radius);
        border: 1px solid var(--tx-border);
        transition: var(--tx-transition);
      }

      input::placeholder {
        color: var(--tx-text-muted);
      }

      input:hover {
        border-color: #D1D5DB;
      }

      input:focus {
        border-color: var(--tx-border-focus);
        box-shadow: var(--tx-ring-focus);
      }

      :host([search]) .field::before {
        content: '';
        position: absolute;
        left: 12px;
        width: 13px;
        height: 13px;
        border: 2px solid var(--tx-text-muted);
        border-radius: 50%;
        pointer-events: none;
      }

      :host([search]) .field::after {
        content: '';
        position: absolute;
        left: 23px;
        top: calc(50% + 4px);
        width: 2px;
        height: 5px;
        background: var(--tx-text-muted);
        transform: rotate(-45deg);
        pointer-events: none;
      }

      :host([search]) input {
        padding-left: 36px;
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
    this.dispatchEvent(new CustomEvent('tx-input', { detail: { value: this.value }, bubbles: true, composed: true }));
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
    'tx-input': TxInput;
  }
}
