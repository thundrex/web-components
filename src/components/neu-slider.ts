import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-slider')
export class NeuSlider extends LitElement {
  static override styles = [
    neuTokens,
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
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--neu-accent);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding-left: 4px;
      }

      .value-display {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--neu-text);
        padding-right: 4px;
      }

      .track-container {
        position: relative;
        height: 40px;
        display: flex;
        align-items: center;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 8px;
        background: var(--neu-bg);
        border-radius: var(--neu-radius-pill);
        box-shadow: var(--neu-shadow-inset);
        outline: none;
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--neu-bg);
        box-shadow: var(--neu-shadow-extruded);
        border: 3px solid var(--neu-accent);
        cursor: grab;
        transition: var(--neu-transition);
      }

      input[type='range']::-moz-range-thumb {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--neu-bg);
        box-shadow: var(--neu-shadow-extruded);
        border: 3px solid var(--neu-accent);
        cursor: grab;
        transition: var(--neu-transition);
      }

      input[type='range']:active::-webkit-slider-thumb {
        box-shadow: var(--neu-shadow-inset);
        cursor: grabbing;
      }

      input[type='range']:active::-moz-range-thumb {
        box-shadow: var(--neu-shadow-inset);
        cursor: grabbing;
      }

      input[type='range']:focus-visible {
        outline: 2px solid var(--neu-accent);
        outline-offset: 8px;
        border-radius: var(--neu-radius-pill);
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
    this.dispatchEvent(new CustomEvent('neu-input', { detail: { value: this.value }, bubbles: true, composed: true }));
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
    'neu-slider': NeuSlider;
  }
}
