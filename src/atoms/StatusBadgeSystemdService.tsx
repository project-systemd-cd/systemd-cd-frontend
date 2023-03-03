import { StatusSystemdService } from 'domain/Backend/@types'

export const StatusBadgeSystemdService = ({
  status,
  width,
  height,
}: {
  status: StatusSystemdService
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ?? height ?? '16'}
      height={height ?? width ?? '16'}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {(() => {
        switch (status) {
          case 'running':
            return (
              <g clipPath='url(#clip0_165_186)'>
                <path
                  d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z'
                  fill='#00D651'
                  fillOpacity='0.2'
                />
                <path
                  d='M40 65C53.8071 65 65 53.8071 65 40C65 26.1929 53.8071 15 40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65Z'
                  fill='#00D651'
                  fillOpacity='0.4'
                />
              </g>
            )
          case 'stopped':
            return (
              <g clipPath='url(#clip0_165_186)'>
                <path
                  d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z'
                  fill='#6D6B6D'
                  fillOpacity='0.2'
                />
                <path
                  d='M40 65C53.8071 65 65 53.8071 65 40C65 26.1929 53.8071 15 40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65Z'
                  fill='#6D6B6D'
                  fillOpacity='0.4'
                />
              </g>
            )
          case 'failed':
            return (
              <g clipPath='url(#clip0_165_186)'>
                <path
                  d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z'
                  fill='#FF0000'
                  fillOpacity='0.2'
                />
                <path
                  d='M40 65C53.8071 65 65 53.8071 65 40C65 26.1929 53.8071 15 40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65Z'
                  fill='#FF0000'
                  fillOpacity='0.4'
                />
              </g>
            )
          default:
            return (
              <g clipPath='url(#clip0_165_201)'>
                <path
                  d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z'
                  fill='#6D6B6D'
                  fillOpacity='0.2'
                />
                <path
                  d='M36 64H44V56H36V64ZM40 16C31.16 16 24 23.16 24 32H32C32 27.6 35.6 24 40 24C44.4 24 48 27.6 48 32C48 40 36 39 36 52H44C44 43 56 42 56 32C56 23.16 48.84 16 40 16Z'
                  fill='#6D6B6D'
                />
              </g>
            )
        }
      })()}
    </svg>
  )
}
