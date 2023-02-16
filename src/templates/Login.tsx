import { PropsLoginForm } from '../molecules/LoginForm'
import { LoginFormCard } from '../organisms/LoginFormCard'
import { SvgLogoMark } from 'src/atoms/SvgLogoMark'
import { SvgLogoType } from 'src/atoms/SvgLogoType'

export const Login = (props: PropsLoginForm) => {
  return (
    <div
      className={`
        flex flex-col gap-6 w-full min-h-screen items-center
        justify-center md:justify-evenly md:flex-row md:pt-0
      `}
    >
      <div className='w-[360px] md:w-[400px] lg:w-[500px] xl:w-[640px]'>
        <div className='flex items-center gap-4 md:gap-5 lg:gap-6 xl:gap-8 h-0'>
          <SvgLogoMark />
          <SvgLogoType />
        </div>
      </div>
      <div
        className={`
          divider divider-horizontal h-0
          invisible md:visible md:h-[600px] md:my-auto
        `}
      />
      <div className='w-full min-w-[360px] max-w-[360px] md:border md:border-slate-200 md:dark:border-slate-700 md:shadow-md md:rounded-lg'>
        <LoginFormCard {...props} />
      </div>
    </div>
  )
}
