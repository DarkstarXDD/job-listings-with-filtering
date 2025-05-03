import { PrismaClient, Level, Contract, RoleName } from "@prisma/client"

import { jobs } from "../public/jobsData"

const prisma = new PrismaClient()

async function main() {
  await prisma.job.deleteMany()
  await prisma.company.deleteMany()
  await prisma.role.deleteMany()
  await prisma.language.deleteMany()
  await prisma.tool.deleteMany()

  for (const job of jobs) {
    await prisma.job.create({
      data: {
        position: job.position,
        isNew: job.new,
        isFeatured: job.featured,
        level: job.level as Level,
        location: job.location,
        contract: job.contract as Contract,

        company: {
          connectOrCreate: {
            where: { name: job.company },
            create: {
              name: job.company,
              logo: job.logo,
              location: job.companyLocation,
            },
          },
        },

        role: {
          connectOrCreate: {
            where: { name: job.role as RoleName },
            create: { name: job.role as RoleName },
          },
        },

        languages: {
          connectOrCreate: job.languages.map((language) => ({
            where: { name: language },
            create: { name: language },
          })),
        },

        tools: {
          connectOrCreate: job.tools.map((tool) => ({
            where: { name: tool },
            create: { name: tool },
          })),
        },

        tags: {
          connectOrCreate: job.tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
