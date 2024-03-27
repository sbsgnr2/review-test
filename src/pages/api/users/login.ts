import { NextApiRequest, NextApiResponse } from 'next'
import { userLogin } from '@/services/users/login';

export default async function login(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { email, password } = request.body
      const res = await userLogin({ email, password });
      if (res.status === 200) {
        const token = res.data.data.token
        response.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/`);
      }
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}