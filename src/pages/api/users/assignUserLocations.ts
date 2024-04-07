import { assignLocations } from '@/services/users/assignLocations';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function assignUserLocations(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { userId, locationIds } = request.body
      const token: string = request.cookies.token || '';
      const res = await assignLocations({ userId, locationIds, token });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}