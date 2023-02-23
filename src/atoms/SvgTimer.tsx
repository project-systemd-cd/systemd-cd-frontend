export const SvgTimer = ({
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
    <path d='M50 3H29V9.95569H50V3ZM36 48.212H43V27.3449H36V48.212ZM64.105 25.1887L69.075 20.2501C67.57 18.4764 65.925 16.8071 64.14 15.3464L59.17 20.2849C53.745 15.9724 46.92 13.3988 39.5 13.3988C22.105 13.3988 8 27.4145 8 44.6994C8 61.9843 22.07 76 39.5 76C56.93 76 71 61.9843 71 44.6994C71 37.3611 68.41 30.5793 64.105 25.1887ZM39.5 69.0791C25.955 69.0791 15 58.1934 15 44.7342C15 31.2749 25.955 20.3892 39.5 20.3892C53.045 20.3892 64 31.2749 64 44.7342C64 58.1934 53.045 69.0791 39.5 69.0791Z' />
  </svg>
)
