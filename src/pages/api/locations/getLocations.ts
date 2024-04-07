import { NextApiRequest, NextApiResponse } from 'next'
import { locationsAdapter } from '@/adapters/locations';
import { getAll } from '@/services/locations/getAll';

export default async function getLocations(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const { page, pageSize } = request.query
      const token = request.cookies.token;
      if (typeof token === 'string' && typeof page === 'string' && typeof pageSize === 'string') {
        const res = await getAll({ page, pageSize, token })
        const { transformedData } = locationsAdapter(res.data)
        return response.status(res.status).json(transformedData)
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}
