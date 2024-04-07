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
}

export function create (body : bodyType) {
  return axios.post(`/api/locations/createLocation`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}