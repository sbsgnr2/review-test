import { update } from '@/services/users/update';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function updateUser(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'PUT') {
      const { email, locations, message, name, password, isActive, phone, singleUser, subject, surname, image, tags, type, userId, token } = request.body
      const tokenKey: string = token? token : request.cookies.token || '';
      const res = await update({ email, locations, message, name, password, isActive, phone, singleUser, subject, surname, image, tags, type, userId, token: tokenKey });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}