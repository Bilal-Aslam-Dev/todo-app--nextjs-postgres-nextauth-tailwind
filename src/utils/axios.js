const axios = require('axios')

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const API = axios.create({
  baseURL: "/",
  headers: {
    'Content-Type': 'application/json',
  },
})

export default API
