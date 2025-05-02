import { cache } from "react"

import prisma from "@/lib/prisma"

import type { Prisma } from "@prisma/client"

export type JobType = Prisma.JobGetPayload<{
  include: {
    company: true
    role: true
  }
}>

async function getJobFn(jobId: string) {
  return await prisma.job.findUnique({
    where: {
      id: jobId,
    },

    include: {
      company: true,
      role: true,
    },
  })
}

export const getJob = cache(getJobFn)
