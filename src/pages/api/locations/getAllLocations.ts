import { NextApiRequest, NextApiResponse } from 'next'
import { locationsAdapter } from '@/adapters/locations';
import { getAllLocations } from '@/services/locations/getAllLocations';

export default async function getAllLocationsWithoutPagination(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const token = request.cookies.token;
      if (typeof token === 'string') {
        const res = await getAllLocations({ token })
        const { transformedData } = locationsAdapter(res.data)
        return response.status(res.status).json(transformedData)
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}
