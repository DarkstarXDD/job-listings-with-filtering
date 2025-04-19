"use client"

import { useSearchParams } from "next/navigation"
import Filters from "@/components/Filters"
import JobCard from "@/components/JobCard"
import type { Selection } from "react-aria-components"
import { cn } from "@/lib/utils"
import usePushSearchParams from "@/hooks/usePushSearchParams"

export default function JobListings({ className }: { className: string }) {
  const searchParams = useSearchParams()
  const newSearchParams = new URLSearchParams(searchParams)
  const pushSearchParams = usePushSearchParams()

  const filters = searchParams.getAll("filters")

  function handleFilterChange(filters: Selection) {
    const filtersArray = Array.from(filters)

    newSearchParams.delete("filters")

    filtersArray.map((filter) => {
      const filterName = String(filter)
      newSearchParams.append("filters", filterName)
    })

    pushSearchParams(newSearchParams)
  }

  function clearAllFilters() {
    newSearchParams.delete("filters")
    pushSearchParams(newSearchParams)
  }

  return (
    <div className={cn("mx-auto w-full px-6", className)}>
      {filters.length > 0 && (
        <Filters
          className="row-start-1 row-end-3"
          filters={filters}
          onClear={clearAllFilters}
        />
      )}

      <div className="row-start-3 row-end-4 mt-8 grid gap-10 md:mt-10 lg:gap-6">
        <JobCard filters={filters} onFilterChange={handleFilterChange} />
        <JobCard filters={filters} onFilterChange={handleFilterChange} />
        <JobCard filters={filters} onFilterChange={handleFilterChange} />
      </div>
    </div>
  )
}
