import { ButtonHTMLAttributes } from 'react'

export const ButtonPrimary = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
) => {
  return (
    <button
      {...props}
      className={`btn btn-primary w-full ${
        props.disabled == true ? 'btn-disabled' : ''
      } ${props.className}`}
    >
      {props.children}
    </button>
  )
}
