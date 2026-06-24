import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-2 border-border shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20",
        outline:
          "bg-background text-foreground hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "border-transparent shadow-none hover:shadow-sm hover:border-border hover:bg-accent hover:text-accent-foreground hover:translate-x-0 hover:translate-y-0",
        link: "border-transparent shadow-none text-primary underline-offset-4 hover:underline hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0",
        ghostOutline:
          "h-9 px-3 py-1.5 rounded-none text-sm font-bold border-2 border-border " +
          "hover:bg-accent hover:text-accent-foreground " +
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        subtleGhost:
          "h-9 px-3 py-1.5 rounded-none text-sm font-bold" +
          "bg-transparent border-transparent shadow-none text-foreground" +
          "hover:border-border hover:shadow-sm hover:bg-accent hover:text-foreground",

      },

      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
