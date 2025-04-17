import { cn } from "@/lib/utils"
import Filter from "@/components/Filter"
import Button from "@/components/ui/Button"

export default function Filters({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-md bg-white p-5 md:px-10",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Filter filterName="Frontend" />
        <Filter filterName="CSS" />
        <Filter filterName="JavaScript" />
      </div>

      <Button variant="ghost" className="p-0">
        Clear
      </Button>
    </div>
  )
}
