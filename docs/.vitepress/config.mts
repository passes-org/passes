import { defineConfig } from 'vitepress'

const POLYFILL_MODULE_URL = 'https://unpkg.com/@passes/polyfill@0.0.1-alpha.16/src/main.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passes",
  description: "The web API for portable identity",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { type: 'module', src: POLYFILL_MODULE_URL }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Examples', link: '/examples/signing-in' },
      // { text: 'Downloads', link: '/downloads' },
      { text: 'ABI Reference', link: '/abi-reference' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/passes-org/passes' }
    ],
    search: { provider: 'local' },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Passes?', link: '/' },
          { text: 'What are Pass Requests?', link: '/introduction/what-are-pass-requests' },
          { text: 'What are Pass Providers?', link: '/introduction/what-are-pass-providers' },
          { text: 'Where can I use Passes?', link: '/introduction/where-can-i-use-passes' },
          { text: 'Getting Started', link: '/introduction/getting-started' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Signing In', link: '/examples/signing-in' },
          { text: 'Permissions', link: '/examples/permissions' },
          { text: 'Ethereum JSON-RPC', link: '/examples/ethereum' },
          // { text: 'Bitcoin JSON-RPC', link: '/examples/bitcoin' },
        ]
      },
      {
        text: 'Packages',
        items: [
          {
            text: '@passes/reqs',
            link: '/packages/reqs/quickstart',
            items: [
              { text: 'Quickstart', link: '/packages/reqs/quickstart' },
              { text: 'Common pass requests', link: '/packages/reqs/common-requests' },
              { text: 'Creating a RequestType', link: '/packages/reqs/request-type' },
              { text: 'Using RequestRouter to build a Pass Provider', link: '/packages/reqs/request-router' },
            ],
          },
          {
            text: '@passes/polyfill',
            link: '/packages/polyfill/quickstart',
            items: [
              { text: 'Quickstart', link: '/packages/polyfill/quickstart' },
            ],
          },
          {
            text: '@passes/types',
            link: '/packages/types/installation',
            items: [
              { text: 'Installation', link: '/packages/types/installation' },
            ],
          },
        ],
      },
      {
        text: 'Protocol',
        items: [
          { text: 'Standards', link: '/protocol/standards' },
          { text: 'Community', link: '/protocol/community' },
        ],
      },
    ],
  }
})
