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
  git_remote_url: string
  git_target_branch: string
  git_target_tag_regex?: string | undefined
  status: StatusPipeline
  commit_ref: string
  systemd_services?: SystemdService[] | undefined
}

export type PipelineWithEmbedJobs = {
  name: string
  git_remote_url: string
  git_target_branch: string
  git_target_tag_regex?: string | undefined
  status: StatusPipeline
  commit_ref: string
  systemd_services?: SystemdService[] | undefined
  jobs?: JobGroupList | undefined
}

export type StatusPipeline = 'synced' | 'syncing' | 'out of sync' | 'failed'

export type SystemdService = {
  name: string
  status: StatusSystemdService
}

export type StatusSystemdService = 'running' | 'stopped' | 'failed' | 'not found'

export type JobGroupList = JobGroup[]

export type JobGroup = Job[]

export type Job = {
  group_id: string
  id: string
  pipeline_name: string
  branch: string
  tag?: string | undefined
  commit_id: string
  commit_author: string
  commit_message: string
  type: 'test' | 'build' | 'install'
  status: StatusPipelineJob
  /** unix time */
  timestamp?: number | undefined
  /** seconds */
  duration?: number | undefined
  logs: JobLog[]
}

export type StatusPipelineJob = 'pending' | 'done' | 'in progress' | 'failed' | 'canceled'

export type JobLog = {
  command: string
  output: string
}

export type LoginRequestBody = {
  username?: string | undefined
  password: string
}
