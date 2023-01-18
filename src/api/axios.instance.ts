import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BACK_LOCAL : process.env.REACT_APP_BACK_VERCEL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})