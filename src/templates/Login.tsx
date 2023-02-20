import { PropsLoginForm } from '../molecules/LoginForm'
import { LoginFormCard } from '../organisms/LoginFormCard'
import { SvgLogoMark } from 'src/atoms/SvgLogoMark'
import { SvgLogoType } from 'src/atoms/SvgLogoType'

export const LoginPage = (props: PropsLoginForm) => {
  return (
    <div
      className={`
        flex flex-col gap-y-6 lg:px-8 w-full min-h-screen items-center
        justify-center md:justify-evenly md:flex-row md:pt-0
      `}
    >
      <div className='w-[360px] md:w-[400px] lg:w-[500px] xl:w-[640px]'>
        <div className='flex items-center justify-center md:gap-5 lg:gap-6 xl:gap-8 h-0'>
          <SvgLogoMark className='max-w-[160px] md:max-w-[unset]' />
          <SvgLogoType className='invisible w-0 md:visible md:w-[unset]' />
        </div>
      </div>
      <div
        className={`
          divider divider-horizontal h-0
          invisible md:visible md:h-[600px] md:my-auto
        `}
      />
      <div className='w-full min-w-[360px] lg:min-w-[420px] max-w-[360px] md:border md:border-slate-200 md:dark:border-slate-700 md:shadow-md md:rounded-lg'>
        <LoginFormCard {...props} />
      </div>
    </div>
  )
}
