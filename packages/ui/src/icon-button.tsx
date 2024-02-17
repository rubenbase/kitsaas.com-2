import * as React from "react"
import { cn } from "@kitsaas/utils"
import { Slot } from "@radix-ui/react-slot"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-8 w-8",
        sm: "h-9 w-9",
        default: "h-10 w-10",
        lg: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tooltipVariants = cva("", {
  variants: {
    tooltipSize: {
      xs: "w-52 whitespace-normal",
      sm: "w-60 whitespace-normal",
      md: "w-72 whitespace-normal",
      lg: "w-80 whitespace-normal",
      auto: "w-auto",
    },
  },
  defaultVariants: {
    tooltipSize: "auto",
  },
})

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "content">,
    VariantProps<typeof iconButtonVariants>,
    VariantProps<typeof tooltipVariants>,
    Pick<
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
      "sideOffset" | "side"
    >,
    Pick<
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Tooltip>,
      "delayDuration"
    > {
  asChild?: boolean
  content?: React.ReactNode
  contentClassName?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      tooltipSize,
      contentClassName,
      variant,
      size,
      content,
      asChild = false,
      sideOffset,
      delayDuration,
      side,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    if (!content) {
      return (
        <Comp
          className={cn(iconButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild>
          <Comp
            className={cn(iconButtonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          className={cn(
            "bg-primary text-primary-foreground z-10",
            tooltipVariants({
              tooltipSize,
              className: contentClassName,
            })
          )}
          side={side}
        >
          <div>{content}</div>
        </TooltipContent>
      </Tooltip>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
