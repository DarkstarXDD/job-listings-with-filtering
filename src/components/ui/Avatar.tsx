import Image from "next/image"

export default function Avatar({
  src,
  alt = "",
}: {
  src: string
  alt?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={88}
      height={88}
      className="size-12 md:size-22"
    />
  )
}
