import * as React from "react"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" className="-m-1.5 inline-flex items-center p-1.5">
      <span className="sr-only">KitSaaS.com</span>
      <span className="mr-px text-lg font-light">KIT</span>
      <span className="mb-1 text-2xl font-bold tracking-tight">saas</span>
    </Link>
  )
}
