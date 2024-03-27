import { NextApiRequest, NextApiResponse } from 'next'

export default async function getCookie(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const token = request.cookies.token;
      return response.status(200).json({ data: token })
    }
  } catch (error: any) {
    return response.status(500).json({ error: 'Unhandled Error' })
  }
}