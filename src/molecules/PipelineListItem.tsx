import { Pipeline } from 'domain/Backend/@types'
import { StatusBadgePipeline } from 'src/atoms/StatusBadgePipeline'
import { StatusLabelPipeline } from 'src/atoms/StatusLabelPIpeline'

export const PipelineListItem = ({ pipeline }: { pipeline: Pipeline }) => {
  return (
    <div
      className={`
        flex flex-col space-y-2 p-4
        border border-slate-200 dark:border-slate-700
        rounded-lg bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-lg
      `}
    >
      <div className='text-lg font-bold whitespace-nowrap'>{pipeline.name}</div>
      <div className='flex justify-between gap-x-8'>
        <div className='truncate'>{pipeline.git_remote_url}</div>
        <div>{pipeline.git_target_tag_regex ?? pipeline.git_target_branch}</div>
      </div>
      <div className='flex justify-between pt-4'>
        <div className='flex gap-2 items-center'>
          <StatusBadgePipeline status={pipeline.status} />
          <StatusLabelPipeline status={pipeline.status} />
        </div>
        <div>{pipeline.commit_ref.substring(0, 8)}</div>
      </div>
    </div>
  )
}
