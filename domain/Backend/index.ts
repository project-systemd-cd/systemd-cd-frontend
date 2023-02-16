import api from './$api'
import aspida from '@aspida/fetch'
import { useToken } from '../Atom/token'

export const useApi = (baseURL: string) => {
  const token = useToken()

  let headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (token != null && token != '') {
    headers['Authorization'] = `Bearer ${token}`
  }

  return api(aspida(fetch, { baseURL, headers }))
}
