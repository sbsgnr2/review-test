import { validateEmail } from '@/services/users/validateEmail';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function validateUserEmail(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const { email } = request.query
      const token = request.cookies.token;
      if (typeof token === 'string' && typeof email === 'string') {
        const res = await validateEmail({ email, token })
        if (res?.data?.data?.length > 0) {
          return response.status(200).json({ isValid: true })
        } else {
          return response.status(200).json({ isValid: false })
        }
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}