import { PipelineList as PipelineList2 } from 'domain/Backend/@types'
import Link from 'next/link'
import { PipelineListItem } from 'src/molecules/PipelineListItem'

export const PipelineList = ({ pipelines }: { pipelines: PipelineList2 }) => {
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
              <PipelineListItem pipeline={p} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
