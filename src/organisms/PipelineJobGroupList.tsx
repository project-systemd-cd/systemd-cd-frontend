import { JobGroupList } from 'domain/Backend/@types'
import { PipelineJobGroupListItem } from 'src/molecules/PipelineJobGroupListItem'

export const PipelineJobGroupList = ({
  jobGroups,
}: {
  jobGroups: JobGroupList
}) => {
  return (
    <div className='flex flex-col gap-4'>
      {jobGroups.map((jobs) => {
        return <PipelineJobGroupListItem key={jobs[0].group_id} jobs={jobs} />
      })}
    </div>
  )
}
