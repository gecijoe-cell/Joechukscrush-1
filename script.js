const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.brand-card');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || filter === category;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});
