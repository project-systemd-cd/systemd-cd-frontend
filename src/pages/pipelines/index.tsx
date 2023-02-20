import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipelines } from 'application/Pipeline/usePipelines'
import { useRouter } from 'next/router'
import { PipelineListPage } from 'src/templates/PipelineList'

export default function PipelineList() {
  // Check signed in
  const router = useRouter()
  useLoginRequest(router)

  const { isLoading, failed, message, pipelines } = usePipelines()

  if (isLoading || failed) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='btn btn-square btn-ghost loading' />
      </div>
    )
  }
  return (
    <PipelineListPage pipelines={Array.isArray(pipelines) ? pipelines : []} />
  )
}
