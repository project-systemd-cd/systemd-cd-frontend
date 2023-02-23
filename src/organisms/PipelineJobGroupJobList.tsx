import { JobGroup } from 'domain/Backend/@types'
import { PipelineJobCollapse } from 'src/molecules/PipelineJobCollapse'

export const PipelineJobGroupJobList = ({
  jobGroup,
}: {
  jobGroup: JobGroup
}) => {
  return (
    <div className='flex flex-col-reverse gap-8'>
      {jobGroup.map((j) => {
        return <PipelineJobCollapse key={j.id} job={j} />
      })}
    </div>
  )
}
