import Avatar from "@/components/ui/Avatar"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"

export default function JobCard() {
  return (
    <div className="border-primary-background grid gap-4 rounded-md border-l-5 bg-white px-6 py-8 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-items-end lg:gap-16 lg:px-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <Avatar src="/images/photosnap.svg" />
        <div className="grid justify-items-start gap-4">
          <div className="flex items-center justify-center gap-8 md:gap-4">
            <p className="text-secondary-foreground text-base font-bold md:text-lg">
              Photosnap
            </p>
            <div className="flex items-center justify-center gap-2">
              <Badge label="New!" />
              <Badge label="Featured" variant="secondary" />
            </div>
          </div>

          <h2 className="text-foreground hover:text-secondary-foreground cursor-pointer text-xl leading-normal font-bold md:text-2xl">
            Senior Frontend Developer
          </h2>

          <div className="text-foreground-muted flex items-center justify-center gap-6 text-base font-medium md:gap-9 md:text-lg">
            <p>1d ago</p>
            <p>Full Time</p>
            <p>USA only</p>
          </div>
        </div>
      </div>

      <div className="border-foreground-muted-light flex flex-wrap gap-4 border-t-1 pt-4 lg:border-none">
        <Button variant="secondary">Frontend</Button>
        <Button variant="secondary">Senior</Button>
        <Button variant="secondary">HTML</Button>
        <Button variant="secondary">CSS</Button>
        <Button variant="secondary">JavaScript</Button>
        <Button variant="secondary">JavaScript</Button>
        <Button variant="secondary">JavaScript</Button>
      </div>
    </div>
  )
}
