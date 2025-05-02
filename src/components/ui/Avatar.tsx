import Image from "next/image"

import { cn } from "@/lib/utils"

export default function Avatar({
  src,
  alt = "",
  className,
}: {
  src: string
  alt?: string
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={88}
      height={88}
      className={cn("size-12 md:size-22", className)}
    />
  )
}
