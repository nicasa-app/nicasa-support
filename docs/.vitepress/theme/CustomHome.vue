<template>
  <div class="custom-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">{{ frontmatter.hero.name }}</h1>
            <p class="hero-subtitle">{{ frontmatter.hero.text }}</p>
            <p class="hero-description">{{ frontmatter.hero.tagline }}</p>
            <div class="hero-actions">
              <a v-for="action in frontmatter.hero.actions" :key="action.text"
                 :href="action.link"
                 :class="['btn', action.theme === 'brand' ? 'btn-primary' : 'btn-secondary']">
                {{ action.text }}
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img :src="withBase(frontmatter.hero.image.src)" :alt="frontmatter.hero.image.alt" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Features</h2>
        <p class="section-subtitle">Everything you need for instant image viewing</p>
        <div class="features-grid">
          <div v-for="(feature, index) in frontmatter.features" :key="feature.title" class="feature-card">
            <div class="feature-icon" :style="{ backgroundColor: featureColors[index % featureColors.length] }">
              <img :src="withBase(feature.icon.light)" :alt="feature.icon.alt"
                   :width="feature.icon.width" :height="feature.icon.height" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.details }}</p>
            <a v-if="feature.link" :href="feature.link" class="feature-link">{{ feature.linkText }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { withBase } from 'vitepress'

const { frontmatter } = useData()

// Feature icon colors
const featureColors = [
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // yellow
  '#ef4444', // red
  '#8b5cf6', // purple
  '#06b6d4'  // cyan
]
</script>

<style scoped>
.custom-home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section */
.hero-section {
  background: #ffffff;
  color: #000000;
  padding: 80px 0;
  border-bottom: 1px solid #e5e5e5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 20px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 20px;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.25rem;
  margin: 0 0 40px;
  opacity: 0.8;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #000000;
  color: #ffffff;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
}

.btn-secondary:hover {
  background: #000000;
  color: #ffffff;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: #ffffff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 10px;
  color: #000000;
}

.section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin: 0 0 60px;
  color: #666666;
  opacity: 0.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #e0e0e0;
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon img {
  filter: brightness(0) invert(1);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: #1a1a1a;
  line-height: 1.3;
}

.feature-description {
  color: #666666;
  line-height: 1.6;
  margin: 0 0 24px;
  font-size: 1rem;
}

.feature-link {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.feature-link:hover {
  color: #333333;
}

.feature-link:hover {
  text-decoration: underline;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background: white;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 10px;
  color: #333;
}

.section-subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin: 0 0 60px;
  color: #666;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.testimonial {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.testimonial blockquote {
  margin: 0;
}

.testimonial p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial cite {
  font-weight: 600;
  color: #333;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faq-item details {
  padding: 0;
}

.faq-item summary {
  padding: 24px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  transition: background-color 0.2s ease;
}

.faq-item summary:hover {
  background: #f8f9fa;
}

.faq-item summary::after {
  content: '+';
  font-size: 1.5rem;
  font-weight: 300;
  color: #666;
  transition: transform 0.2s ease;
}

.faq-item details[open] summary::after {
  content: '−';
  transform: rotate(0deg);
}

.faq-answer {
  padding: 0 30px 24px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
.cta-section {
  background: #000000;
  color: #ffffff;
  padding: 80px 0;
}

.cta-content {
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 20px;
}

.cta-content p {
  font-size: 1.25rem;
  margin: 0 0 40px;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .cta-actions {
    justify-content: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>