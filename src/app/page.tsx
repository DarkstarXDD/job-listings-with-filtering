export default function HomePage() {
  return (
    <main className="grid grid-rows-[1fr_auto_auto_auto]">
      <div className="bg-primary-background col-start-1 col-end-2 row-start-1 row-end-3 h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>

      <div className="col-start-1 col-end-2 row-start-2 row-end-5 mx-auto grid w-full max-w-278 grid-rows-subgrid px-6">
        <div className="row-start-1 row-end-3 h-20 rounded-md bg-white"></div>
        <div className="row-start-3 row-end-4 mt-8 h-100 bg-green-400 md:mt-10"></div>
      </div>
    </main>
  )
}
