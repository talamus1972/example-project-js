import { fetchEvents } from './api.js';
import { page, reset } from './pagination.js';
import { keyword } from './searchForm.js';

const eventsList = document.querySelector('.events-list');

function createMarkup(events) {
  const markup = events
    .map(
      ({ name, id }) => `
  <li id="${id}">
  <p id="${id}">${name} </p>
  </li>`
    )
    .join('');
  eventsList.innerHTML = markup;
}

export async function renderEvents(page, keyword) {
  try {
    const data = await fetchEvents(page, keyword);
    if (!data.page.totalElements) {
      alert('Not find');
    }

    if (page === 1) {
      reset(data.page.totalElements);
    }
    createMarkup(data._embedded.events);
  } catch (error) {
    console.error(error);
  }
}

renderEvents(page, keyword);
