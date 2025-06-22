"use client"

import { motion, AnimatePresence } from "motion/react"

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
        <AnimatePresence initial={false}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <JobCard
                  job={job}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-foreground text-center text-lg font-medium">
              No jobs available right now. Please check back later.
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
