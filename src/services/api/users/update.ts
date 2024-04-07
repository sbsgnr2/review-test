import axios from 'axios'

export interface bodyType {
  email?: string, 
  locations?: any,
  message?: string | null,
  name?: string | null,
  password?: string | null,
  isActive?: number,
  phone?: string | null
  singleUser?: boolean
  subject?: string | null
  surname?: string | null
  image?: string | null
  tags?: string[] | null
  type?: number
  userId: number
  token?: string
}

export function update (body : bodyType) {
  return axios.put(`/api/users/updateUser`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}