import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { neuTokens } from '../styles/neu-tokens.js';

@customElement('neu-button')
export class NeuButton extends LitElement {
  static override styles = [
    neuTokens,
    css`
      :host {
        display: inline-block;
      }

      button {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px 32px;
        background: var(--neu-bg);
        color: var(--neu-accent);
        font-family: var(--neu-font);
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        border-radius: var(--neu-radius);
        box-shadow: var(--neu-shadow-extruded);
        cursor: pointer;
        transition: var(--neu-transition);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      button:hover {
        box-shadow: var(--neu-shadow-hover);
      }

      button:active,
      button.pressed {
        box-shadow: var(--neu-shadow-inset);
      }

      button:focus-visible {
        outline: 2px solid var(--neu-accent);
        outline-offset: 4px;
      }

      button[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      :host([size='sm']) button {
        padding: 10px 20px;
        font-size: 0.85rem;
        border-radius: 12px;
      }

      :host([size='lg']) button {
        padding: 18px 44px;
        font-size: 1.15rem;
        border-radius: var(--neu-radius-lg);
      }

      :host([pill]) button {
        border-radius: var(--neu-radius-pill);
      }

      :host([icon-only]) button {
        padding: 14px;
        border-radius: 50%;
        aspect-ratio: 1;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) pill = false;
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' }) iconOnly = false;

  override render() {
    return html`
      <button ?disabled=${this.disabled} part="button">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'neu-button': NeuButton;
  }
}
