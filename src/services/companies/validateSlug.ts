import axios from 'axios'

export interface bodyType {
  slug: string, 
  token: string
}

export function validateSlug (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.get(`${API_URL}/accounts/slug/validate/${body.slug}`, { 
    headers: { 'Content-Type': 'application/json', 
    'Authorization': `Bearer ${body.token}`}
  })
}
