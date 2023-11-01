import { defineConfig } from 'vitepress'

const POLYFILL_MODULE_URL = 'https://unpkg.com/@passes/polyfill@0.0.1-alpha.16/src/main.js';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passes",
  description: "User identity and authn for the web",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { type: 'module', src: POLYFILL_MODULE_URL }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Examples', link: '/examples/identity' },
      { text: 'Downloads', link: '/downloads' },
      { text: 'ABI Reference', link: '/abi-reference' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/passes-org/passes' }
    ],    

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/introduction/getting-started' },
          { text: 'Why Passes?', link: '/introduction/why-passes' },
          { text: 'Browser and OS Support', link: '/introduction/support' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Identity, Registration, Sign-In', link: '/examples/identity' },
          { text: 'User Info Permissions', link: '/examples/permissions' },
          { text: 'Commerce', link: '/examples/commerce' },
          { text: 'Portable Data', link: '/examples/portable-data' },
          { text: 'Portable Media', link: '/examples/portable-media' },
          { text: 'Ethereum JSON-RPC', link: '/examples/ethereum' },
          { text: 'Bitcoin JSON-RPC', link: '/examples/bitcoin' },
        ]
      },
      {
        text: 'Pass Requests',
        items: [
          { text: 'Walkthrough', link: '/requests/walkthrough' },
          { text: 'Custom request types', link: '/requests/custom-types' },
          { text: 'Native', link: '/requests/native' },
        ],
      },
      {
        text: 'Pass Engines',
        items: [
          { text: 'Introduction', link: '/engines/introduction' },
          { text: 'Alternatives', link: '/engines/alternatives' },
          // { text: 'Interoperability', link: '/' }, // I Don't remember where I was going with this currently
          // { text: 'Pass Portability', link: '/' }, // This either... this might be better in "guidelines?" ... but maybe we should also offer guidelines for pass engines
          { text: 'Creating a Pass Engine', link: '/engines/creating' },
        ],
      },
      {
        text: '@passes/reqs',
        items: [
          { text: 'Quickstart', link: '/packages/reqs/quickstart' },
          { text: 'Common pass requests', link: '/packages/reqs/common-requests' },
          { text: 'Defining a pass request type', link: '/packages/reqs/request-builder' },
        ],
      },
      {
        text: '@passes/polyfill',
        items: [
          { text: 'Quickstart', link: '/packages/polyfill/quickstart' },
        ],
      },
      {
        text: '@passes/types',
        items: [
          { text: 'Installation', link: '/packages/types/installation' },
        ],
      },
      {
        text: 'Protocol',
        items: [
          { text: 'ABI', link: '/protocol/abi' },
          { text: 'Standards', link: '/protocol/standards' },
          { text: 'Guidelines', link: '/protocol/guidelines' },
          { text: 'Community', link: '/protocol/community' },
        ],
      },
      {
        text: 'Foundation',
        link: '/',
        items: [
          { text: 'Roadmap', link: '/' },
        ],
      },
    ],
  }
})
