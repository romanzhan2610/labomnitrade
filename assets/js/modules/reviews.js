export function initReviewsCarousel() {
  const carousel = document.getElementById('reviewsCarousel');
  const prevBtn = document.getElementById('reviewsPrev');
  const nextBtn = document.getElementById('reviewsNext');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const cards = carousel.querySelectorAll('.review-card');
  if (cards.length === 0) return;
  
  let currentIndex = 0;
  const visibleCards = 3;
  const maxIndex = Math.max(0, cards.length - visibleCards);
  
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
