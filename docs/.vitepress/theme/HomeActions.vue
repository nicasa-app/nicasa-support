<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="home-badge-row">
    <a
      href="/guide/installation"
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
      href="/guide/installation"
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
