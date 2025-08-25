
import { cn } from "@/lib/utils"
import React from "react"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: "default"|"outline"|"ghost" }
export function Button({ className, variant="default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-5 py-2 shadow-soft"
  const styles = variant==="default" ? "bg-gold text-navy hover:opacity-90" : variant==="outline" ? "border border-navy/20 dark:border-white/20 bg-transparent hover:bg-navy/5 dark:hover:bg-white/5" : "hover:bg-navy/5 dark:hover:bg-white/5"
  return <button className={cn(base, styles, className)} {...props} />
}
