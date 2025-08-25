
import { cn } from "@/lib/utils"
import React from "react"
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-navy/50 p-6 shadow-soft", className)} {...props} />
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-semibold text-lg", className)} {...props} />
}
export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-black/60 dark:text-white/70", className)} {...props} />
}
