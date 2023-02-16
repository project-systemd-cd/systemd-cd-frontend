import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTokenHydration } from '../../domain/Atom/token'

export const useIsSignedIn = () => {
  const { token } = useTokenHydration()

  return token != null && token != ''
}

export const useLoginRequest = (router: NextRouter) => {
  useEffectIsSinedIn((isSignedIn) => {
    if (!isSignedIn) {
      router.replace({
        pathname: '/login',
        query: { redirect_to: router.asPath },
      })
    }
  })
}

const useEffectIsSinedIn = (effect: (isSignedIn: boolean) => void) => {
  const [initital, setInitial] = useState(true)
  const isSignedIn = useIsSignedIn()
  useEffect(() => {
    if (!initital) {
      effect(isSignedIn)
    }
    setInitial(false)
  }, [effect, initital, isSignedIn])
}
