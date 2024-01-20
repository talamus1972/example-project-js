import { eventsList } from './events';
import { fetchEventId } from './api';

const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
eventsList.addEventListener('click', findEvent);

function findEvent(event) {
  const eventId = event.target.id;
  if (eventId) {
    backdrop.classList.remove('is-hidden');
    getEvent(eventId);
  }
}

function renderModal(data) {
  const markup = `
<img src="${data[0].images[0].url}" width="200" height="200" />
<p>${data[0].name}</p>
<p>${data[0].info || ''}</p>
`;
  modal.innerHTML = markup;
}

async function getEvent(eventId) {
  try {
    const data = await fetchEventId(eventId);
    console.log(data._embedded.events);
    renderModal(data._embedded.events);
  } catch (error) {
    console.error(error);
  }
}

backdrop.addEventListener('click', () => {
  backdrop.classList.add('is-hidden');
});
