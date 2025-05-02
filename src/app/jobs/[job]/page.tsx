import { notFound } from "next/navigation"

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

  if (!job) {
    notFound()
  }

  return (
    <main>
      <div className="bg-primary-background h-39 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:bg-[url(../assets/bg-header-desktop.svg)]"></div>
      <div className="mx-auto max-w-278 px-3 py-8">
        <JobDetailedView job={job} />
      </div>
    </main>
  )
}
