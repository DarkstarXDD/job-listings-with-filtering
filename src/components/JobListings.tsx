"use client"

import Filters from "@/components/Filters"
import JobCard from "@/components/JobCard"
import type { Selection } from "react-aria-components"
import { cn } from "@/lib/utils"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function JobListings({ className }: { className: string }) {
  const path = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  function handleFilterChange(filters: Selection) {
    const filtersArray = Array.from(filters)
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete("filters")

    filtersArray.map((filter) => {
      const filterName = String(filter)
      newSearchParams.append("filters", filterName)
    })

    const newUrl = `${path}?${newSearchParams}`
    router.push(newUrl)
  }

  return (
    <div className={cn("mx-auto w-full px-6", className)}>
      <Filters className="shadow-secondary-foreground/15 row-start-1 row-end-3 shadow-lg" />
      <div className="row-start-3 row-end-4 mt-8 grid gap-10 md:mt-10 lg:gap-6">
        <JobCard onFilterChange={handleFilterChange} />
        <JobCard onFilterChange={handleFilterChange} />
        <JobCard onFilterChange={handleFilterChange} />
      </div>
    </div>
  )
}
