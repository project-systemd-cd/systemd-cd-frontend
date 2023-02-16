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
  name?: string | undefined
  status?: 'synced' | 'syncing' | 'out of sync' | 'failed' | undefined
  commit_ref?: string | undefined
  systemd_services?: SystemdService[] | undefined
}

export type PipelineWithEmbedJobs = {
  name?: string | undefined
  status?: 'synced' | 'syncing' | 'out of sync' | 'failed' | undefined
  commit_ref?: string | undefined
  systemd_services?: SystemdService[] | undefined
  jobs?: Job[] | undefined
}

export type SystemdService = {
  name?: string | undefined
  status?: 'running' | 'stopped' | 'failed' | 'not found' | undefined
}

export type JobList = Job[]

export type Job = {
  group_id?: string | undefined
  id?: string | undefined
  pipeline_name?: string | undefined
  commit_id?: string | undefined
  type?: 'test' | 'build' | 'install' | undefined
  status?: 'pending' | 'done' | 'in progress' | 'failed' | 'canceled' | undefined
  /** unix time */
  timestamp?: number | undefined
  /** unix time */
  duration?: number | undefined
  logs?: JobLog[] | undefined
}

export type JobLog = {
  command?: string | undefined
  output?: string | undefined
}

export type LoginRequestBody = {
  username?: string | undefined
  password: string
}
