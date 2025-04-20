"use client"

import Filters from "@/components/Filters"
import JobCard from "@/components/JobCard"
import { cn } from "@/lib/utils"
import useJobFilters from "@/hooks/useJobFilters"

export default function JobListings({ className }: { className: string }) {
  const { filters, handleFilterChange, removeFilter, clearAllFilters } =
    useJobFilters()

  return (
    <div className={cn("mx-auto w-full px-6", className)}>
      {filters.length > 0 && (
        <Filters
          className="row-start-1 row-end-3"
          filters={filters}
          onClear={clearAllFilters}
          onRemove={removeFilter}
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
