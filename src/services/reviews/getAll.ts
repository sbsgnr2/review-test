import axios from 'axios'

export interface bodyType { 
  page: string, 
  pageSize: string, 
  token: string 
}

export function getAll (body: bodyType) {
  const API_URL = process.env.API_URL
  return axios.get(`${API_URL}/reviews/by?page=${body.page}&pageSize=${body.pageSize}&includes=true`, 
  { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${body.token}`}});
}
