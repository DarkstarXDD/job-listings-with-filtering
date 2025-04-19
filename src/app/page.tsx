import JobListings from "@/components/JobListings"

export default function HomePage() {
  return (
    <>
      <main className="grid grid-rows-[1fr_auto_auto_auto]">
        <div className="bg-primary-background col-start-1 col-end-2 row-start-1 row-end-3 h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>
        <JobListings className="col-start-1 col-end-2 row-start-2 row-end-5 grid max-w-278 grid-rows-subgrid" />
      </main>
    </>
  )
}
