import axios from 'axios'

export interface bodyType {
  email: string, 
}

export function validateEmailAddress (body : bodyType) {
  return axios.get(`/api/users/validateUserEmail?email=${body.email}`, 
  { headers: { 'Content-Type': 'application/json' } })
}
