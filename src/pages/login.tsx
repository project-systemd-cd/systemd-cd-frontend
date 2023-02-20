import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSignIn } from '../../application/Auth/signIn'
import { LoginPage } from '../templates/Login'

export default function Login() {
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
    <LoginPage
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
