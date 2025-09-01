
"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const FormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to send")
      alert("Thank you! We'll reach out shortly.")
    } catch (e: any) {
      alert(e?.message || "Sorry, we couldn't send your message. Please try again.")
    }
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
        <Input id="phone" placeholder="+44 ..." {...register("phone")} />
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
