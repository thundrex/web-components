import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { txTokens } from '../styles/tx-tokens.js';

@customElement('tx-avatar')
export class TxAvatar extends LitElement {
  static override styles = [
    txTokens,
    css`
      :host {
        display: inline-flex;
        position: relative;
      }

      .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--tx-bg);
        color: var(--tx-primary);
        font-family: var(--tx-font);
        font-size: 0.85rem;
        font-weight: 700;
        overflow: hidden;
        border: none;
        box-shadow: var(--tx-shadow-sm);
        user-select: none;
      }

      .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      :host([size='sm']) .avatar { width: 32px; height: 32px; font-size: 0.72rem; }
      :host([size='lg']) .avatar { width: 52px; height: 52px; font-size: 1.1rem; }
      :host([size='xl']) .avatar { width: 64px; height: 64px; font-size: 1.3rem; }

      .status {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid var(--tx-surface);
        background: #D1D5DB;
      }

      :host([size='sm']) .status { width: 10px; height: 10px; }
      :host([size='lg']) .status, :host([size='xl']) .status { width: 14px; height: 14px; }

      :host([status='online']) .status  { background: var(--tx-success); }
      :host([status='busy']) .status    { background: var(--tx-danger); }
      :host([status='away']) .status    { background: var(--tx-accent); }
      :host([status='offline']) .status { background: #D1D5DB; }
    `,
  ];

  @property({ type: String }) src = '';
  @property({ type: String }) initials = '';
  @property({ type: String, reflect: true }) status: '' | 'online' | 'busy' | 'away' | 'offline' = '';
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  override render() {
    return html`
      <div class="avatar" part="avatar">
        ${this.src
          ? html`<img src=${this.src} alt=${this.initials || 'avatar'} />`
          : html`${this.initials || ''}`}
      </div>
      ${this.status ? html`<span class="status"></span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tx-avatar': TxAvatar;
  }
}
