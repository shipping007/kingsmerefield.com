
import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact — Kingsmerefield Solicitors",
  description: "Get in touch for a confidential consultation."
}

export default function ContactPage() {
  return (
    <div>
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image src="/images/hero/contact-hero.jpg" alt="Contact Hero" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-4xl" data-aos="fade-up">Contact Us</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right">
          <h2 className="font-serif text-2xl">Send a Message</h2>
          <ContactForm />
        </div>
        <div className="space-y-4" data-aos="fade-left">
          <div className="rounded-2xl overflow-hidden shadow-soft h-72">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=High+Road,+Tottenham+Road,+London+N15+4NP,+United+Kingdom&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3 className="font-serif text-xl">Our Office</h3>
            <p className="text-black/70 dark:text-white/80 mt-2">High Road, Tottenham Road, London N15 4NP</p>
            <p className="text-black/70 dark:text-white/80">United Kingdom</p>
            <p className="text-black/70 dark:text-white/80">+447384812340 • Mateotodd@mail.co.uk</p>
          </div>
        </div>
      </section>
    </div>
  )
}
