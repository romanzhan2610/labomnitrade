import { initHeroCarousel } from './modules/hero.js';
import { initArticlesCarousel } from './modules/articles.js';
import { initReviewsCarousel } from './modules/reviews.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initArticlesCarousel();
  initReviewsCarousel();
});
