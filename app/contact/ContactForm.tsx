
"use client"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ShadcnPhoneInput } from "@/components/ui/phone-input"
import { parsePhoneNumberFromString, isValidPhoneNumber } from "libphonenumber-js"

const FormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(1, "Phone is required").refine((val) => isValidPhoneNumber(val || ""), {
    message: "Enter a valid phone number",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const { register, control, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit = async (data: any) => {
    // Ensure E.164 formatting before submit
    const parsed = parsePhoneNumberFromString(data.phone || "")
    const e164 = parsed ? parsed.number : data.phone
    const payload = { ...data, phone: e164 }
    await new Promise(r => setTimeout(r, 500))
    console.log("Contact submission", payload)
    alert("Thank you! We'll reach out shortly.")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-aos="fade-up">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your full name" {...register("name")} />
        {errors.name && <p className="text-sm text-red-600 mt-1">{String(errors.name.message)}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-sm text-red-600 mt-1">{String(errors.email.message)}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Controller
          control={control}
          name="phone"
          defaultValue=""
          render={({ field }) => (
            <ShadcnPhoneInput
              id="phone"
              value={field.value as any}
              onChange={field.onChange as any}
              defaultCountry="GB"
              placeholder="Enter phone number"
              className="w-full"
            />
          )}
        />
        {errors.phone && <p className="text-sm text-red-600 mt-1">{String(errors.phone.message)}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="How can we help?" {...register("message")} />
        {errors.message && <p className="text-sm text-red-600 mt-1">{String(errors.message.message)}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>Send Message</Button>
      {isSubmitSuccessful && <p className="text-sm text-green-600">Submitted! We&apos;ll be in touch.</p>}
    </form>
  )
}

