import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/nicasa-support/',
  title: 'Nicasa',
  titleTemplate: 'Nicasa — :title',
  description: 'Nicasa Image Viewer — a native macOS app and Chrome extension for fast, focused image browsing.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'nicasa, image viewer, mac app, chrome extension, image browsing, photo viewer' }],
    ['meta', { name: 'author', content: 'Nicasa Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Nicasa' }],
    ['meta', { property: 'og:url', content: 'https://nicasa.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'Nicasa Image Viewer — See every image, instantly' }],
    ['meta', { property: 'og:description', content: 'A native macOS app and Chrome extension for fast, focused image browsing. Experience smooth, modern image viewing on your desktop.' }],
    ['meta', { property: 'og:image', content: 'https://nicasa.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Nicasa Image Viewer Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://nicasa.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'Nicasa Image Viewer — See every image, instantly' }],
    ['meta', { name: 'twitter:description', content: 'A native macOS app and Chrome extension for fast, focused image browsing.' }],
    ['meta', { name: 'twitter:image', content: 'https://nicasa.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Nicasa Image Viewer Preview' }],
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
          { text: 'Mac App Store', link: 'https://apps.apple.com/app/apple-store/id6756032669?pt=128326876&ct=officiallnk&mt=8' },
          { text: 'Chrome Extension', link: 'https://chromewebstore.google.com/detail/nicasa-Image-viewer/cihceekeiedkinpjjjfehlgjdhpeokbj' },
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
          { text: 'Finder Sync Extension', link: '/guide/finder-sync' },
          { text: 'Screen Recording Permission', link: '/guide/screen-recording' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Terms of Service', link: '/guide/terms' }
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