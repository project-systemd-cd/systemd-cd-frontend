import { Job } from 'domain/Backend/@types'
import { StatusBadgePipelineJob } from 'src/atoms/StatusBadgePipelineJob'

export const PipelineJobCollapse = ({ job }: { job: Job }) => {
  return (
    <div className='collapse collapse-arrow border-2 dark:border rounded-lg'>
      <input type='checkbox' />
      <div
        className={`
          collapse-title
          flex items-center justify-between
          py-2 pl-4 pr-12 rounded-md
        `}
      >
        <div className='flex items-center gap-3'>
          <StatusBadgePipelineJob status={job.status} width={20} />
          <div className='text-lg'>{job.type}</div>
        </div>
        <div>{job.duration ?? 0}s</div>
      </div>
      <div className='collapse-content ml-6 flex flex-col gap-8'>
        {job.logs.map((log) => {
          return (
            <div key={`${job.id}.${log.command}`}>
              <div className='bg-neutral text-neutral-content p-4 rounded-lg'>
                {('$ ' + log.command)
                  .split('\n')
                  .filter((s) => s != '')
                  .map((s, i) => (
                    <div
                      key={`${job.id}.${log.command}.${i}`}
                      className='truncate'
                    >
                      {s}
                    </div>
                  ))}
              </div>
              {log.output != '' && (
                <div className='bg-neutral text-neutral-content p-4 rounded-lg mt-4 ml-4'>
                  {log.output
                    .split('\n')
                    .filter((s) => s != '')
                    .map((s, i) => (
                      <div
                        key={`${job.id}.${log.command}.${i}`}
                        className='grid grid-cols-[20px,1fr] gap-4'
                      >
                        <span className='text-end'>{i + 1}</span>
                        <span className='truncate'>{s}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
