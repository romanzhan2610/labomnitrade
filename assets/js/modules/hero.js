export function initHeroCarousel() {
  const cards = document.querySelectorAll('.category-card');
  if (cards.length === 0) return;

  let currentIndex = 0;
  const interval = 5000;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('is-active', i === index);
    });
  }

  showCard(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }, interval);
}
