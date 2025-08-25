
import * as React from "react"
import { cn } from "@/lib/utils"
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn("w-full min-h-[120px] rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-navy/40 px-4 py-2 outline-none focus:ring-2 focus:ring-gold", className)} {...props} />
})
