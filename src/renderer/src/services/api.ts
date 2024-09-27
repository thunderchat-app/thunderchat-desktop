import axios from 'axios'

const api = axios.create({
  baseURL: 'localhost:3003'
})

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')

  config.headers.set('Authorization', `Bearer ${token}`)

  return config
})

export { api }
