"use client"

import { cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import { TagGroup, Tag } from "@/components/ui/TagGroup"

const itemsArr = ["Frontend", "CSS", "JavaScript"]

export default function Filters({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-md bg-white p-5 md:px-10",
        className
      )}
    >
      <TagGroup onRemove={(key) => console.log(key)}>
        {itemsArr.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagGroup>

      <Button variant="ghost" className="p-0">
        Clear
      </Button>
    </div>
  )
}
