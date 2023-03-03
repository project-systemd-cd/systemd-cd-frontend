export const SvgGitCommit = ({
  width,
  height,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) => (
  <svg
    width={width ?? '18'}
    height={height ?? '18'}
    viewBox='0 0 80 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={'stroke-base-content' + className}
  >
    <path
      d='M40 30C34.477 30 30 34.477 30 40C30 45.523 34.477 50 40 50C45.523 50 50 45.523 50 40C50 34.477 45.523 30 40 30Z'
      strokeWidth='6.66667'
    />
    <path
      d='M10 40H30'
      strokeWidth='6.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M50 40H70'
      strokeWidth='6.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
