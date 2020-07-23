const axios = require("axios");
const DEAULT_URL = "https://kr.api.riotgames.com/lol/";

const request = url => axios.get(`${DEAULT_URL}${url}?api_key=${process.env.API_KEY}`);

const api = {
    request,
}

module.exports = api