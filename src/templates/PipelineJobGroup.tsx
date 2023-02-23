import {
  Pipeline,
  PipelineWithEmbedJobs,
  JobGroup,
} from 'domain/Backend/@types'

import { HeaderPipeline } from 'src/organisms/HeaderPipeline'
import { PipelineJobGroupJobList } from 'src/organisms/PipelineJobGroupJobList'

export const PipelineJobGroupPage = ({
  pipeline,
  jobGroup,
}: {
  pipeline: Pipeline | PipelineWithEmbedJobs
  jobGroup: JobGroup
}) => {
  return (
    <div className='p-8 bg-base-200 min-h-screen'>
      <div className='mb-8'>
        <HeaderPipeline pipeline={pipeline} />
      </div>
      <div className='divider mb-8' />
      <PipelineJobGroupJobList jobGroup={jobGroup} />
    </div>
  )
}
