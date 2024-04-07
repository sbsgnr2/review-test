import axios from 'axios'

export interface bodyType {
  email: string, 
  locations?: any,
  message?: string | null,
  name?: string | null,
  password?: string | null,
  isActive?: string | null,
  phone?: string | null
  singleUser?: boolean
  subject?: string | null
  surname?: string | null
  tags?: string[] | null
  type?: number
  token: string
  userId: number
  image?: string | null
}

export function update (body : bodyType) {
  const API_URL = process.env.API_URL
  const { email, locations, message, name, password, isActive, phone, singleUser, subject, surname, image, tags, type, userId, token } = body
  let payload: any = { singleUser, image }
  if (locations) {
    payload = { ...payload, locations }
  }
  if (message) {
    payload = { ...payload, message }
  }
  if (name) {
    payload = { ...payload, firstName: name }
  }
  if (surname) {
    payload = { ...payload, lastName: surname }
  }
  if (password) {
    payload = { ...payload, password }
  }
  if (phone) {
    payload = { ...payload, phone }
  }
  if (phone) {
    payload = { ...payload, phone }
  }
  if (subject) {
    payload = { ...payload, subject }
  }
  if (tags) {
    payload = { ...payload, tags }
  }
  if (type) {
    payload = { ...payload, type }
  }
  if (isActive) {
    payload = { ...payload, isActive }
  }
  if (email) {
    payload = { ...payload, email }
  }
  
  return axios.put(`${API_URL}/users/${body.userId}`, payload, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}})
}
