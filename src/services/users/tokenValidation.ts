import axios from 'axios'

export interface bodyType {
  token: string
}

export function tokenValidation (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.get(`${API_URL}/users/token/validate`, 
  { headers: { 'Authorization': `Bearer ${body.token}` }});
}