import { update } from '@/services/api/reviews/update'

export function useOptionsStatesDDL ({ id }: { id: string }) {
  async function handleStatus(selectedValue: string) {
    await update({ status: selectedValue, id }).catch((error) => {
      switch (error.response?.status) {
        case 401:
          window.location.href = '/login'
          break
        default:
          break
      }
    })
  }

  return { handleStatus }
}