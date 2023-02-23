import { SvgPerson } from 'src/atoms/SvgPerson'

export const Person = ({ person }: { person: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <SvgPerson />
      <div>{person}</div>
    </div>
  )
}
