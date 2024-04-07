import axios from 'axios'

export interface bodyType {
  name: string, 
  slug: string,
  description?: string,
  smsMonthlyLimit: number,
  tags?: string[],
  logo?: string,
  token: string
}

export function create (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/accounts`, body, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}