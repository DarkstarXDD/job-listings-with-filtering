import { Button as RACButton } from "react-aria-components"
import { tv, type VariantProps } from "tailwind-variants"

import type { ButtonProps as RACButtonProps } from "react-aria-components"

const buttonStyles = tv({
  base: "ring-foreground rac-focus-visible:ring-2 flex cursor-pointer items-center justify-center rounded font-bold transition-colors outline-none",
  variants: {
    variant: {
      default:
        "bg-primary-background rac-hover:bg-foreground text-primary-foreground rac-pressed:bg-foreground",
      secondary: "text-secondary-foreground bg-secondary-background",
      ghost:
        "text-foreground-muted rac-hover:text-secondary-foreground rac-pressed:text-secondary-foreground rac-hover:underline",
    },
    size: {
      default: "px-3 py-1",
      icon: "size-8 rounded-none",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = Omit<RACButtonProps, "className"> &
  VariantProps<typeof buttonStyles> & { className?: string }

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={buttonStyles({ variant, size, className })}
    >
      {children}
    </RACButton>
  )
}
