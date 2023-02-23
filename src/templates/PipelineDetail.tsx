import { Pipeline, PipelineWithEmbedJobs } from 'domain/Backend/@types'
import { SystemdServiceStatus } from 'src/molecules/SystemdServiceStatus'
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
    <div className='ml-4 flex flex-wrap gap-8'>
      {(pipeline.systemd_services ?? []).map((s) => (
        <SystemdServiceStatus
          key={`systemd-service.${s.name}`}
          systemd_service={s}
        />
      ))}
    </div>
    <div className='divider mb-8' />
    <div className='px-4'>
      {'jobs' in pipeline && (
        <PipelineJobGroupList
          jobGroups={Array.isArray(pipeline.jobs) ? pipeline.jobs : []}
        />
      )}
    </div>
  </div>
)
