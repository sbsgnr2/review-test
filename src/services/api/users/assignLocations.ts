import axios from 'axios'

export interface bodyType {
  userId: number, 
  locationIds: any
}

export function assignLocations (body : bodyType) {
  return axios.post(`/api/users/assignUserLocations`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}