import { usePathname, useRouter } from "next/navigation"

export default function usePushSearchParams() {
  const path = usePathname()
  const router = useRouter()

  return function pushSearchParams(newSearchParams: URLSearchParams) {
    const newUrl = `${path}?${newSearchParams}`
    router.push(newUrl)
  }
}
