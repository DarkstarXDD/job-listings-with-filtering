import { notFound } from "next/navigation"
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
  if (!parseInt(jobId)) {
    notFound()
  }

  return await prisma.job.findUnique({
    cacheStrategy: { ttl: 60, swr: 10 },

    where: {
      id: parseInt(jobId),
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
    cacheStrategy: { ttl: 60, swr: 10 },

    where: {
      AND: filtersArray.map((tag) => ({
        tags: {
          some: {
            name: tag,
          },
        },
      })),
    },

    orderBy: {
      postedAt: "asc",
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

export async function getCompany(companyId: string) {
  if (!parseInt(companyId)) {
    notFound()
  }

  return await prisma.company.findUnique({
    cacheStrategy: { ttl: 60, swr: 10 },

    where: {
      id: parseInt(companyId),
    },
  })
}

async function getCompanyWithFilteredJobsFn(
  companyId: string,
  filtersArray: string[]
) {
  if (!parseInt(companyId)) {
    notFound()
  }

  return await prisma.company.findUnique({
    where: {
      id: parseInt(companyId),
    },

    include: {
      jobs: {
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
      },
    },
  })
}
export const getCompanyWithFilteredJobs = cache(getCompanyWithFilteredJobsFn)
