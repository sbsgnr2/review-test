import axios from 'axios'

export interface bodyType {
  folder: string, 
  image: any,
}

export async function upload (body : bodyType) {
  const formData = new FormData();
  formData.append('image', body.image);
  const response = await axios.get('/api/cookies/getCookie').catch((error) => {
    switch (error.response?.status) {
      case 401:
        window.location.href = '/login'
        break;
      default:
        // TODO:
        break;
    }
  })
  const API_URL = process.env.API_URL
  return axios.post(`${API_URL}/storage/images/${body.folder}`, formData, 
  { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${response?.data?.data || ''}` }});
}