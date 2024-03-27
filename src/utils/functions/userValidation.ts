import { tokenValidation } from "@/services/users/tokenValidation"

export async function userValidation({ token, extraProps = {} }: { token: string, extraProps?: any }) {
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  try {
    await tokenValidation({ token })
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return { props: extraProps }
}