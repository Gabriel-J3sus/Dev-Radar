import axios from 'axios'

// const isDev = process.env.NODE_ENV === 'development';

export function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: process.env.DEV_RADAR_API_URL
  })

  return api
}

export const api = getAPIClient()
