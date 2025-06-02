import * as React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl ${className}`}
    {...props}
    ref={ref}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={`p-4 sm:p-6 md:p-8 pt-0 ${className}`} {...props} ref={ref} />
  )
)
CardContent.displayName = "CardContent"

export { Card, CardContent }
