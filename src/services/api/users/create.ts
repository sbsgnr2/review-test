import axios from 'axios'

export interface bodyType {
  email: string, 
  locations: any,
  message?: string | null,
  name?: string | null,
  phone?: string | null
  singleUser?: boolean
  subject?: string | null
  surname?: string | null
  tags?: any
  type: number
}

export function create (body : bodyType) {
  return axios.post(`/api/users/createUser`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}