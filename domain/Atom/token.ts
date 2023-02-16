import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import React, { useEffect, useState } from 'react'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const tokenState = atom<string | null>({
  key: 'token',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const useSetToken = () => {
  const setState = useSetRecoilState(tokenState)

  const setToken = React.useCallback(
    (token: string | null) => setState(token),
    [setState]
  )

  return { setToken }
}

export const useToken = () => {
  return useRecoilValue(tokenState)
}

export const useTokenHydration = () => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  useEffect(() => {
    setIsInitial(false)
  }, [])
  const token = useRecoilValue(tokenState)
  return { token: isInitial === true ? null : token }
}
