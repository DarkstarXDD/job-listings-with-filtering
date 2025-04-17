import { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const badgeStyles = tv({
  base: "flex items-center justify-center rounded-full px-3 py-2 text-xs leading-none font-bold uppercase",
  variants: {
    variant: {
      default: "bg-primary-background text-white",
      secondary: "bg-foreground text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type BadgeProps = ComponentProps<"div"> &
  VariantProps<typeof badgeStyles> & {
    label: string
  }

export default function Badge({ label, className, variant }: BadgeProps) {
  return (
    <div className={badgeStyles({ variant, className })}>
      <p>{label}</p>
    </div>
  )
}
