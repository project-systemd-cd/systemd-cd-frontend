import { useApi } from 'domain/Backend'
import { NEXT_PUBLIC_API_URL } from 'domain/Env'
import useAspidaSWR from '@aspida/swr'

export const usePipelines = () => {
  const api = useApi(NEXT_PUBLIC_API_URL())

  const { isLoading, data } = useAspidaSWR(api.pipelines, 'get', {
    refreshInterval: 5000,
  })

  if (isLoading) {
    return {
      isLoading: true as true,
    }
  }
  if (data?.status != 200 && data?.status != 204) {
    return {
      isLoading: isLoading,
      failed: true as true,
      message:
        ({ message: '', ...data?.body }.message as string) ??
        'failed to request',
      pipelines: null,
    }
  }
  return {
    isLoading: isLoading,
    failed: false as false,
    pipelines: Array.isArray(data?.body) ? data?.body ?? [] : [],
    message: null,
  }
}
