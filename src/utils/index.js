import axios from 'axios'

export const customFetch = axios.create({
  baseURL: 'http://localhost:80/api/v1',
})
