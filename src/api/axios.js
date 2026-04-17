import axios from "axios"

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": "reqres_f58b948a359041178cbb63c69c37ad94",
  },
})

export default api