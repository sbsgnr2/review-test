import axios from 'axios'

export interface bodyType {
  id: string,
  status: string, 
  token: string
}

export function update (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.put(`${API_URL}/reviews/${body.id}`, body, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}
