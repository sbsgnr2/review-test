import axios from 'axios'

export interface bodyType { 
  token: string 
}

export function getAllLocations (body: bodyType) {
  const API_URL = process.env.API_URL
  return axios.get(`${API_URL}/locations/by?&includes=true`, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}});
}
