import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-card')
export class NeuCard extends LitElement {
  static override styles = [
    neuTokens,
    css`
      :host {
        display: block;
      }

      .card {
        background: var(--neu-bg);
        border-radius: var(--neu-radius-lg);
        box-shadow: var(--neu-shadow-extruded);
        padding: 28px;
        transition: var(--neu-transition);
      }

      :host([interactive]) .card {
        cursor: pointer;
      }

      :host([interactive]) .card:hover {
        box-shadow: var(--neu-shadow-hover);
      }

      :host([interactive]) .card:active {
        box-shadow: var(--neu-shadow-inset);
      }

      .card-header {
        margin-bottom: 16px;
      }

      .card-header ::slotted(*) {
        margin: 0;
        color: var(--neu-accent);
        font-weight: 700;
      }

      .card-body {
        color: var(--neu-text);
        line-height: 1.6;
      }

      .card-footer {
        margin-top: 20px;
        padding-top: 16px;
        display: flex;
        gap: 12px;
        align-items: center;
      }

      :host([flat]) .card {
        box-shadow: var(--neu-shadow-inset);
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) flat = false;

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
    'neu-card': NeuCard;
  }
}
