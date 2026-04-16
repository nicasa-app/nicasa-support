import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/nicasa-support/',
  title: 'Nicasa',
  titleTemplate: 'Nicasa — :title',
  description: 'Nicasa Image Viewer — a native macOS app and Chrome extension for fast, focused image browsing.',
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Nicasa Image Viewer' }],
    ['meta', { property: 'og:description', content: 'See every image, instantly. A native macOS app and Chrome extension built for fast, focused image browsing.' }],
    ['meta', { property: 'og:image', content: 'https://nicasa-project.github.io/nicasa-support/hero-screenshot.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    siteTitle: 'Nicasa',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'Changelog', link: 'https://github.com/nicasa-project/nicasa-support/blob/main/CHANGELOG.md' },
      {
        text: 'Download',
        items: [
          { text: 'Mac App Store', link: '/guide/installation' },
          { text: 'Chrome Extension', link: '/guide/installation' },
        ]
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicasa-project/nicasa-support' }
    ],
    footer: {
      message: 'Built with ❤️ for image enthusiasts',
      copyright: 'Copyright © 2026 Nicasa Project. All rights reserved.',
      items: [
        {
          text: 'Product',
          items: [
            { text: 'Mac App', link: '/guide/installation' },
            { text: 'Chrome Extension', link: '/guide/installation' },
            { text: 'Features', link: '/#features' },
            { text: 'Pricing', link: '/guide/installation' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Documentation', link: '/guide/introduction' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'Contact', link: 'mailto:support@nicasa.app' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
            { text: 'Terms of Service', link: '/guide/terms' },
            { text: 'GitHub', link: 'https://github.com/nicasa-project' }
          ]
        }
      ]
    }
  }
})