import axios from 'axios'

export interface bodyType {
  email: string, 
  password: string,
}

export function userLogin (body : bodyType) {
  return axios.post(`/api/users/login`, body, 
  { headers: { 'Content-Type': 'application/json'}});
}