import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use environment variables for the base URL
  // timeout: 10000, // Set a timeout for requests
})

export default axiosInstance
