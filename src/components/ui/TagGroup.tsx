import {
  TagGroup as RACTagGroup,
  Label,
  TagList,
  Tag as RACTag,
} from "react-aria-components"
import Button from "@/components/ui/Button"
import type {
  TagGroupProps as RACTagGroupProps,
  TagListProps as RACTagListProps,
  TagProps,
} from "react-aria-components"
import { FaTimes } from "react-icons/fa"

type TagGroupProps<T> = Omit<RACTagGroupProps, "children"> &
  Pick<RACTagListProps<T>, "items" | "children"> & {
    label?: string
  }

export function TagGroup<T extends object>({
  label,
  items,
  children,
  ...props
}: TagGroupProps<T>) {
  return (
    <RACTagGroup {...props}>
      <Label>{label}</Label>
      <TagList className="flex flex-wrap gap-4 lg:justify-end" items={items}>
        {children}
      </TagList>
    </RACTagGroup>
  )
}

export function Tag({ children, ...props }: TagProps) {
  const textValue = typeof children === "string" ? children : undefined
  return (
    <RACTag
      className="ring-foreground rac-selection-multiple:cursor-pointer text-secondary-foreground bg-secondary-background rac-selected:text-white rac-selected:bg-primary-background flex items-center justify-center gap-3 overflow-hidden rounded px-3 py-1 font-bold transition-colors outline-none focus-visible:ring-2 has-[button]:py-0 has-[button]:pr-0"
      textValue={textValue}
      {...props}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" size="icon">
              <FaTimes />
            </Button>
          )}
        </>
      )}
    </RACTag>
  )
}
