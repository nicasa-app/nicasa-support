import { defineConfig } from 'vitepress'

// ── Per-locale UI strings (nav / sidebar / footer) ────────────────
// Guide/Legal body .md files are translated per-locale under
// docs/<lang>/. This object only holds the chrome labels.
const STR = {
  en: {
    home: 'Home', guide: 'Guide', faq: 'FAQ', changelog: 'Changelog',
    productHunt: 'Product Hunt', download: 'Download', macAppStore: 'Mac App Store', chromeExtension: 'Chrome Extension',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Usage',
    setDefault: 'Set Default Image Viewer', finderSync: 'Finder Sync Extension',
    screenRecording: 'Screen Recording Permission', troubleshooting: 'Troubleshooting', faqLabel: 'FAQ',
    legalGroup: 'Legal', privacy: 'Privacy Policy', privacyChoices: 'Privacy Choices', terms: 'Terms of Service',
    footerMessage: 'Built with ❤️ for image enthusiasts',
    footerCopyright: 'Copyright © 2026 Nicasa Project. All rights reserved.',
    product: 'Product', macApp: 'Mac App', chromeExt: 'Chrome Extension', features: 'Features', pricing: 'Pricing',
    support: 'Support', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Troubleshooting', contact: 'Contact',
    company: 'Company', about: 'About', privacyC: 'Privacy Policy', termsC: 'Terms of Service', githubC: 'GitHub',
  },
  es: {
    home: 'Inicio', guide: 'Guía', faq: 'Preguntas', changelog: 'Novedades',
    productHunt: 'Product Hunt', download: 'Descargar', macAppStore: 'Mac App Store', chromeExtension: 'Extensión de Chrome',
    guideGroup: 'Guía', intro: 'Introducción', install: 'Instalación', usage: 'Uso',
    setDefault: 'Definir como visor predeterminado', finderSync: 'Extensión Finder Sync',
    screenRecording: 'Permiso de grabación de pantalla', troubleshooting: 'Solución de problemas', faqLabel: 'Preguntas frecuentes',
    legalGroup: 'Legal', privacy: 'Política de privacidad', privacyChoices: 'Opciones de privacidad', terms: 'Términos del servicio',
    footerMessage: 'Hecho con ❤️ para los amantes de las imágenes',
    footerCopyright: 'Copyright © 2026 Nicasa Project. Todos los derechos reservados.',
    product: 'Producto', macApp: 'App para Mac', chromeExt: 'Extensión de Chrome', features: 'Funciones', pricing: 'Precios',
    support: 'Soporte', documentation: 'Documentación', faqF: 'Preguntas frecuentes', troubleshootingF: 'Solución de problemas', contact: 'Contacto',
    company: 'Empresa', about: 'Acerca de', privacyC: 'Política de privacidad', termsC: 'Términos del servicio', githubC: 'GitHub',
  },
  'zh-CN': {
    home: '首页', guide: '指南', faq: '常见问题', changelog: '更新日志',
    productHunt: 'Product Hunt', download: '下载', macAppStore: 'Mac App Store', chromeExtension: 'Chrome 扩展',
    guideGroup: '指南', intro: '简介', install: '安装', usage: '使用',
    setDefault: '设为默认看图应用', finderSync: 'Finder 同步扩展',
    screenRecording: '屏幕录制权限', troubleshooting: '故障排除', faqLabel: '常见问题',
    legalGroup: '法律', privacy: '隐私政策', privacyChoices: '隐私选项', terms: '服务条款',
    footerMessage: '为图像爱好者倾心打造 ❤️',
    footerCopyright: '© 2026 Nicasa 项目。保留所有权利。',
    product: '产品', macApp: 'Mac 应用', chromeExt: 'Chrome 扩展', features: '功能', pricing: '价格',
    support: '支持', documentation: '文档', faqF: '常见问题', troubleshootingF: '故障排除', contact: '联系我们',
    company: '公司', about: '关于', privacyC: '隐私政策', termsC: '服务条款', githubC: 'GitHub',
  },
  'zh-TW': {
    home: '首頁', guide: '指南', faq: '常見問題', changelog: '更新日誌',
    productHunt: 'Product Hunt', download: '下載', macAppStore: 'Mac App Store', chromeExtension: 'Chrome 擴充功能',
    guideGroup: '指南', intro: '簡介', install: '安裝', usage: '使用',
    setDefault: '設為預設看圖應用程式', finderSync: 'Finder 同步擴充功能',
    screenRecording: '螢幕錄製權限', troubleshooting: '疑難排解', faqLabel: '常見問題',
    legalGroup: '法律', privacy: '隱私權政策', privacyChoices: '隱私選項', terms: '服務條款',
    footerMessage: '為影像愛好者傾心打造 ❤️',
    footerCopyright: '© 2026 Nicasa 專案。保留所有權利。',
    product: '產品', macApp: 'Mac 應用程式', chromeExt: 'Chrome 擴充功能', features: '功能', pricing: '價格',
    support: '支援', documentation: '文件', faqF: '常見問題', troubleshootingF: '疑難排解', contact: '聯絡我們',
    company: '公司', about: '關於', privacyC: '隱私權政策', termsC: '服務條款', githubC: 'GitHub',
  },
  ja: {
    home: 'ホーム', guide: 'ガイド', faq: 'よくある質問', changelog: '更新履歴',
    productHunt: 'Product Hunt', download: 'ダウンロード', macAppStore: 'Mac App Store', chromeExtension: 'Chrome 拡張機能',
    guideGroup: 'ガイド', intro: 'はじめに', install: 'インストール', usage: '使い方',
    setDefault: '既定の画像ビューアに設定', finderSync: 'Finder 同期拡張機能',
    screenRecording: '画面収録の権限', troubleshooting: 'トラブルシューティング', faqLabel: 'よくある質問',
    legalGroup: '法的事項', privacy: 'プライバシーポリシー', privacyChoices: 'プライバシーの選択', terms: '利用規約',
    footerMessage: '画像好きのために作りました ❤️',
    footerCopyright: 'Copyright © 2026 Nicasa Project. All rights reserved.',
    product: '製品', macApp: 'Mac アプリ', chromeExt: 'Chrome 拡張機能', features: '機能', pricing: '価格',
    support: 'サポート', documentation: 'ドキュメント', faqF: 'よくある質問', troubleshootingF: 'トラブルシューティング', contact: 'お問い合わせ',
    company: '会社', about: '概要', privacyC: 'プライバシーポリシー', termsC: '利用規約', githubC: 'GitHub',
  },
  de: {
    home: 'Start', guide: 'Anleitung', faq: 'FAQ', changelog: 'Änderungsprotokoll',
    productHunt: 'Product Hunt', download: 'Download', macAppStore: 'Mac App Store', chromeExtension: 'Chrome-Erweiterung',
    guideGroup: 'Anleitung', intro: 'Einführung', install: 'Installation', usage: 'Nutzung',
    setDefault: 'Als Standard-Bildbetrachter festlegen', finderSync: 'Finder-Sync-Erweiterung',
    screenRecording: 'Berechtigung zur Bildschirmaufnahme', troubleshooting: 'Fehlerbehebung', faqLabel: 'FAQ',
    legalGroup: 'Rechtliches', privacy: 'Datenschutzerklärung', privacyChoices: 'Datenschutz-Optionen', terms: 'Nutzungsbedingungen',
    footerMessage: 'Mit ❤️ für Bildbegeisterte gebaut',
    footerCopyright: 'Copyright © 2026 Nicasa Project. Alle Rechte vorbehalten.',
    product: 'Produkt', macApp: 'Mac-App', chromeExt: 'Chrome-Erweiterung', features: 'Funktionen', pricing: 'Preise',
    support: 'Support', documentation: 'Dokumentation', faqF: 'FAQ', troubleshootingF: 'Fehlerbehebung', contact: 'Kontakt',
    company: 'Unternehmen', about: 'Über', privacyC: 'Datenschutzerklärung', termsC: 'Nutzungsbedingungen', githubC: 'GitHub',
  },
  fr: {
    home: 'Accueil', guide: 'Guide', faq: 'FAQ', changelog: 'Journal des modifications',
    productHunt: 'Product Hunt', download: 'Télécharger', macAppStore: 'Mac App Store', chromeExtension: 'Extension Chrome',
    guideGroup: 'Guide', intro: 'Introduction', install: 'Installation', usage: 'Utilisation',
    setDefault: 'Définir comme visionneuse par défaut', finderSync: 'Extension de synchronisation Finder',
    screenRecording: 'Autorisation d’enregistrement de l’écran', troubleshooting: 'Dépannage', faqLabel: 'FAQ',
    legalGroup: 'Mentions légales', privacy: 'Politique de confidentialité', privacyChoices: 'Options de confidentialité', terms: 'Conditions d’utilisation',
    footerMessage: 'Conçu avec ❤️ pour les passionnés d’images',
    footerCopyright: 'Copyright © 2026 Nicasa Project. Tous droits réservés.',
    product: 'Produit', macApp: 'App Mac', chromeExt: 'Extension Chrome', features: 'Fonctionnalités', pricing: 'Tarifs',
    support: 'Assistance', documentation: 'Documentation', faqF: 'FAQ', troubleshootingF: 'Dépannage', contact: 'Contact',
    company: 'Société', about: 'À propos', privacyC: 'Politique de confidentialité', termsC: 'Conditions d’utilisation', githubC: 'GitHub',
  },
}

// ── Build a themeConfig for a given locale ────────────────────────
// All *internal* links are prefixed with the locale segment so the
// default VitePress nav / sidebar / footer resolve to the localized
// page in every language. External (http/https/mailto) links are left
// untouched.
function tc(S: typeof STR.en, lang: string) {
  const base = !lang || lang === 'en' ? '' : `/${lang}`
  const L = (p: string) =>
    /^https?:\/\//.test(p) || p.startsWith('mailto:') || p.startsWith(base)
      ? p
      : `${base}${p}`
  const MAC_APP = 'https://apps.apple.com/app/apple-store/id6756032669?pt=128326876&ct=officiallnk&mt=8'
  const CHROME = 'https://chromewebstore.google.com/detail/nicasa-image-viewer/cihceekeiedkinpjjjfehlgjdhpeokbj'
  const PH = 'https://www.producthunt.com/products/nicasa-image-viewer?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nicasa-image-viewer-2'
  const GH = 'https://github.com/nicasa-project/nicasa-support'
  return {
    nav: [
      { text: S.home, link: L('/') },
      { text: S.guide, link: L('/guide/introduction') },
      { text: S.faq, link: L('/guide/faq') },
      { text: S.changelog, link: `${GH}/blob/main/CHANGELOG.md` },
      { text: S.productHunt, link: PH },
      {
        text: S.download,
        items: [
          { text: S.macAppStore, link: MAC_APP },
          { text: S.chromeExtension, link: CHROME },
        ],
      },
    ],
    sidebar: [
      {
        text: S.guideGroup,
        items: [
          { text: S.intro, link: L('/guide/introduction') },
          { text: S.install, link: L('/guide/installation') },
          { text: S.usage, link: L('/guide/usage') },
          { text: S.setDefault, link: L('/guide/set-default-image-viewer') },
          { text: S.finderSync, link: L('/guide/finder-sync') },
          { text: S.screenRecording, link: L('/guide/screen-recording') },
          { text: S.troubleshooting, link: L('/guide/troubleshooting') },
          { text: S.faqLabel, link: L('/guide/faq') },
        ],
      },
      {
        text: S.legalGroup,
        items: [
          { text: S.privacy, link: L('/guide/privacy') },
          { text: S.privacyChoices, link: L('/guide/privacy-choices') },
          { text: S.terms, link: L('/guide/terms') },
        ],
      },
    ],
    footer: {
      message: S.footerMessage,
      copyright: S.footerCopyright,
      items: [
        {
          text: S.product,
          items: [
            { text: S.macApp, link: L('/guide/installation') },
            { text: S.chromeExt, link: L('/guide/installation') },
            { text: S.features, link: L('/#features') },
            { text: S.pricing, link: L('/guide/installation') },
          ],
        },
        {
          text: S.support,
          items: [
            { text: S.documentation, link: L('/guide/introduction') },
            { text: S.faqF, link: L('/guide/faq') },
            { text: S.troubleshootingF, link: L('/guide/troubleshooting') },
            { text: S.contact, link: 'mailto:nicasa@w3cub.com' },
          ],
        },
        {
          text: S.company,
          items: [
            { text: S.about, link: L('/guide/introduction') },
            { text: S.privacyC, link: L('/guide/privacy') },
            { text: S.termsC, link: L('/guide/terms') },
            { text: S.githubC, link: GH },
            { text: S.productHunt, link: PH },
          ],
        },
      ],
    },
  }
}

// ── Per-locale markdown renderer strings (containers + code copy) ─
const MD = {
  es: {
    container: {
      tipLabel: 'Consejo', warningLabel: 'Advertencia', dangerLabel: 'Peligro', infoLabel: 'Información', detailsLabel: 'Detalles',
    },
    codeCopyButton: { tooltipText: 'Copiar código', copiedText: 'Copiado' },
  },
  'zh-CN': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危险', infoLabel: '信息', detailsLabel: '详情',
    },
    codeCopyButton: { tooltipText: '复制代码', copiedText: '已复制' },
  },
  'zh-TW': {
    container: {
      tipLabel: '提示', warningLabel: '警告', dangerLabel: '危險', infoLabel: '資訊', detailsLabel: '詳情',
    },
    codeCopyButton: { tooltipText: '複製程式碼', copiedText: '已複製' },
  },
  ja: {
    container: {
      tipLabel: 'ヒント', warningLabel: '警告', dangerLabel: '危険', infoLabel: '情報', detailsLabel: '詳細',
    },
    codeCopyButton: { tooltipText: 'コードをコピー', copiedText: 'コピーしました' },
  },
  de: {
    container: {
      tipLabel: 'Tipp', warningLabel: 'Warnung', dangerLabel: 'Gefahr', infoLabel: 'Info', detailsLabel: 'Details',
    },
    codeCopyButton: { tooltipText: 'Code kopieren', copiedText: 'Kopiert' },
  },
  fr: {
    container: {
      tipLabel: 'Conseil', warningLabel: 'Avertissement', dangerLabel: 'Danger', infoLabel: 'Info', detailsLabel: 'Détails',
    },
    codeCopyButton: { tooltipText: 'Copier le code', copiedText: 'Copié' },
  },
}

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
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicasa-project/nicasa-support' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: tc(STR.en, 'en'),
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: tc(STR.es, 'es'),
      markdown: MD.es,
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: tc(STR['zh-CN'], 'zh-CN'),
      markdown: MD['zh-CN'],
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      themeConfig: tc(STR['zh-TW'], 'zh-TW'),
      markdown: MD['zh-TW'],
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: tc(STR.ja, 'ja'),
      markdown: MD.ja,
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: tc(STR.de, 'de'),
      markdown: MD.de,
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: tc(STR.fr, 'fr'),
      markdown: MD.fr,
    },
  },
})
