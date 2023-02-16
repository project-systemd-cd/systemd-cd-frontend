import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSignIn } from '../../application/Auth/signIn'
import { Login } from '../templates/Login'

const LoginPage: NextPage = () => {
  const router = useRouter()
  var { redirect_to } = router.query
  var redirectTo = '/pipelines'
  if (typeof redirect_to == 'string') {
    redirectTo = redirect_to
  }

  const { registerUsername, registerPassword, signIn } = useSignIn()

  const [initial, setInitial] = useState(true)
  const [disabled, setDisabled] = useState(false)

  return (
    <Login
      registerUsername={registerUsername}
      registerPassword={registerPassword}
      signIn={async () => {
        setDisabled(true)
        signIn(async (success) => {
          setInitial(false)
          if (success) {
            setInitial(true)
            await router.push({ pathname: redirectTo })
          }
        }).then(() => {
          setDisabled(false)
        })
      }}
      initial={initial}
      disabled={disabled}
    />
  )
}

export default LoginPage
