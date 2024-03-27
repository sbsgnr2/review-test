import axios from 'axios'

export interface bodyType {
  email: string, 
  password: string,
}

export function userLogin (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/users/token`, body, 
  { headers: { 'Content-Type': 'application/json'}});
}