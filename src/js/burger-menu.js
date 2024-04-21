'use strict';

const burgerEl = document.querySelector('.burger'),
  burgerOpenBtn = document.querySelector('.burger-open'),
  burgerCloseBtn = burgerEl.querySelector('.burger-close');

burgerOpenBtn.addEventListener('click', () => {
  burgerEl.classList.add('active');
  document.body.style.overflow = 'hidden';
});

// burgerCloseBtn.addEventListener('click', burgerClose);
burgerEl.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    burgerClose();
  }
});

function burgerClose() {
  burgerEl.classList.remove('active');
  document.body.style.overflow = null;
}
