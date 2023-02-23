import { JobGroup } from 'domain/Backend/@types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StatusBadgePipelineJob } from 'src/atoms/StatusBadgePipelineJob'
import { StatusLabelPipelineJob } from 'src/atoms/StatusLabelPIpelineJob'
import { SvgCalendar } from 'src/atoms/SvgCalendar'
import { SvgTimer } from 'src/atoms/SvgTimer'
import { GitBranch } from './GitBranch'
import { GitCommit } from './GitCommit'
import { GitTag } from './GitTag'
import { Person } from './Person'

export const PipelineJobGroupListItem = ({ jobs }: { jobs: JobGroup }) => {
  const group_id = jobs[0]?.group_id ?? ''
  const branch = jobs[0].branch
  const tag = jobs[0].tag
  const commit_id = jobs[0]?.commit_id.substring(0, 8) ?? ''
  const commit_msg = jobs[0].commit_message
  const commit_author = jobs[0].commit_author
  let status = jobs[0].status
  let durationUnixTime = 0
  for (const j of jobs) {
    if (j.status == 'failed') {
      status = 'failed'
    }
    if (j.status == 'in progress') {
      status = 'in progress'
    }
    if (j.duration != undefined) {
      durationUnixTime += j.duration
    }
  }
  const timestampStr = (() => {
    const t = jobs[jobs.length - 1]?.timestamp
    if (t == undefined) {
      return undefined
    }
    return ElapsedSecondsToStr(
      Math.floor((new Date().getTime() - new Date(t * 1000).getTime()) / 1000)
    )
  })()
  const durationStr = (() => {
    const duration = new Date(durationUnixTime * 1000)
    return [
      ('0' + duration.getUTCHours()).slice(-2),
      ('0' + duration.getUTCMinutes()).slice(-2),
      ('0' + duration.getUTCSeconds()).slice(-2),
    ].join(':')
  })()

  const router = useRouter()
  const { name } = router.query

  return (
    <Link
      key={group_id}
      className={`
        grid gap-8 sm:grid-cols-2 md:grid-cols-[20%,30%,1fr]
        p-4 border border-slate-200 dark:border-slate-700
        rounded-lg bg-base-100 shadow-md
      `}
      href={{
        pathname: '/pipelines/[name]/jobs/[group_id]',
        query: { name: name, group_id: group_id },
      }}
    >
      <div>
        <div className='flex gap-2 items-center mb-4'>
          <div className='min-w-[18px]'>
            <StatusBadgePipelineJob status={status} width={18} />
          </div>
          <StatusLabelPipelineJob status={status} />
        </div>
        {timestampStr && (
          <div className='flex gap-2 items-center'>
            <SvgCalendar />
            <div>{timestampStr}</div>
          </div>
        )}
        <div className='flex gap-2 items-center'>
          <SvgTimer />
          <div>{durationStr}</div>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div className='truncate'>{commit_msg}</div>
        <div>
          {tag != undefined ? (
            <div className='flex items-center gap-4'>
              <GitTag tag={tag} />
              <GitCommit commit={commit_id} />
            </div>
          ) : (
            <div className='flex items-center gap-4'>
              <GitBranch branch={branch} />
              <GitCommit commit={commit_id} />
            </div>
          )}
        </div>
        <Person person={commit_author} />
      </div>
      <div
        className={`
          flex flex-row-reverse items-center gap-4 my-auto
          w-min min-h-[72px] md:min-h-[80px]
        `}
      >
        {(jobs ?? []).map((j) => (
          <div
            key={j.id}
            className={j.status == 'done' ? 'tooltip' : ''}
            data-tip={
              j.status == 'done'
                ? `${j.type}: ${new Date(
                    (j.duration ?? 0) * 1000
                  ).getSeconds()}s`
                : ''
            }
          >
            <StatusBadgePipelineJob status={j.status} width={24} />
          </div>
        ))}
      </div>
    </Link>
  )
}

const ElapsedSecondsToStr = (seconds: number) => {
  const units = [
    { name: 'year', size: 31536000 },
    { name: 'month', size: 2592000 },
    { name: 'day', size: 86400 },
    { name: 'hour', size: 3600 },
    { name: 'minute', size: 60 },
  ]
  for (let i = 0; i < units.length; i++) {
    const u = units[i]
    const count = Math.floor(seconds / u.size)
    if (count >= 1) {
      return `${count} ${u.name}${count == 1 ? '' : 's'} ago`
    }
  }
  if (seconds >= 5) {
    return `${seconds} second${seconds == 1 ? '' : 's'} ago`
  }
  return 'just now'
}
