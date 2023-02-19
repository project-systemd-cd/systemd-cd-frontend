import { StatusPipelineJob } from 'domain/Backend/@types'
import React from 'react'

export const StatusLabelPipelineJob = ({
  status,
  className = '',
}: {
  status: StatusPipelineJob
  className?: string
}) => {
  switch (status) {
    case 'pending':
      return <div className={`text-[#FF9737] ${className}`}>Pending</div>
    case 'done':
      return <div className={`text-[#00D651] ${className}`}>Done</div>
    case 'in progress':
      return <div className={`text-[#326DE6] ${className}`}>In progress</div>
    case 'failed':
      return <div className={`text-[#FF0000] ${className}`}>Failed</div>
    case 'canceled':
      return <div className={`text-[#6D6B6D] ${className}`}>Canceled</div>
    default:
      return <div className={`text-[#6D6B6D] ${className}`}>Unknown</div>
  }
}
