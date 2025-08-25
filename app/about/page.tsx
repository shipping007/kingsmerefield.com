
import Image from "next/image"
import StaticVideoPlaceholder from "@/components/StaticVideoPlaceholder"

export const metadata = {
  title: "About — Kingsmerefield Solicitors",
  description: "Our history, mission and team."
}

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image src="/images/hero/about-hero.jpg" alt="About Hero" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-4xl" data-aos="fade-up">About Kingsmerefield</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div data-aos="fade-right">
          <h2 className="font-serif text-3xl">Our Firm</h2>
          <p className="mt-4 text-black/70 dark:text-white/80">
            We provide clear, practical legal advice to entrepreneurs, growing companies and international clients.
            Our approach combines technical excellence with commercial awareness.
          </p>
        </div>
        <div className="relative" data-aos="fade-left">
          {/* Static placeholder, replace file at /public/videos/about.mp4 and optional poster at /public/images/about/video-poster.jpg */}
          <StaticVideoPlaceholder src="/videos/about.mp4" poster="/images/about/video-poster.jpg" heightClass="h-64" />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-serif text-3xl mb-6" data-aos="fade-up">Our Lawyers</h2>
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-soft" data-aos="fade-up">
          <div className="relative h-72 md:h-96">
            <Image
              src="/images/about/team.jpg"
              alt="Our legal team"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-6 md:p-8">
            <h3 className="font-serif text-2xl md:text-3xl">A Dedicated Team You Can Trust</h3>
            <p className="text-black/70 dark:text-white/80 mt-3">
              Our experienced lawyers bring together expertise across Corporate, Immigration, Real Estate and Disputes. We collaborate closely to deliver
              practical, business-first solutions for entrepreneurs, families and international clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
