import { useApi } from 'domain/Backend'
import { NEXT_PUBLIC_API_URL } from 'domain/Env'
import useAspidaSWR from '@aspida/swr'

export const usePipeline = (name?: string) => {
  const api = useApi(NEXT_PUBLIC_API_URL())

  const { isLoading, data } = useAspidaSWR(
    api.pipelines._pipeline_name(name ?? ''),
    'get',
    {
      refreshInterval: 5000,
      query: { embed: ['jobs'] },
      key: name != undefined ? undefined : null,
    }
  )

  if (isLoading) {
    return {
      isLoading: true as true,
    }
  }
  if (data?.status != 200) {
    return {
      isLoading: false as false,
      failed: true as true,
      message:
        ({ message: '', ...data?.body }.message as string) ??
        'failed to request',
      pipeline: null,
    }
  }
  return {
    isLoading: false as false,
    failed: false as false,
    pipeline: data?.body,
    message: null,
  }
}
