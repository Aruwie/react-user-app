import axios from "axios";

const API_KEY = "reqres_f58b948a359041178cbb63c69c37ad94";

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default api;