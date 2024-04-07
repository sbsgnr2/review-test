import { NextApiRequest, NextApiResponse } from 'next'
import { getAll } from '@/services/users/getAll';
import { usersAdapter } from '@/adapters/users';

export default async function getUsers(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const { page, pageSize } = request.query
      const token = request.cookies.token;
      if (typeof token === 'string' && typeof page === 'string' && typeof pageSize === 'string') {
        const res = await getAll({ page, pageSize, token })
        const { transformedData } = usersAdapter(res.data)
        return response.status(res.status).json(transformedData)
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}
