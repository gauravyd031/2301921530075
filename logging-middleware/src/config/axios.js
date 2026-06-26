const axios = require("axios");
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

// console.log(api.defaults.baseURL);
// console.log(api.defaults.headers.Authorization);

module.exports = api;