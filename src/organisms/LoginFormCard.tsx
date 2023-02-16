import { LoginForm, PropsLoginForm } from '../molecules/LoginForm'

export const LoginFormCard = (props: PropsLoginForm) => (
  <div className={'flex flex-col p-8 gap-4'}>
    <LoginForm {...props} />
  </div>
)
