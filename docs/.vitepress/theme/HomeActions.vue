<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="home-badge-row">
    <a
      href="https://apps.apple.com/app/apple-store/id6756032669?pt=128326876&ct=officiallnk&mt=8" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Download on the Mac App Store"
    >
      <img
        :src="withBase('/badges/Mac-App-Store.png')"
        alt="Download on the Mac App Store"
        class="store-badge"
        width="156"
        height="46"
      />
    </a>
    <a
      href="https://chromewebstore.google.com/detail/nicasa-image-viewer/cihceekeiedkinpjjjfehlgjdhpeokbj" target="_blank" rel="noopener noreferrer"
      class="store-badge-link"
      aria-label="Get it on the Chrome Web Store"
    >
      <img
        :src="withBase('/badges/Chrome-Web-Store.png')"
        alt="Available in the Chrome Web Store"
        class="store-badge"
        width="196"
        height="46"
      />
    </a>
  </div>
</template>
