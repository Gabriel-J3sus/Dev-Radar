import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.DEV_RADAR_API_URL
})
