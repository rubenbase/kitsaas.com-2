import * as React from "react"
import { cn } from "@kitsaas/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import type { PropsWithoutRefOrColor } from "../helpers"

// TODO: Add variants -> variant (muted, default, etc...)
const textVariants = cva("m-0", {
  variants: {
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      base: "font-normal",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
  },
  defaultVariants: {
    weight: "base",
    size: "base",
  },
})

type TextElement = React.ElementRef<"span">
type TextAsChildProps = {
  asChild?: boolean
  as?: never
} & PropsWithoutRefOrColor<"span">
type TextSpanProps = {
  as?: "span"
  asChild?: never
} & PropsWithoutRefOrColor<"span">
type TextDivProps = {
  as: "div"
  asChild?: never
} & PropsWithoutRefOrColor<"div">
type TextLabelProps = {
  as: "label"
  asChild?: never
} & PropsWithoutRefOrColor<"label">
type TextPProps = { as: "p"; asChild?: never } & PropsWithoutRefOrColor<"p">

type TextProps = VariantProps<typeof textVariants> &
  (
    | TextAsChildProps
    | TextSpanProps
    | TextDivProps
    | TextLabelProps
    | TextPProps
  )

const Text = React.forwardRef<TextElement, TextProps>(
  (
    {
      size,
      weight,
      className,
      asChild = false,
      as: Tag = "span",
      children,
      ...textProps
    },
    forwardedRef
  ) => {
    return (
      <Slot
        {...textProps}
        ref={forwardedRef}
        className={cn(textVariants({ size, weight, className }))}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    )
  }
)
Text.displayName = "Text"

export { Text }
export type { TextProps }
