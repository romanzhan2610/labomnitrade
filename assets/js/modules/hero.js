export function initHeroCarousel() {
  const cards = document.querySelectorAll('.category-card');
  if (cards.length === 0) return;

  let currentIndex = 0;
  const interval = 5000;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('is-active', 'is-exiting');
      
      if (i === index) {
        card.classList.add('is-active');
      } else if (i === (index - 1 + cards.length) % cards.length) {
        card.classList.add('is-exiting');
      }
    });
  }

  showCard(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }, interval);
}
