import axios from 'axios'

export function login (
  body : { email: string, password: string }) {
  const API_BASE_URL = process.env.API_URL
  return axios.post(`${API_BASE_URL}/user/login`, body, {headers: {
    'Content-Type': 'application/json',
  }})
}