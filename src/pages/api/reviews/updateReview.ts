import { update } from '@/services/reviews/update';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function updateReview(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'PUT') {
      const { status, id } = request.body
      const token: string = request.cookies.token || '';
      const res = await update({ status, id, token });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}