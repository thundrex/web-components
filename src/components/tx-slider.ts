import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-slider')
export class TxSlider extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      label {
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--tx-text-secondary);
        letter-spacing: 0.02em;
        padding-left: 2px;
      }

      .value-display {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track-container {
        position: relative;
        height: 32px;
        display: flex;
        align-items: center;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 6px;
        background: var(--tx-bg);
        border-radius: var(--tx-radius-pill);
        box-shadow: var(--tx-shadow-inset-sm);
        outline: none;
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--tx-bg);
        box-shadow: var(--tx-shadow-sm);
        border: 3px solid var(--tx-primary);
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']::-moz-range-thumb {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--tx-bg);
        box-shadow: var(--tx-shadow-sm);
        border: 3px solid var(--tx-primary);
        cursor: grab;
        transition: var(--tx-transition);
      }

      input[type='range']:active::-webkit-slider-thumb {
        box-shadow: var(--tx-shadow-inset-sm);
        cursor: grabbing;
      }

      input[type='range']:active::-moz-range-thumb {
        box-shadow: var(--tx-shadow-inset-sm);
        cursor: grabbing;
      }

      input[type='range']:focus-visible {
        outline: 2px solid var(--tx-primary);
        outline-offset: 6px;
        border-radius: var(--tx-radius-pill);
      }
    `,
  ];

  @property({ type: Number }) value = 50;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: String }) label = '';
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;

  private _renderHeader() {
    if (!this.label && !this.showValue) return '';
    const labelHtml = this.label ? html`<label>${this.label}</label>` : html`<span></span>`;
    const valueHtml = this.showValue ? html`<span class="value-display">${this.value}</span>` : '';
    return html`<div class="header">${labelHtml}${valueHtml}</div>`;
  }

  private _handleInput(e: Event) {
    this.value = Number((e.target as HTMLInputElement).value);
    this.dispatchEvent(new CustomEvent('tx-input', { detail: { value: this.value }, bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="wrapper">
        ${this._renderHeader()}
        <div class="track-container">
          <input
            part="input"
            type="range"
            .value=${String(this.value)}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            @input=${this._handleInput}
          />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-slider': TxSlider;
  }
}
