import { ComponentPropsWithoutRef, ElementType } from "react"

type ExtractPropsForTag<C extends ElementType<any>, T extends string> = Omit<
  Extract<ComponentPropsWithoutRef<C>, { as: T }>,
  "as"
>

export type { ExtractPropsForTag }
