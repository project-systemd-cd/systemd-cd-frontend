import { SvgGitCommit } from 'src/atoms/SvgGitCommit'

export const GitCommit = ({ commit }: { commit: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <SvgGitCommit />
      <div>{commit}</div>
    </div>
  )
}
