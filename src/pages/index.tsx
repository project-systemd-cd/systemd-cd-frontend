import { useLoginRequest } from 'application/Auth/isSignedIn'
import { useRouter } from 'next/router'

export default function Home() {
  // Check signed in
  const router = useRouter()
  useLoginRequest(router)

  return <></>
}
