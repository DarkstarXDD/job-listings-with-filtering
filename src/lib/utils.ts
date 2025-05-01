import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNowStrict } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPostedDate(date: Date) {
  if (!(date instanceof Date)) {
    return null
  }

  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    roundingMethod: "floor",
    locale: {
      formatDistance: (token, count, options) => {
        const suffix = options?.addSuffix ? " ago" : ""
        switch (token) {
          case "xSeconds":
            return `${count}s${suffix}`
          case "xMinutes":
            return `${count}m${suffix}`
          case "xHours":
            return `${count}hrs${suffix}`
          case "xDays":
            return `${count}d${suffix}`
          case "xWeeks":
            return `${count}w${suffix}`
          case "xMonths":
            return `${count}mo${suffix}`
          case "xYears":
            return `${count}y${suffix}`
          default:
            return ""
        }
      },
    },
  })
}
