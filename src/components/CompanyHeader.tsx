import { LuBuilding2 } from "react-icons/lu"

import Avatar from "@/components/ui/Avatar"

type CompanyHeaderProps = {
  name: string
  logo: string
  location: string
}

export default function CompanyHeader({
  name,
  logo,
  location = "Worldwide",
}: CompanyHeaderProps) {
  return (
    <div className="text-foreground grid justify-items-center gap-2 p-6 md:gap-3">
      <Avatar src={logo} className="md:size-16" />
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="flex items-center gap-2">
        <LuBuilding2 />
        <span>{location}</span>
      </p>
    </div>
  )
}
