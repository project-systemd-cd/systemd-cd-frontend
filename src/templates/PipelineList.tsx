import { PipelineList as PipelineList2 } from 'domain/Backend/@types'
import { PipelineList } from 'src/organisms/PipelineList'

export const PipelineListPage = ({
  pipelines,
}: {
  pipelines: PipelineList2
}) => {
  return (
    <>
      <PipelineList pipelines={pipelines} />
    </>
  )
}
