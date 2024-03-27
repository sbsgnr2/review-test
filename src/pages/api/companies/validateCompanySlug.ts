import { NextApiRequest, NextApiResponse } from 'next'
import { validateSlug } from '@/services/companies/validateSlug';

export default async function validateCompanySlug(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'GET') {
      const { slug } = request.query
      const token = request.cookies.token;
      if (typeof token === 'string' && typeof slug === 'string') {
        const res = await validateSlug({ slug, token })
        if (res.data?.code === 'SlugAlreadyRegistered') {
          return response.status(200).json({ isValid: false })
        } else {
          return response.status(200).json({ isValid: true })
        }
      }
      return response.status(400).json({ error: 'Invalid Fields' })
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}