import axios from 'axios';

const API_KEY = "RGAPI-37b6de4a-b8c8-4eea-b243-148b12a64b2e";
export const requestAPI = subUrl => axios.get(`/lol/${subUrl}?api_key=${API_KEY}`);