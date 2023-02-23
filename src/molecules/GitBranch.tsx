import { SvgGitBranch } from 'src/atoms/SvgGitBranch'

export const GitBranch = ({ branch }: { branch: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <SvgGitBranch />
      <div>{branch}</div>
    </div>
  )
}
