import { SystemdService } from 'domain/Backend/@types'
import { StatusBadgeSystemdService } from 'src/atoms/StatusBadgeSystemdService'

export const SystemdServiceStatus = ({
  systemd_service: s,
}: {
  systemd_service: SystemdService
}) => {
  return (
    <div className='flex items-center gap-2'>
      <StatusBadgeSystemdService status={s.status} />
      <div>{s.name}</div>
    </div>
  )
}
