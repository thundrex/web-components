import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('tx-progress')
export class TxProgress extends LitElement {
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
        gap: 6px;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text-secondary);
      }

      .value {
        font-size: var(--tx-text-xs);
        font-weight: 600;
        color: var(--tx-text);
        font-variant-numeric: tabular-nums;
      }

      .track {
        width: 100%;
        height: 6px;
        background: var(--tx-surface-alt);
        border-radius: var(--tx-radius-pill);
        overflow: hidden;
        border: 1px solid var(--tx-border);
      }

      .fill {
        height: 100%;
        border-radius: var(--tx-radius-pill);
        background: var(--tx-primary);
        transition: width 0.4s ease;
        min-width: 0;
      }

      :host([color='accent']) .fill  { background: var(--tx-accent); }
      :host([color='success']) .fill { background: var(--tx-success); }
      :host([color='danger']) .fill  { background: var(--tx-danger); }

      :host([size='sm']) .track { height: 4px; }
      :host([size='lg']) .track { height: 8px; }
    `,
  ];

  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: String }) label = '';
  @property({ type: Boolean, attribute: 'show-value' }) showValue = false;
  @property({ type: String, reflect: true }) color: 'primary' | 'accent' | 'success' | 'danger' = 'primary';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  private get _percent() {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  override render() {
    const hasHeader = this.label || this.showValue;
    return html`
      <div class="wrapper">
        ${hasHeader ? html`
          <div class="header">
            <span class="label">${this.label}</span>
            ${this.showValue ? html`<span class="value">${Math.round(this._percent)}%</span>` : ''}
          </div>
        ` : ''}
        <div class="track" role="progressbar" aria-valuenow=${this.value} aria-valuemin="0" aria-valuemax=${this.max}>
          <div class="fill" style="width: ${this._percent}%"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-progress': TxProgress;
  }
}
