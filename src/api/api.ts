import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:7011/'
})

export default api