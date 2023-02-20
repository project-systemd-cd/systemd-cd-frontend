import { StatusPipeline } from 'domain/Backend/@types'
import React from 'react'

export const StatusLabelPipeline = ({
  status,
  className = '',
}: {
  status: StatusPipeline
  className?: string
}) => {
  switch (status) {
    case 'synced':
      return <div className={`text-[#00D651] ${className}`}>Syced</div>
    case 'syncing':
      return <div className={`text-[#326DE6] ${className}`}>Syncing</div>
    case 'out of sync':
      return <div className={`text-[#FF9737] ${className}`}>Out of sync</div>
    case 'failed':
      return <div className={`text-[#FF0000] ${className}`}>Failed</div>
    default:
      return <div className={`text-[#6D6B6D] ${className}`}>Unknown</div>
  }
}
