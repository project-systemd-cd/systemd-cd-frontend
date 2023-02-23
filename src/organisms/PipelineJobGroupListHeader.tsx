import { Pipeline } from 'domain/Backend/@types'
import { StatusBadgePipeline } from 'src/atoms/StatusBadgePipeline'
import { StatusLabelPipeline } from 'src/atoms/StatusLabelPIpeline'

export const PipelineJobGroupListHeader = ({
  pipeline,
}: {
  pipeline: Pipeline
}) => {
  return (
    <div className='flex items-center'>
      <div className='text-2xl'>{pipeline.name}</div>
      <div className='divider divider-horizontal' />
      <div className='flex gap-2 items-center truncate'>
        <div className='min-w-[24px]'>
          <StatusBadgePipeline status={pipeline.status} />
        </div>
        <StatusLabelPipeline status={pipeline.status} />
        <div className='truncate'>to {pipeline.commit_ref.substring(0, 8)}</div>
      </div>
      <Link
        className='ml-auto link link-hover'
        href={pipeline.git_remote_url}
        target='_blank'
      >
        {pipeline.git_remote_url}
      </Link>
    </div>
  )
}
