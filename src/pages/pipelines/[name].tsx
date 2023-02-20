import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipeline } from 'application/Pipeline/usePipeline'
import { useRouter } from 'next/router'
import { PipelineDetailPage } from 'src/templates/PipelineDetail'

export default function Pipeline() {
  // Check signed in
  const router = useRouter()
  useLoginRequest(router)

  const { name } = router.query

  const { isLoading, failed, message, pipeline } = usePipeline(
    Array.isArray(name) ? name.join() : name
  )

  if (isLoading || failed) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='btn btn-square btn-ghost loading' />
      </div>
    )
  }
  return <PipelineDetailPage pipeline={pipeline} />
}
