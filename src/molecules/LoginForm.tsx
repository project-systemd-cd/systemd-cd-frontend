import { InputHTMLAttributes, RefAttributes } from 'react'
import { ButtonPrimary } from '../atoms/ButtonPrimary'
import { Input } from '../atoms/Input'

export type PropsLoginForm = {
  registerUsername: InputHTMLAttributes<HTMLInputElement> &
    RefAttributes<HTMLInputElement>
  registerPassword: InputHTMLAttributes<HTMLInputElement> &
    RefAttributes<HTMLInputElement>
  signIn: () => Promise<void>
  disabled?: boolean
  initial: boolean
}

export const LoginForm = ({
  registerUsername,
  registerPassword,
  signIn,
  disabled = false,
  initial = true,
}: PropsLoginForm) => {
  return (
    <form
      className='flex flex-col items-center gap-4'
      onSubmit={(e) => {
        e.preventDefault()
        signIn()
      }}
    >
      <div className='text-xl'>Login</div>
      <div className='w-full'>
        <Input
          type='username'
          label='Username'
          {...registerUsername}
          ref={registerUsername.ref}
        />
      </div>
      <div className='w-full'>
        <Input
          type='password'
          label='Password'
          {...registerPassword}
          ref={registerPassword.ref}
        />
      </div>
      <div
        className={`w-full mt-4 ${
          !initial && !disabled ? 'animate-[error-shake_0.2s_linear]' : ''
        }`}
      >
        <ButtonPrimary disabled={disabled}>Login</ButtonPrimary>
      </div>
    </form>
  )
}
