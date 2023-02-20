import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipelines } from 'application/Pipeline/usePipelines'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PipelineList } from 'src/organisms/PipelineList'

export default function Pipelines() {
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
    <>
      <PipelineList pipelines={Array.isArray(pipelines) ? pipelines : []} />
    </>
  )
}
