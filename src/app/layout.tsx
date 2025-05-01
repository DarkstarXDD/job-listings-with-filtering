import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Job Listings with Filtering",
  description:
    "Check out Darkstar's solution for the Job Listings with Filtering challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://job-listings-with-filtering-darkstarxdd.vercel.app/",
    title: "devfinder",

    description:
      "Check out Darkstar's solution for the Job Listings with Filtering challenge on Frontend Mentor",

    images: {
      url: "https://job-listings-with-filtering-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${inter.variable} font-inter bg-backrgound`}
      >
        {children}
      </body>
    </html>
  )
}
