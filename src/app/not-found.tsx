import Link from "next/link"

export default function NotFound() {
  return (
    <main>
      <div className="bg-primary-background h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>
      <div className="text-foreground mx-auto grid max-w-278 justify-items-center gap-4 px-3 py-8">
        <h1 className="text-xl font-bold">404 | Not Found</h1>
        <p>Could not find the requested resource</p>
        <Link href="/" className="hover:text-primary-background underline">
          Return Home
        </Link>
      </div>
    </main>
  )
}
