import { create } from '@/services/locations/create';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createLocation(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { name, slug, accountId, tags, location, address, country, city, region, zip } = request.body
      const token: string = request.cookies.token || '';
      const res = await create({ name, slug, accountId, token, tags, location, address, country, city, region, zip });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}