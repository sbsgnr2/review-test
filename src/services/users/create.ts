import axios from 'axios'

export interface bodyType {
  email: string, 
  locations: any,
  message?: string | null,
  name?: string | null,
  phone?: string | null
  singleUser?: boolean
  subject?: string | null
  surname?: string | null
  tags?: string[] | null
  type: number
  token: string
}

export function create (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/users`, body, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}
