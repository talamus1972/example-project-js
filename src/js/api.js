import axios from 'axios';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';

export async function fetchEvents(page, keyword) {
  const response = await axios.get(
    `${BASE_URL}events.json?apikey=${API_KEY}&page=${page}&keyword=${keyword}`
  );
  return response.data;
}
export async function fetchEventId(id) {
  const response = await axios.get(
    `${BASE_URL}events.json?apikey=${API_KEY}&id=${id}`
  );
  return response.data;
}
