import axios from 'axios'
// http://DOMAIN.XX/
// http://localhost:5000/
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/php'
})

export default http
