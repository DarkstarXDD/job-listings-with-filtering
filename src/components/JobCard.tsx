"use client"

import { startCase } from "lodash"
import { LuBuilding2, LuBriefcase, LuClock3 } from "react-icons/lu"

import { JobType } from "@/app/page"
import Avatar from "@/components/ui/Avatar"
import Badge from "@/components/ui/Badge"
import { TagGroup, Tag } from "@/components/ui/TagGroup"
import { formatPostedDate } from "@/lib/utils"

import type { Selection } from "react-aria-components"

type JobCardProps = {
  filters: string[]
  onFilterChange: (keys: Selection) => void
  job: JobType
}

export default function JobCard({
  filters,
  onFilterChange,
  job,
}: JobCardProps) {
  return (
    <div className="border-primary-background shadow-secondary-foreground/15 grid gap-4 rounded-md border-l-5 bg-white px-6 py-8 shadow-lg lg:grid-cols-[auto_1fr] lg:items-center lg:justify-items-end lg:gap-16 lg:px-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <Avatar src={job.company.logo} />
        <div className="grid justify-items-start gap-4">
          <div className="flex items-center justify-center gap-8 md:gap-4">
            <p className="text-secondary-foreground text-base font-bold md:text-lg">
              {job.company.name}
            </p>
            <div className="flex items-center justify-center gap-2">
              {job.isNew && <Badge label="New!" />}
              {job.isFeatured && <Badge label="Featured" variant="secondary" />}
            </div>
          </div>

          <h2 className="text-foreground hover:text-secondary-foreground cursor-pointer text-xl leading-normal font-bold md:text-2xl">
            {job.position}
          </h2>

          <div className="text-foreground-muted flex items-center justify-center gap-6 text-base font-medium md:gap-9 md:text-lg">
            <p className="flex items-center gap-1">
              <LuClock3 className="size-4" />
              <span>{formatPostedDate(job.postedAt)}</span>
            </p>
            <p className="flex items-center gap-1">
              <LuBriefcase className="size-4" />
              <span>{startCase(job.contract)}</span>
            </p>
            <p className="flex items-center gap-1">
              <LuBuilding2 className="size-4" />
              <span>{job.location}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-foreground-muted-light border-t-1 pt-4 lg:border-none">
        <TagGroup
          selectionMode="multiple"
          onSelectionChange={(keys) => onFilterChange(keys)}
          selectedKeys={filters}
        >
          {job.tags.map((tag) => (
            <Tag id={tag.name} key={tag.name}>
              {tag.name}
            </Tag>
          ))}
        </TagGroup>
      </div>
    </div>
  )
}
