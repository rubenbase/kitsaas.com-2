"use client"

import * as React from "react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@kitsaas/ui"
import { MenuIcon, XIcon } from "lucide-react"

import { Logo } from "@/components/logo"

interface Navigation {
  name: string
  href: string
}

export interface HeaderProps {
  navigation: Navigation[]
}

export const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 mx-auto max-w-[1408px]">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <MobileHeader navigation={navigation} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

interface MobileHeaderProps {
  navigation: Navigation[]
}

const MobileHeader = ({ navigation }: MobileHeaderProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="size-6" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        className="p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <SheetClose className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <XIcon className="size-6" aria-hidden="true" />{" "}
          </SheetClose>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
