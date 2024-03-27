import axios from 'axios'

export interface bodyType {
  name: string, 
  slug: string,
  description?: string,
  smsMonthlyLimit: number,
  tags?: string[],
  logo?: string,
}

export function create (body : bodyType) {
  return axios.post(`/api/companies/createCompany`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}