import axios from 'axios'

export interface bodyType {
  name: string, 
  slug: string,
  accountId: number,
  tags?: string | null,
  location?: string | null
  address?: string | null
  country?: string | null
  city?: string | null
  region?: string | null
  zip?: string | null
  token: string
}

export function create (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/locations`, body, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}
