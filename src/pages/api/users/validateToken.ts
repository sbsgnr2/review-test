import { tokenValidation } from '@/services/users/tokenValidation';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function validateToken(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const token = request.cookies.token || '';
      const res = await tokenValidation({ token });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}