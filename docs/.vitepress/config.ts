import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'thundrex',
  description:
    'A clean, accessible design system and web component library built with Lit.',

  base: '/web-components/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/web-components/logo-mark.svg' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&family=Red+Hat+Mono:wght@300..700&display=swap',
      },
    ],
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('tx-'),
      },
    },
  },

  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
      alt: 'thundrex',
    },
    siteTitle: false,

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/tx-button' },
      {
        text: 'GitHub',
        link: 'https://github.com/thundrex/web-components',
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'Tailwind CSS', link: '/guide/tailwind' },
          { text: 'Typography', link: '/guide/typography' },
          { text: 'Colors', link: '/guide/colors' },
          { text: 'Spacing', link: '/guide/spacing' },
          { text: 'Shadows', link: '/guide/shadows' },
          { text: 'Generator', link: '/guide/generator' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/tx-button' },
          { text: 'Input', link: '/components/tx-input' },
          { text: 'Toggle', link: '/components/tx-toggle' },
          { text: 'Checkbox', link: '/components/tx-checkbox' },
          { text: 'Slider', link: '/components/tx-slider' },
          { text: 'Card', link: '/components/tx-card' },
          { text: 'Badge', link: '/components/tx-badge' },
          { text: 'Avatar', link: '/components/tx-avatar' },
          { text: 'Progress', link: '/components/tx-progress' },
          { text: 'Tag', link: '/components/tx-tag' },
          { text: 'Divider', link: '/components/tx-divider' },
          // __GENERATOR_COMPONENT_SLOT__
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thundrex/web-components' },
    ],

    search: {
      provider: 'local',
    },
  },
});
