import Filters from "@/components/Filters"
import JobCard from "@/components/JobCard"

export default function HomePage() {
  return (
    <>
      <main className="grid grid-rows-[1fr_auto_auto_auto]">
        <div className="bg-primary-background col-start-1 col-end-2 row-start-1 row-end-3 h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-5 mx-auto grid w-full max-w-278 grid-rows-subgrid px-6">
          <Filters className="shadow-secondary-foreground/15 row-start-1 row-end-3 shadow-lg" />
          <div className="row-start-3 row-end-4 mt-8 md:mt-10">
            <JobCard />
          </div>
        </div>
      </main>
    </>
  )
}
