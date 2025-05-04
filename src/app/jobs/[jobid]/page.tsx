import { notFound } from "next/navigation"

import JobDetailedView from "@/components/JobDetailedView"
import { getJob } from "@/lib/prisma/queries"

import type { Metadata } from "next"

type PropsType = {
  params: Promise<{ jobid: string }>
}

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const { jobid } = await params
  const job = await getJob(jobid)

  return { title: `${job?.position} at ${job?.company.name}` }
}

export default async function JobPage({ params }: PropsType) {
  const { jobid } = await params

  const job = await getJob(jobid)

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
