'use strict';

const ticketTypes = document.querySelectorAll('.plan-item');

ticketTypes.forEach(element => {
  element.addEventListener('click', getTickets);
});

function getTickets(event) {
  const ticketItem = event.target.closest('.plan-item');
  const buyBtn = ticketItem.querySelector('.plan-item-btn');
  const title = ticketItem.querySelector('.plan-item-title');

  if (event.target === buyBtn) {
    ticketModalEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalTitle = ticketModalEl.querySelector('.ticket-info-name'),
      modalPrice = ticketModalEl.querySelector('#ticket-price'),
      modalTotalPrice = ticketModalEl.querySelector('#ticket-total-price');

    modalTitle.textContent = title.textContent;
    modalPrice.textContent = parseFloat(event.currentTarget.dataset.price);
    updateTotalPrice();
  }
}

const ticketModalEl = document.querySelector('.tickets-modal');

ticketModalEl.addEventListener('click', event => {
  event.preventDefault();
  const modalEl = event.target.closest('.ticket-dialog');

  const incrementBtn = modalEl.querySelector('.ticket-info-counter-increment'),
    decrementBtn = modalEl.querySelector('.ticket-info-counter-decrement');
  const counterEl = modalEl.querySelector('.ticket-info-counter-value');

  if (event.target === incrementBtn) {
    counterEl.value = parseFloat(counterEl.value) + 1;
    updateTotalPrice();
  } else if (event.target === decrementBtn) {
    counterEl.value = parseFloat(counterEl.value) - 1;
    updateTotalPrice();
  }
});

const modalCloseBtn = ticketModalEl.querySelector('.ticket-close');
modalCloseBtn.addEventListener('click', closeModal);

const ticketsCounter = document.querySelector('.ticket-info-counter-value');

ticketsCounter.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
  const price = document.querySelector('#ticket-price');
  const totalPrice = document.querySelector('#ticket-total-price');
  const counterValue = document.querySelector('.ticket-info-counter-value');

  if (parseFloat(counterValue.value) < 0 || !counterValue.value.trim()) {
    totalPrice.textContent = '0';
    return;
  }

  totalPrice.textContent =
    parseFloat(price.textContent) * parseFloat(counterValue.value);
}

function closeModal(event) {
  event.target.closest('.backdrop').classList.remove('active');
  document.body.style.overflow = null;
}
