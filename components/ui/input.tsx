
import * as React from "react"
import { cn } from "@/lib/utils"
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn("w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-navy/40 px-4 py-2 outline-none focus:ring-2 focus:ring-gold", className)} {...props} />
})
