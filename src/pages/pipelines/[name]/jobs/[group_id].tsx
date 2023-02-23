import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipeline } from 'application/Pipeline/usePipeline'
import { useRouter } from 'next/router'
import { PipelineJobGroupPage } from 'src/templates/PipelineJobGroup'

export default function JobGroup() {
  // Check signed in
  const router = useRouter()
  useLoginRequest(router)

  const { name, group_id: jobGroupId } = router.query

  const { isLoading, failed, message, pipeline } = usePipeline(
    Array.isArray(name) ? name.join() : name
  )

  const jobGroup =
    !isLoading && !failed && 'jobs' in pipeline && Array.isArray(pipeline.jobs)
      ? pipeline.jobs.find(
          (jg) =>
            Array.isArray(jg) && jg.length != 0 && jg[0].group_id == jobGroupId
        )
      : undefined

  if (isLoading || failed || jobGroup == undefined) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='btn btn-square btn-ghost loading' />
      </div>
    )
  }
  return (
    <PipelineJobGroupPage
      pipeline={pipeline}
      jobGroup={Array.isArray(jobGroup) ? jobGroup : []}
    />
  )
}
