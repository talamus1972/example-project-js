import { renderEvents } from './events';
import { page } from './pagination';

const form = document.querySelector('.form');

export let keyword = '';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  keyword = form.elements.searchInput.value.trim();
  renderEvents(page, keyword);
}
