import { useSearchParams } from "next/navigation"
import usePushSearchParams from "@/hooks/usePushSearchParams"
import { Selection } from "react-aria-components"

export default function useJobFilters() {
  const searchParams = useSearchParams()
  const newSearchParams = new URLSearchParams(searchParams)
  const pushSearchParams = usePushSearchParams()

  const filters = searchParams.getAll("filters")

  function updateFiltersInUrl(filters: (string | number)[]) {
    newSearchParams.delete("filters")

    filters.map((filter) => newSearchParams.append("filters", String(filter)))
    pushSearchParams(newSearchParams)
  }

  function handleFilterChange(filters: Selection) {
    const filtersArray = Array.from(filters)
    updateFiltersInUrl(filtersArray)
  }

  function removeFilter(removedFilters: Set<string | number>) {
    const removedFiltersArray = Array.from(removedFilters)
    const removedFilter = String(removedFiltersArray[0])
    const newFilters = filters.filter((item) => item !== removedFilter)
    updateFiltersInUrl(newFilters)
  }

  function clearAllFilters() {
    newSearchParams.delete("filters")
    pushSearchParams(newSearchParams)
  }

  return { filters, handleFilterChange, removeFilter, clearAllFilters }
}
