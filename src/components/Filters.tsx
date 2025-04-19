"use client"

import { cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import { TagGroup, Tag } from "@/components/ui/TagGroup"

type FiltersProps = {
  filters: string[]
  onClear: () => void
  className: string
}

export default function Filters({ filters, onClear, className }: FiltersProps) {
  return (
    <div
      className={cn(
        "shadow-secondary-foreground/15 flex items-center justify-between gap-4 rounded-md bg-white p-5 shadow-lg md:px-10",
        className
      )}
    >
      <TagGroup onRemove={(key) => console.log(key)}>
        {filters.map((item) => (
          <Tag id={item} key={item}>
            {item}
          </Tag>
        ))}
      </TagGroup>

      <Button variant="ghost" className="p-0" onClick={onClear}>
        Clear
      </Button>
    </div>
  )
}
