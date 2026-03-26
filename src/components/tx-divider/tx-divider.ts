import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../../styles/tx-tokens.js';

@customElement('tx-divider')
export class TxDivider extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: block;
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .line {
        flex: 1;
        height: 1px;
        background: var(--tx-border);
      }

      .label {
        font-size: var(--tx-text-xs);
        font-weight: 500;
        color: var(--tx-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        white-space: nowrap;
      }

      :host([vertical]) {
        display: inline-flex;
        height: 100%;
        align-self: stretch;
      }

      :host([vertical]) .divider {
        flex-direction: column;
        height: 100%;
        min-height: 20px;
      }

      :host([vertical]) .line {
        width: 1px;
        height: auto;
        flex: 1;
      }

      :host([spacing='sm']) { margin: 8px 0; }
      :host([spacing='md']) { margin: 16px 0; }
      :host([spacing='lg']) { margin: 28px 0; }
    `,
  ];

  @property({ type: String }) label = '';
  @property({ type: Boolean, reflect: true }) vertical = false;
  @property({ type: String, reflect: true }) spacing: 'none' | 'sm' | 'md' | 'lg' = 'none';

  override render() {
    return html`
      <div class="divider" role="separator" part="divider">
        <div class="line"></div>
        ${this.label ? html`<span class="label">${this.label}</span><div class="line"></div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-divider': TxDivider;
  }
}
