import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/client"

export default function Home() {
  const router = useRouter()
  const uid = router.query.uid
  const return_to = router.query.return_to
  let callbackUrl = process.env.NEXT_PUBLIC_HOME_URL;

  if (return_to == 'recruitment') {
    callbackUrl = process.env.NEXT_PUBLIC_RECRUITMENT_URL;
  }

  if (uid) {
    signIn('credentials', {uid, callbackUrl: callbackUrl })
  }

  return (
    <h1>Redirecting...</h1>
  )
}

