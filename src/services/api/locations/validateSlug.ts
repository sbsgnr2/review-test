import axios from 'axios'

export interface bodyType {
  slug: string 
}

export function validateSlug (body : bodyType) {
  return axios.get(`/api/locations/validateLocationSlug?slug=${body.slug}`, 
  { headers: { 'Content-Type': 'application/json' } })
}
