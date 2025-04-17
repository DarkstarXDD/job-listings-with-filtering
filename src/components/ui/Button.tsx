import { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const buttonStyles = tv({
  base: "ring-foreground flex cursor-pointer items-center justify-center rounded font-bold transition-colors outline-none focus-visible:ring-2",
  variants: {
    variant: {
      default:
        "bg-primary-background hover:bg-foreground text-primary-foreground active:bg-foreground",
      ghost:
        "text-foreground-muted hover:text-secondary-foreground active:text-secondary-foreground hover:underline",
    },
    size: {
      default: "px-4 py-2",
      icon: "size-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>

export default function Button({
  children,
  className,
  variant,
  size,
}: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, size, className })}>
      {children}
    </button>
  )
}
