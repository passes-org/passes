import { defineConfig } from 'vitepress'

const POLYFILL_MODULE_URL = 'https://unpkg.com/@passes/polyfill@0.0.1-alpha.25/src/main.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passes",
  description: "The web API for portable identity",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['script', { type: 'module', src: POLYFILL_MODULE_URL }],
  ],

  themeConfig: {
    siteTitle: '',

    logo: {
      dark: '/logo_dark.svg',
      light: '/logo_light.svg',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Examples', link: '/examples/signing-in' },
      // { text: 'Downloads', link: '/downloads' },
      { text: 'Protocol Reference', link: '/protocol-reference' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/passes-org/passes' }
    ],
    search: { provider: 'local' },

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'What is Passes?', link: '/' },
          { text: 'Protocol Reference', link: '/protocol-reference' }
        ],
      },
      {
        text: 'Packages',
        items: [
          {
            text: 'Reqs',
            link: '/packages/reqs/quickstart',
            items: [
              { text: 'API Reference', link: '/packages/reqs/api/modules.md' },
            ],
          },
          {
            text: 'Polyfill',
            link: '/packages/polyfill/quickstart',
          },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Recognizing Users', link: '/examples/recognizing-users' },
          { text: 'Signed Results', link: '/examples/signed-results' },
          { text: 'Ethereum JSON-RPC', link: '/examples/ethereum' },
          // { text: 'Bitcoin JSON-RPC', link: '/examples/bitcoin' },
        ]
      },
      {
        text: 'Protocol',
        items: [
          // { text: 'Standards', link: '/protocol/standards' }, // TODO: Link to RFCs repo
          { text: 'Discussions', link: 'https://github.com/passes-org/passes/discussions' },
        ],
      },
    ],
  }
})
