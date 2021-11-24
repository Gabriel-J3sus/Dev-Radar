import axios from 'axios'

// const isDev = process.env.NODE_ENV === 'development';

export function getAPIClient(ctx?: any) {
    const api = axios.create({
        baseURL: 'http://localhost:3333'
    })

    return api
}