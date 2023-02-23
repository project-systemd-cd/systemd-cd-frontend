import { SvgGitTag } from 'src/atoms/SvgGitTag'

export const GitTag = ({ tag }: { tag: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <SvgGitTag />
      <div>{tag}</div>
    </div>
  )
}
