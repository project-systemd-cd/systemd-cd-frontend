import { StatusPipeline } from 'domain/Backend/@types'

export const StatusBadgePipeline = ({
  status,
  width,
  height,
}: {
  status: StatusPipeline
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ?? height ?? '24'}
      height={height ?? width ?? '24'}
      viewBox='0 0 80 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {(() => {
        switch (status) {
          case 'synced':
            return (
              <path
                d='M26.1818 56.8806L8.04545 38.7015L2 44.7612L26.1818 69L78 17.0597L71.9545 11L26.1818 56.8806Z'
                fill='#00D651'
              />
            )
          case 'syncing':
            return (
              <path
                d='M57.2086 21.978L48.3538 30.9888L72.3435 30.9469L71.9667 6.9601L63.1118 15.9709C49.6493 2.74126 28.1785 2.77871 15.1324 16.0546C10.4983 20.7702 7.59004 26.5322 6.3353 32.5613L15.0916 32.546C16.1708 28.7061 18.2429 25.0744 21.224 22.0408C30.9938 12.0989 47.1269 12.0708 57.2086 21.978ZM72.6626 47.4377L63.9063 47.453C62.7671 51.293 60.755 54.9246 57.7739 57.9582C48.004 67.9001 31.8709 67.9282 21.7892 58.021L30.6441 49.0103L6.65435 49.0521L7.03118 73.0389L15.886 64.0282C29.3485 77.2578 50.8194 77.2203 63.8655 63.9445C68.4995 59.2289 71.4078 53.4668 72.6626 47.4377Z'
                fill='#326DE6'
              />
            )
          case 'out of sync':
            return (
              <path
                d='M6 40L11.9925 45.9925L35.75 22.2775V74H44.25V22.2775L67.965 46.035L74 40L40 6L6 40Z'
                fill='#FF9737'
              />
            )
          case 'failed':
            return (
              <path
                d='M74 12.8486L67.1514 6L40 33.1514L12.8486 6L6 12.8486L33.1514 40L6 67.1514L12.8486 74L40 46.8486L67.1514 74L74 67.1514L46.8486 40L74 12.8486Z'
                fill='#FF0000'
              />
            )
          default:
            return (
              <path
                d='M36 64H44V56H36V64ZM40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM40 72C22.36 72 8 57.64 8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72ZM40 16C31.16 16 24 23.16 24 32H32C32 27.6 35.6 24 40 24C44.4 24 48 27.6 48 32C48 40 36 39 36 52H44C44 43 56 42 56 32C56 23.16 48.84 16 40 16Z'
                fill='#6D6B6D'
              />
            )
        }
      })()}
    </svg>
  )
}