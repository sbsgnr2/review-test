import { NextApiRequest, NextApiResponse } from 'next'
import { companiesAdapter } from '@/adapters/companies';
import { getAll } from '@/services/companies/getAll';

export default async function getCompanies(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const { page, pageSize } = request.query
      const token = request.cookies.token;
      if (typeof token === 'string' && typeof page === 'string' && typeof pageSize === 'string') {
        const res = await getAll({ page, pageSize, token })
        const { transformedData } = companiesAdapter(res.data)
        return response.status(res.status).json(transformedData)
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}