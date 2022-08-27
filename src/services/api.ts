import axios from 'axios'

const token = localStorage.getItem('@wavy:token')

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
