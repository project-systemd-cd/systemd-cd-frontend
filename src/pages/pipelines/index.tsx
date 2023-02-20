import { useLoginRequest } from 'application/Auth/isSignedIn'
import { usePipelines } from 'application/Pipeline/usePipelines'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Pipelines() {
  // Check signed in
  const router = useRouter()
  useLoginRequest(router)

  const { isLoading, failed, message, pipelines } = usePipelines()

  if (isLoading || failed) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='btn btn-square btn-ghost loading' />
      </div>
    )
  }
  return (
    <div className='p-8 bg-base-200 min-h-screen'>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-12'>
        {pipelines.map((p, i) => {
          return (
            <Link
              key={i}
              href={{
                pathname: '/pipelines/[name]',
                query: { name: p.name },
              }}
            >
              <div
                className={`
                  flex flex-col space-y-2 p-4
                  border border-slate-200 dark:border-slate-700
                  rounded-lg bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-lg
                `}
              >
                <div className='text-lg font-bold whitespace-nowrap'>
                  {p.name}
                </div>
                <div className='flex flex-wrap justify-between gap-x-8'>
                  <div className='truncate'>{p.git_remote_url}</div>
                  <div>{p.git_target_tag_regex ?? p.git_target_branch}</div>
                </div>
                <div className='flex justify-between'>
                  <div>{p.status}</div>
                  <div>{p.commit_ref.substring(0, 8)}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
