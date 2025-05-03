import { cache } from "react"

import prisma from "@/lib/prisma/prisma"

import type { Prisma } from "@prisma/client"

export type JobType = Prisma.JobGetPayload<{
  include: {
    company: true
    role: true
  }
}>

export type JobWithTagsType = Prisma.JobGetPayload<{
  include: {
    company: true
    role: true
    languages: true
    tools: true
    tags: true
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

export async function getAllJobs(filtersArray: string[]) {
  return await prisma.job.findMany({
    where: {
      AND: filtersArray.map((tag) => ({
        tags: {
          some: {
            name: tag,
          },
        },
      })),
    },

    include: {
      company: true,
      role: true,
      languages: true,
      tools: true,
      tags: true,
    },
  })
}

async function getJobsByCompanyFn(companyId: string, filtersArray: string[]) {
  return await prisma.job.findMany({
    where: {
      AND: [
        { companyId: companyId },
        ...filtersArray.map((tag) => ({
          tags: {
            some: {
              name: tag,
            },
          },
        })),
      ],
    },

    include: {
      company: true,
      role: true,
      languages: true,
      tools: true,
      tags: true,
    },
  })
}
export const getJobsByCompany = cache(getJobsByCompanyFn)
