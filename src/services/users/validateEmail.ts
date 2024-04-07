import axios from 'axios'

export interface bodyType {
  email: string, 
  token: string
}

export function validateEmail (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.get(`${API_URL}/users/by?@filter_like_email=${body.email}`, { 
    headers: { 'Content-Type': 'application/json', 
    'Authorization': `Bearer ${body.token}`}
  })
}
