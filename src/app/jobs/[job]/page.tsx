import Link from "next/link"

import JobDetailedView from "@/components/JobDetailedView"
import prisma from "@/lib/prisma"

import type { Prisma } from "@prisma/client"

export type JobType = Prisma.JobGetPayload<{
  include: {
    company: true
    role: true
  }
}>

export default async function JobPage({
  params,
}: {
  params: Promise<{ job: string }>
}) {
  const { job: jobId } = await params

  const job = await prisma.job.findUnique({
    where: {
      id: jobId,
    },

    include: {
      company: true,
      role: true,
    },
  })

  return (
    <>
      <main>
        <div className="bg-primary-background h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>
        <div className="mx-auto max-w-278 px-3 py-8">
          {job ? (
            <JobDetailedView job={job} />
          ) : (
            <div className="text-foreground grid gap-6 text-center">
              <p className="text-lg">Invalid job ID.</p>
              <Link
                href="/"
                className="hover:text-primary-background text-base underline"
              >
                Back to home
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
