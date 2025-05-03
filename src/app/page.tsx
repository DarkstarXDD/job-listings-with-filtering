import JobListings from "@/components/JobListings"
import { getAllJobs } from "@/lib/prisma/queries"

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ filters: string | string[] }>
}) {
  const { filters = [] } = await searchParams
  const filtersArray = Array.isArray(filters) ? filters : [filters]

  const jobs = await getAllJobs(filtersArray)

  return (
    <main className="grid grid-rows-[1fr_auto_auto_auto]">
      <div className="bg-primary-background col-start-1 col-end-2 row-start-1 row-end-3 h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>
      <JobListings
        jobs={jobs}
        className="col-start-1 col-end-2 row-start-2 row-end-5 mb-10 grid max-w-278 grid-rows-subgrid md:mb-16"
      />
    </main>
  )
}
