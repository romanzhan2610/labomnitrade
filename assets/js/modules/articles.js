export function initArticlesCarousel() {
  const carousel = document.getElementById('articlesCarousel');
  const prevBtn = document.getElementById('articlesPrev');
  const nextBtn = document.getElementById('articlesNext');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const cardWidth = 380 + 20;
  let currentIndex = 0;
  const cards = carousel.querySelectorAll('.article-card');
  const maxIndex = Math.max(0, cards.length - 2);
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
}
