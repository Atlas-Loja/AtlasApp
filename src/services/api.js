import axios from "axios";

const api = axios.create({
  baseURL: "https://api.atlasloja.com/",
});

export default api;
