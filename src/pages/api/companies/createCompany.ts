import { create } from '@/services/companies/create';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createCompany(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const { name, slug, description, smsMonthlyLimit, logo, tags } = request.body
      const token: string = request.cookies.token || '';
      const res = await create({ name, slug, description, smsMonthlyLimit, logo: logo, token, tags });
      return response.status(res.status).json(res.data)
    }
  } catch (error: any) {
    return response.status(error.response.status).json(error.response.data)
  }
}