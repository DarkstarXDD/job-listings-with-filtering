import { PrismaClient, Level, Contract } from "@prisma/client"
import { jobs } from "../public/jobsData"

const prisma = new PrismaClient()

async function main() {
  for (const job of jobs) {
    await prisma.job.create({
      data: {
        position: job.position,
        level: job.level as Level,
        location: job.location,
        contract: job.contract as Contract,

        company: {
          connectOrCreate: {
            where: { name: job.company },
            create: { name: job.company, logo: job.logo },
          },
        },

        role: {
          connectOrCreate: {
            where: { name: job.role },
            create: { name: job.role },
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
