"use client"

import { startCase } from "lodash"
import { LuBriefcase, LuBuilding2, LuClock3 } from "react-icons/lu"

import Avatar from "@/components/ui/Avatar"
import Button from "@/components/ui/Button"
import { formatPostedDate } from "@/lib/utils"

import type { JobType } from "@/lib/prisma/queries"

export default function JobDetailedView({ job }: { job: JobType }) {
  return (
    <div className="bg-primary-foreground text-foreground grid gap-8 rounded-md p-3 md:p-8">
      <div className="grid justify-items-start gap-4">
        <div className="flex flex-col gap-4">
          <Avatar src={job.company.logo} className="size-10 md:size-12" />
          <p className="text-secondary-foreground text-sm font-bold md:text-lg">
            {job.company.name}
          </p>
        </div>

        <h2 className="text-foreground text-lg leading-normal font-bold md:text-2xl">
          {job?.position}
        </h2>

        <div className="text-foreground-muted flex items-center justify-center gap-6 text-sm font-medium md:gap-9 md:text-base">
          <p className="flex items-center gap-1">
            <LuClock3 className="size-3.5" />
            <span>{formatPostedDate(job.postedAt)}</span>
          </p>
          <p className="flex items-center gap-1">
            <LuBriefcase className="size-3.5" />
            <span>{startCase(job.contract)}</span>
          </p>
          <p className="flex items-center gap-1">
            <LuBuilding2 className="size-3.5" />
            <span>{job.location}</span>
          </p>
        </div>

        <div className="grid gap-2">
          <p>
            Job description would go here. Along with requirements and
            responsibilities.
          </p>
          <p>
            eg: We are looking for a Senior Frontend Developer to join our team
            and help build modern, accessible web interfaces.
          </p>
        </div>
      </div>

      <Button className="justify-self-start px-4 py-3">Apply</Button>
    </div>
  )
}
