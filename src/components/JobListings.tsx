"use client"

import Filters from "@/components/Filters"
import JobCard from "@/components/JobCard"
import useJobFilters from "@/hooks/useJobFilters"
import { cn } from "@/lib/utils"

import type { JobWithTagsType } from "@/lib/prisma/queries"

export default function JobListings({
  className,
  jobs,
}: {
  className: string
  jobs: JobWithTagsType[]
}) {
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
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          ))
        ) : (
          <p className="text-foreground text-center text-lg font-medium">
            No jobs available right now. Please check back later.
          </p>
        )}
      </div>
    </div>
  )
}
