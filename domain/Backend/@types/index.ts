/* eslint-disable */
export type Pipeline_name = {
  pipeline_name: string
}

export type Job_id = {
  job_id: string
}

export type Embed = {
  embed?: ('jobs')[] | undefined
}

export type From = {
  from?: string | undefined
}

export type To = {
  to?: string | undefined
}

export type Asc = {
  asc?: boolean | undefined
}

export type TokenBody = {
  token: string
}

export type PipelineList = Pipeline[]

export type Pipeline = {
  name: string
  status: 'synced' | 'syncing' | 'out of sync' | 'failed'
  commit_ref: string
  systemd_services?: SystemdService[] | undefined
}

export type PipelineWithEmbedJobs = {
  name: string
  status: 'synced' | 'syncing' | 'out of sync' | 'failed'
  commit_ref: string
  systemd_services?: SystemdService[] | undefined
  jobs?: Job[] | undefined
}

export type SystemdService = {
  name: string
  status: 'running' | 'stopped' | 'failed' | 'not found'
}

export type JobList = Job[]

export type Job = {
  group_id: string
  id: string
  pipeline_name: string
  commit_id: string
  type: 'test' | 'build' | 'install'
  status: 'pending' | 'done' | 'in progress' | 'failed' | 'canceled'
  /** unix time */
  timestamp: number
  /** unix time */
  duration?: number | undefined
  logs: JobLog[]
}

export type JobLog = {
  command: string
  output: string
}

export type LoginRequestBody = {
  username?: string | undefined
  password: string
}
