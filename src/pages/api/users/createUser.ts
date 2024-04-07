import { create } from '@/services/users/create';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createUser(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { email, locations, message, name, phone, singleUser, subject, surname, tags, type } = request.body
      const token: string = request.cookies.token || '';
      const res = await create({ email, locations, message, name, phone, singleUser, subject, surname, tags, type, token });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}