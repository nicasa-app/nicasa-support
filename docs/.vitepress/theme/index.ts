import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomeActions from './HomeActions.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-after': () => h(HomeActions),
    })
  },
}
