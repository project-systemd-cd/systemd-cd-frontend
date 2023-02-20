import { Pipeline, PipelineWithEmbedJobs } from 'domain/Backend/@types'
import { PipelineJobGroupList } from 'src/organisms/PipelineJobGroupList'
import { PipelineJobGroupListHeader } from 'src/organisms/PipelineJobGroupListHeader'

export const PipelineDetailPage = ({
  pipeline,
}: {
  pipeline: Pipeline | PipelineWithEmbedJobs
}) => (
  <div className='p-8 bg-base-200 min-h-screen'>
    <div className='mb-8'>
      <PipelineJobGroupListHeader pipeline={pipeline} />
    </div>
    {'jobs' in pipeline && (
      <PipelineJobGroupList
        jobGroups={Array.isArray(pipeline.jobs) ? pipeline.jobs : []}
      />
    )}
  </div>
)
