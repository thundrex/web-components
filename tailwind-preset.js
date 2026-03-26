/**
 * thundrex Tailwind CSS Preset
 *
 * Add to your tailwind.config.js:
 *
 *   import thundrex from '@thundrex/web-components/tailwind-preset';
 *   export default { presets: [thundrex], ... }
 *
 * All values reference CSS custom properties so they respond
 * to runtime theme changes via setTheme().
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        tx: {
          bg: 'var(--tx-bg)',
          surface: 'var(--tx-surface)',
          'surface-alt': 'var(--tx-surface-alt)',
          accent: 'var(--tx-accent)',
          'accent-soft': 'var(--tx-accent-soft)',
          primary: 'var(--tx-primary)',
          'primary-soft': 'var(--tx-primary-soft)',
          success: 'var(--tx-success)',
          'success-soft': 'var(--tx-success-soft)',
          danger: 'var(--tx-danger)',
          'danger-soft': 'var(--tx-danger-soft)',
          text: 'var(--tx-text)',
          'text-secondary': 'var(--tx-text-secondary)',
          'text-muted': 'var(--tx-text-muted)',
          border: 'var(--tx-border)',
        },
      },

      borderRadius: {
        tx: 'var(--tx-radius)',
        'tx-sm': 'var(--tx-radius-sm)',
        'tx-lg': 'var(--tx-radius-lg)',
        'tx-xl': 'var(--tx-radius-xl)',
        'tx-pill': 'var(--tx-radius-pill)',
      },

      boxShadow: {
        'tx-sm': 'var(--tx-shadow-sm)',
        'tx-md': 'var(--tx-shadow-md)',
        'tx-lg': 'var(--tx-shadow-lg)',
        'tx-inset': 'var(--tx-shadow-inset)',
        'tx-inset-sm': 'var(--tx-shadow-inset-sm)',
      },

      fontFamily: {
        tx: ['var(--tx-font)'],
        'tx-mono': ['var(--tx-font-mono)'],
      },

      fontSize: {
        'tx-xs': 'var(--tx-text-xs)',
        'tx-sm': 'var(--tx-text-sm)',
        'tx-base': 'var(--tx-text-base)',
        'tx-lg': 'var(--tx-text-lg)',
        'tx-xl': 'var(--tx-text-xl)',
        'tx-2xl': 'var(--tx-text-2xl)',
        'tx-3xl': 'var(--tx-text-3xl)',
        'tx-4xl': 'var(--tx-text-4xl)',
      },

      spacing: {
        'tx-1': 'var(--tx-space-1)',
        'tx-2': 'var(--tx-space-2)',
        'tx-3': 'var(--tx-space-3)',
        'tx-4': 'var(--tx-space-4)',
        'tx-5': 'var(--tx-space-5)',
        'tx-6': 'var(--tx-space-6)',
        'tx-8': 'var(--tx-space-8)',
        'tx-10': 'var(--tx-space-10)',
        'tx-12': 'var(--tx-space-12)',
        'tx-16': 'var(--tx-space-16)',
      },

      transitionProperty: {
        tx: 'all',
      },

      transitionDuration: {
        tx: '200ms',
        'tx-slow': '300ms',
      },
    },
  },
};
