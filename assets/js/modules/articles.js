export function initArticlesCarousel() {
  const carousel = document.getElementById('articlesCarousel');
  const prevBtn = document.getElementById('articlesPrev');
  const nextBtn = document.getElementById('articlesNext');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const cards = carousel.querySelectorAll('.article-card');
  if (cards.length === 0) return;
  
  const cardStyle = window.getComputedStyle(cards[0]);
  const cardWidth = cards[0].offsetWidth;
  const gap = 20;
  const step = cardWidth + gap;
  
  let currentIndex = 0;
  const maxIndex = Math.max(0, cards.length - 2);
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * step}px)`;
  }
  
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
}
