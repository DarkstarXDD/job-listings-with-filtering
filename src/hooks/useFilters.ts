import { useSearchParams } from "next/navigation"

export default function useFilters() {
  const searchParams = useSearchParams()
  return searchParams.getAll("filters")
}
