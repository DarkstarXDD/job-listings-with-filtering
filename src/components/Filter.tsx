import Button from "@/components/ui/Button"
import { FaTimes } from "react-icons/fa"

export default function Filter({ filterName }: { filterName: string }) {
  return (
    <div className="ring-foreground flex items-center justify-center overflow-hidden rounded outline-none has-focus-visible:ring-2">
      <span className="text-secondary-foreground bg-secondary-background px-2 py-1 leading-normal font-bold">
        {filterName}
      </span>

      <Button size="icon" className="rounded-none focus-visible:ring-0">
        <FaTimes />
      </Button>
    </div>
  )
}
