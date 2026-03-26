import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-card')
export class TxCard extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: block;
      }

      .card {
        position: relative;
        background: var(--tx-bg);
        border-radius: var(--tx-radius-lg);
        border: none;
        box-shadow: var(--tx-shadow-md);
        padding: 20px;
        transition: var(--tx-transition);
        overflow: hidden;
      }

      /* Color accent bar at top */
      :host([accent]) .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        height: 3px;
        border-radius: 0 0 3px 3px;
        background: var(--_accent-color, var(--tx-accent));
      }

      :host([accent='primary']) .card::before { --_accent-color: var(--tx-primary); }
      :host([accent='success']) .card::before { --_accent-color: var(--tx-success); }
      :host([accent='danger']) .card::before { --_accent-color: var(--tx-danger); }
      :host([accent='accent']) .card::before { --_accent-color: var(--tx-accent); }

      :host([interactive]) .card {
        cursor: pointer;
      }

      :host([interactive]) .card:hover {
        box-shadow: var(--tx-shadow-lg);
      }

      :host([interactive]) .card:active {
        box-shadow: var(--tx-shadow-inset);
      }

      .card-header {
        margin-bottom: 12px;
      }

      .card-header ::slotted(*) {
        margin: 0;
        font-weight: 700;
        font-size: 0.95rem;
        color: var(--tx-text);
      }

      .card-body {
        color: var(--tx-text-secondary);
        font-size: 0.875rem;
        line-height: 1.6;
      }

      .card-footer {
        margin-top: 16px;
        padding-top: 12px;
        border-top: none;
        box-shadow: 0 -1px 1px var(--tx-neu-dark), 0 1px 1px var(--tx-neu-light);
        display: flex;
        gap: 8px;
        align-items: center;
      }

      :host([flat]) .card {
        background: var(--tx-bg);
        box-shadow: var(--tx-shadow-inset-sm);
      }

      :host([compact]) .card {
        padding: 14px;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) flat = false;
  @property({ type: Boolean, reflect: true }) compact = false;
  @property({ type: String, reflect: true }) accent = '';

  private _hasHeader = false;
  private _hasFooter = false;

  private _checkSlot(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const name = slot.name;
    const hasContent = slot.assignedNodes({ flatten: true }).length > 0;
    if (name === 'header') this._hasHeader = hasContent;
    if (name === 'footer') this._hasFooter = hasContent;
    this.requestUpdate();
  }

  override render() {
    return html`
      <div class="card" part="card">
        <div class="card-header" ?hidden=${!this._hasHeader}>
          <slot name="header" @slotchange=${this._checkSlot}></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer" ?hidden=${!this._hasFooter}>
          <slot name="footer" @slotchange=${this._checkSlot}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-card': TxCard;
  }
}
