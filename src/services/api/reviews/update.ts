import axios from 'axios'

export interface bodyType {
  status: string, 
  id: string,
}

export function update (body : bodyType) {
  return axios.put(`/api/reviews/updateReview`, body, 
  { headers: { 'Content-Type': 'application/json'}})
}