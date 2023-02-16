import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = { label?: string } & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(function _(
  props,
  ref
) {
  return (
    <div className='w-full'>
      {props.label && (
        <label className='label'>
          <span className='label-text'>{props.label}</span>
        </label>
      )}
      <input
        ref={ref}
        //* NOTE: off cause
        //* Cannot read properties of undefined (reading 'toLowerCase')
        autoComplete={'off'}
        {...props}
        className='bg-inhert input input-primary input-bordered w-full'
      />
    </div>
  )
})
