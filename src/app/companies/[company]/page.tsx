import { notFound } from "next/navigation"
import React from "react"

import CompanyHeader from "@/components/CompanyHeader"
import JobListings from "@/components/JobListings"
import { getCompany, getCompanyWithFilteredJobs } from "@/lib/prisma/queries"

import type { Metadata } from "next"

type PropsType = {
  params: Promise<{ company: string }>
  searchParams: Promise<{ filters: string | string[] }>
}

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const { company: companyId } = await params
  const company = await getCompany(companyId)

  return {
    title: `${company?.name}'s Company Profile`,
  }
}

export default async function CompanyPage({ params, searchParams }: PropsType) {
  const { company } = await params
  const { filters = [] } = await searchParams
  const filtersArray = Array.isArray(filters) ? filters : [filters]

  const companyDetails = await getCompanyWithFilteredJobs(company, filtersArray)

  if (!companyDetails) {
    notFound()
  }

  return (
    <main className="grid grid-rows-[1fr_auto_auto_auto]">
      <div className="bg-primary-background col-start-1 col-end-2 row-start-1 row-end-3 h-52 bg-[url(../assets/bg-header-mobile.svg)] bg-cover bg-no-repeat md:h-60 md:bg-[url(../assets/bg-header-desktop.svg)]">
        <CompanyHeader name={companyDetails.name} logo={companyDetails.logo} />
      </div>
      <JobListings
        jobs={companyDetails.jobs}
        className="col-start-1 col-end-2 row-start-2 row-end-5 mb-10 grid max-w-278 grid-rows-subgrid md:mb-16"
      />
    </main>
  )
}
