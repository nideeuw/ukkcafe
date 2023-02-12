import axios from "axios";

export const url = import.meta.env.VITE_PUBLIC_API

export default axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' }
})