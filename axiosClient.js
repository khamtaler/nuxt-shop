import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 1000,
})
export default axiosClient
// https://nuxt.com/docs/getting-started/data-fetching#client-only-fetching
