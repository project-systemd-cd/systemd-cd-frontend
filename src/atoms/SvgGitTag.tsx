export const SvgGitTag = ({
  width,
  height,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) => (
  <svg
    width={width ?? '16'}
    height={height ?? '16'}
    viewBox='0 0 80 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={'fill-base-content' + className}
  >
    <path d='M58.7667 19.4667C57.5667 17.7667 55.5667 16.6667 53.3333 16.6667L16.6667 16.7001C13 16.7001 10 19.6667 10 23.3334V56.6667C10 60.3334 13 63.3001 16.6667 63.3001L53.3333 63.3334C55.5667 63.3334 57.5667 62.2334 58.7667 60.5334L73.3333 40.0001L58.7667 19.4667ZM53.3333 56.6667H16.6667V23.3334H53.3333L65.1667 40.0001L53.3333 56.6667Z' />
  </svg>
)
