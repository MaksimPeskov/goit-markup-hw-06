const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.mobile-menu');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuEl.classList.toggle('is-open');
  });
});

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.backdrop');

openBtn.addEventListener('click', () => {
  backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-open');
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    backdrop.classList.remove('is-open');
  }
});
