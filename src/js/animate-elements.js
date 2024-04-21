'use strict';

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
