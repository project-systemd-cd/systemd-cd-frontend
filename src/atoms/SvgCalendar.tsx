export const SvgCalendar = ({
  width,
  height,
  className = '',
}: {
  width?: number
  height?: number
  className?: string
}) => (
  <svg
    width={width ?? height ?? '16'}
    height={height ?? width ?? '16'}
    viewBox='0 0 80 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={'fill-base-content' + className}
  >
    <path d='M64.1111 11.9H60.6667V5H53.7778V11.9H26.2222V5H19.3333V11.9H15.8889C12.0656 11.9 9 15.005 9 18.8V67.1C9 70.895 12.0656 74 15.8889 74H64.1111C67.9 74 71 70.895 71 67.1V18.8C71 15.005 67.9 11.9 64.1111 11.9ZM64.1111 67.1H15.8889V32.6H64.1111V67.1ZM64.1111 25.7H15.8889V18.8H64.1111V25.7ZM22.7778 39.5H40V56.75H22.7778V39.5Z' />
  </svg>
)
