<template>
  <div class="home-sections">
    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Users Are Saying</h2>
        <p class="section-subtitle">Real feedback from our community</p>
        <div class="testimonials-grid">
          <div class="testimonial">
            <blockquote>
              <p>"Nicasa has transformed how I browse images online. It's incredibly fast and intuitive."</p>
              <cite>- Alex Johnson, Designer</cite>
            </blockquote>
          </div>
          <div class="testimonial">
            <blockquote>
              <p>"The AI enhancement features are a game-changer. No more blurry images!"</p>
              <cite>- Sarah Chen, Photographer</cite>
            </blockquote>
          </div>
          <div class="testimonial">
            <blockquote>
              <p>"As a developer, I love the distraction-free interface. Pure focus on the content."</p>
              <cite>- Mike Rodriguez, Developer</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Quick answers to common questions</p>
        <div class="faq-list">
          <div v-for="faq in faqs" :key="faq.question" class="faq-item">
            <details>
              <summary>{{ faq.question }}</summary>
              <p class="faq-answer">{{ faq.answer }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience Instant Image Viewing?</h2>
          <p>Join thousands of users who have discovered a better way to browse images.</p>
          <div class="cta-actions">
            <a href="/guide/installation" class="btn btn-primary">Purchase for macOS</a>
            <a href="/guide/installation" class="btn btn-secondary">Free Chrome Extension</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: "Is Nicasa free?",
    answer: "The Chrome extension is completely free to download and use. The macOS app requires a one-time purchase for full access to all features."
  },
  {
    question: "Does it work on all websites?",
    answer: "Nicasa works on most standard websites. Some sites with strict content security policies may limit image extraction."
  },
  {
    question: "Is my data uploaded anywhere?",
    answer: "No. All processing happens locally on your device. Nicasa does not collect, transmit, or store your images."
  },
  {
    question: "Does it support offline viewing?",
    answer: "Yes. The macOS app works fully offline for local image files. Web image extraction requires an active connection."
  },
  {
    question: "Which macOS versions are supported?",
    answer: "Nicasa supports macOS 12 Monterey and later. It is optimized for Apple Silicon and runs natively on M-series chips."
  },
  {
    question: "What permissions does the Chrome extension need?",
    answer: "The extension requests access to page content solely to extract image URLs. No browsing history is read or stored."
  }
]
</script>

<style scoped>
.home-sections {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
}

.testimonial blockquote p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 20px;
  color: #333333;
}

.testimonial cite {
  font-style: normal;
  font-weight: 600;
  color: #000000;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: white;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
}

.faq-item details {
  padding: 0;
}

.faq-item summary {
  padding: 20px 30px;
  background: #f8f9fa;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  color: #000000;
  border: none;
  outline: none;
  transition: background-color 0.2s;
}

.faq-item summary:hover {
  background: #e9ecef;
}

.faq-item summary::marker {
  color: #000000;
}

.faq-answer {
  padding: 0 30px 20px;
  color: #666666;
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

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  cursor: pointer;
}

.btn-primary {
  background: #ffffff;
  color: #000000;
}

.btn-primary:hover {
  background: #e5e5e5;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}

.btn-secondary:hover {
  background: #ffffff;
  color: #000000;
}

/* Responsive */
@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

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