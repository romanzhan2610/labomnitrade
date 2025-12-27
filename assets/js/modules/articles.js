export function initArticlesCarousel() {
  const carousel = document.getElementById('articlesCarousel');
  const prevBtn = document.getElementById('articlesPrev');
  const nextBtn = document.getElementById('articlesNext');
  
  if (!carousel || !prevBtn || !nextBtn) {
    console.log('Articles carousel elements not found');
    return;
  }
  
  const cards = carousel.querySelectorAll('.article-card');
  if (cards.length === 0) return;
  
  let currentIndex = 0;
  const maxIndex = cards.length - 1;
  
  function getStep() {
    const card = cards[0];
    const cardWidth = card.offsetWidth;
    const gap = 20;
    return cardWidth + gap;
  }
  
  function updateCarousel() {
    const step = getStep();
    carousel.style.transform = `translateX(-${currentIndex * step}px)`;
  }
  
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
}
