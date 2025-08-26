"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import PhoneInputPrimitive, { type Value } from "react-phone-number-input"

export type ShadcnPhoneInputProps = React.ComponentPropsWithoutRef<typeof PhoneInputPrimitive>

const ShadcnPhoneInput = React.forwardRef<HTMLInputElement, ShadcnPhoneInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <PhoneInputPrimitive
        ref={ref as any}
        international
        countryCallingCodeEditable={false}
        displayInitialValueAsLocalNumber={false}
        className={cn(
          // root container (react-phone-number-input applies this class to the wrapper)
          "PhoneInput flex items-center gap-2",
          className
        )}
        inputComponent={({ className: inputClassName, ...inputProps }: any) => (
          <input
            {...inputProps}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              inputClassName
            )}
          />
        )}
        {...props}
      />
    )
  }
)
ShadcnPhoneInput.displayName = "ShadcnPhoneInput"

export { ShadcnPhoneInput }
