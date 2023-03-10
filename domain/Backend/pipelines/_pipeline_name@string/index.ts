/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    query?: Types.Embed & Types.From & Types.To & Types.Asc | undefined
    status: 200

    /** Success */
    resBody: Types.PipelineWithEmbedJobs | Types.Pipeline
  }
}
