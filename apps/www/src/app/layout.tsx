import "@/styles/globals.css"

import { Metadata } from "next"
import { cn } from "@kitsaas/utils"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import { Shell } from "./shell"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" className="h-full bg-[#f6f8fc]" suppressHydrationWarning>
        <head />
        <body className={cn("h-full font-sans antialiased", fontSans.variable)}>
          <Shell>
            {children}
            <TailwindIndicator />
          </Shell>
        </body>
      </html>
    </>
  )
}
