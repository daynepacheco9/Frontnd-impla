import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-impla.onrender.com",
    timeout: 500000
})