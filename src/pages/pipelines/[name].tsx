import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipeline } from 'application/Pipeline/usePipeline'
import { useRouter } from 'next/router'
import { PipelineJobGroupList } from 'src/organisms/PipelineJobGroupList'

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
  return (
    <div className='p-8 bg-base-200 min-h-screen'>
      <div className='flex flex-wrap gap-12'>{pipeline.name}</div>
      <div>{pipeline.commit_ref.substring(0, 8)}</div>
      <div>{pipeline.status}</div>
      {'jobs' in pipeline && (
        <PipelineJobGroupList
          jobGroups={Array.isArray(pipeline.jobs) ? pipeline.jobs : []}
        />
      )}
    </div>
  )
}
