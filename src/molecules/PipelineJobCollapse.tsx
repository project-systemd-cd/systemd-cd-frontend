import { Job } from 'domain/Backend/@types'
import { StatusBadgePipelineJob } from 'src/atoms/StatusBadgePipelineJob'

export const PipelineJobCollapse = ({ job }: { job: Job }) => {
  return (
    <div
      className={`
        collapse ${job.status == 'done' ? 'collapse-arrow' : 'collapse-close'}
        border border-slate-200 dark:border-slate-700
        rounded-lg bg-base-100
      `}
    >
      <input type='checkbox' disabled={job.status != 'done'} />
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
        {(Array.isArray(job.logs) ? job.logs : []).map((log, i, ary) => {
          return (
            <div key={`${job.id}.${log.command}`}>
              <div
                className={`
                  bg-neutral text-neutral-content p-4 rounded-lg
                  ${
                    job.status == 'failed' && i == ary.length - 1
                      ? 'bg-red-500 text-slate-50'
                      : ''
                  }
                `}
              >
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
                <div
                  className={`
                    bg-neutral text-neutral-content p-4 rounded-lg mt-4 ml-4
                    ${
                      job.status == 'failed' && i == ary.length - 1
                        ? 'bg-red-500 text-slate-50'
                        : ''
                    }
                  `}
                >
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
