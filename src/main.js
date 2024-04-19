'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.category-list-wrap', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

const shortsSwiper = new Swiper('.shorts-list-container', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

const planSwiper = new Swiper('.plan-list-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1170: {
      slidesPerView: 3,
    },
  },
});

const countDownDate = new Date('Dec 1, 2024 00:00:00').getTime();
setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerHTML =
    minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerHTML =
    seconds < 10 ? '0' + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

const burgerEl = document.querySelector('.burger'),
  burgerOpenBtn = document.querySelector('.burger-open'),
  burgerCloseBtn = burgerEl.querySelector('.burger-close');

burgerOpenBtn.addEventListener('click', () => {
  burgerEl.classList.add('active');
  document.body.style.overflow = 'hidden';
});

burgerCloseBtn.addEventListener('click', () => {
  burgerEl.classList.remove('active');
  document.body.style.overflow = null;
});

const jsElemenets = document.querySelectorAll('.js-element');

jsElemenets.forEach(element => {
  animateElement(element);
});

function animateElement(element) {
  const sectionContainer = element.parentElement;
  const containerWidth = sectionContainer.clientWidth;
  const containerHeight = sectionContainer.clientHeight;

  let posX = Math.random() * (containerWidth - element.clientWidth);
  let posY = Math.random() * (containerHeight - element.clientHeight);
  let speed = Math.random() * 0.03 + 1; // Швидкість руху
  let directionX = Math.random() < 0.5 ? -1 : 1;
  let directionY = Math.random() < 0.5 ? -1 : 1;

  element.style.left = `${posX}px`;
  element.style.top = `${posY}px`;

  function moveElement() {
    posX += speed * directionX;
    posY += speed * directionY;

    // Відбиття від країв контейнера
    if (posX < 0 || posX + element.clientWidth > containerWidth) {
      directionX *= -1;
    }

    if (posY < 0 || posY + element.clientHeight > containerHeight) {
      directionY *= -1;
    }

    element.style.left = `${posX}px`;
    element.style.top = `${posY}px`;

    requestAnimationFrame(moveElement);
  }

  moveElement();
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
