import { useStore } from '@/zustand/auth'

export function useUserInfo() {
  const { user }: any = useStore()
  function handleLogOut() {
    window.location.href = '/login'
  }
  return { user, handleLogOut }
}