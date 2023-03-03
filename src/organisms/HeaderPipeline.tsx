import { Pipeline, PipelineWithEmbedJobs } from 'domain/Backend/@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StatusBadgePipeline } from 'src/atoms/StatusBadgePipeline'
import { StatusLabelPipeline } from 'src/atoms/StatusLabelPIpeline'
import { GitBranch } from 'src/molecules/GitBranch'
import { GitCommit } from 'src/molecules/GitCommit'
import { GitTag } from 'src/molecules/GitTag'

export const HeaderPipeline = ({
  pipeline,
}: {
  pipeline: Pipeline | PipelineWithEmbedJobs
}) => {
  const router = useRouter()
  const tag =
    'jobs' in pipeline &&
    Array.isArray(pipeline.jobs) &&
    pipeline.jobs.length != 0 &&
    pipeline.jobs[0].length != 0
      ? pipeline.jobs[0][0].tag
      : undefined
  return (
    <div className='flex items-center'>
      {router.pathname != '/pipelines/[name]' ? (
        <Link
          className='text-2xl whitespace-nowrap'
          href={{
            pathname: '/pipelines/[name]',
            query: { name: pipeline.name },
          }}
        >
          {pipeline.name}
        </Link>
      ) : (
        <div className='text-2xl whitespace-nowrap'>{pipeline.name}</div>
      )}
      <div className='divider divider-horizontal' />
      <div className='flex gap-2 items-center truncate'>
        <div className='min-w-[24px]'>
          <StatusBadgePipeline status={pipeline.status} />
        </div>
        <div className='mr-2'>
          <StatusLabelPipeline status={pipeline.status} />
        </div>
        to
        {tag != undefined ? (
          <GitTag tag={tag} />
        ) : (
          <GitBranch branch={pipeline.git_target_branch} />
        )}
        <GitCommit commit={pipeline.commit_ref.substring(0, 8)} />
      </div>
      <Link
        className='ml-auto link link-hover hidden lg:block'
        href={pipeline.git_remote_url}
        target='_blank'
      >
        {pipeline.git_remote_url}
      </Link>
    </div>
  )
}
