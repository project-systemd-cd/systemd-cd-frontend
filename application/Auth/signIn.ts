import { useSetToken } from 'domain/Atom/token'
import { useApi } from 'domain/Backend'
import { useForm } from 'react-hook-form'
import { LoginRequestBody } from 'domain/Backend/@types'
import { NEXT_PUBLIC_API_URL } from 'domain/Env'

export const useSignIn = () => {
  const { handleSubmit, register } = useForm<LoginRequestBody>()

  const registerUsername = {
    ...register('username', {
      required: 'Required',
    }),
  }
  const registerPassword = {
    ...register('password', {
      required: 'Required',
    }),
  }

  const api = useApi(NEXT_PUBLIC_API_URL())
  const { setToken } = useSetToken()
  const signIn = (callback: (success: boolean) => Promise<void>) => {
    return handleSubmit(async (data) => {
      const success = await api.users.sign_in
        .post({
          body: { username: data.username, password: data.password },
        })
        .then(async (res) => {
          if (res.status == 200) {
            await setToken(res.body.token)
            return true
          }
          return false
        })
        .finally(() => {
          return false
        })
      callback(success)
    })()
  }

  return {
    registerUsername,
    registerPassword,
    signIn,
  }
}
