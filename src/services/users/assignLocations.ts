import axios from 'axios'

export interface bodyType {
  userId: string, 
  locationIds: any,
  token: string
}

export function assignLocations (body : bodyType) {
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/users/locations/assign`, body, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}
