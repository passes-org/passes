import { defineConfig } from 'vitepress'

const POLYFILL_MODULE_URL = 'https://unpkg.com/@passes/polyfill@^0.1.0';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passes",
  description: "The web API for portable identity",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:image', content: 'https://docs.passes.org/passes-og.png' }],
    ['script', { src: POLYFILL_MODULE_URL }],
  ],

  themeConfig: {
    siteTitle: '',

    logo: {
      dark: '/logo_dark.svg',
      light: '/logo_light.svg',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Examples', link: '/examples/recognizing-users' },
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
          { text: 'Request Handlers', link: '/request-handlers' },
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
