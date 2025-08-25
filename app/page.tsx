
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <Image src="/images/hero/firm-building.jpg" alt="Kingsmerefield Building" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <Image src="/images/logo.jpg" alt="Logo" width={88} height={88} className="rounded mb-4" data-aos="fade-in" />
          <h1 className="font-serif text-4xl md:text-6xl" data-aos="fade-up">Kingsmerefield Solicitors</h1>
          <p className="mt-4 max-w-2xl text-white/90" data-aos="fade-up" data-aos-delay="150">
            Business-focused legal solutions for companies and individuals — Corporate, Immigration, Real Estate, Employment & Disputes.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="250">
            <Link href="/contact"><Button>Book a Consultation</Button></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: "Business-First Advice", desc: "Practical, timely guidance aligned with your goals."},
          { title: "Cross-border Expertise", desc: "Experience with international clients & structures."},
          { title: "Responsive Team", desc: "Clear communication and swift turnaround."},
        ].map((i, idx) => (
          <Card key={i.title} data-aos={idx%2===0? "fade-right":"fade-left"}>
            <CardTitle className="font-serif">{i.title}</CardTitle>
            <CardDescription className="mt-2">{i.desc}</CardDescription>
          </Card>
        ))}
      </section>

      {/* Services Preview */}
      <section className="bg-white dark:bg-black/20">
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl mb-6" data-aos="fade-up">Our Practice Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title:"Company Incorporation & Business Setup", img:"/images/services/incorporation.jpg" },
              { title:"Commercial & Corporate Law", img:"/images/services/corporate.jpg" },
              { title:"Immigration & Business Visas", img:"/images/services/immigration.jpg" },
              { title:"Real Estate & Property Law", img:"/images/services/realestate.jpg" },
              { title:"Employment Law", img:"/images/services/employment.jpg" },
              { title:"Litigation & Dispute Resolution", img:"/images/services/litigation.jpg" },
            ].map((s, idx) => (
              <div key={s.title} className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-soft" data-aos={idx%2===0? "fade-right":"fade-left"}>
                <div className="relative h-44">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services"><Button variant="outline">View All Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials (Image Cards) */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl mb-6" data-aos="fade-up">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "They incorporated our UK company seamlessly.",
              name: "Amelia R.",
              role: "Entrepreneur, London",
              photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&auto=format&q=60"
            },
            {
              quote: "Expert guidance on a complex property deal.",
              name: "Oliver K.",
              role: "Investor, Manchester",
              photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&auto=format&q=60"
            },
            {
              quote: "Clear, responsive and business-minded advice.",
              name: "Sophia T.",
              role: "Startup Founder, Birmingham",
              photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=256&h=256&fit=crop&auto=format&q=60"
            }
          ].map((t, idx) => (
            <Card key={idx} data-aos="fade-in" className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 shrink-0">
                  <Image src={t.photo} alt={t.name} fill className="rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-black/60 dark:text-white/70">{t.role}</p>
                </div>
              </div>
              <p className="italic mt-4">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4 pb-4">
        <h2 className="font-serif text-3xl mb-6" data-aos="fade-up">Founders</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Mateo Todd",
              img: "/images/founders/mateo.jpg",
              bio:
                "Company formation, business structuring & compliance. Assists entrepreneurs, startups and international clients with UK incorporations and corporate governance.",
              aos: "fade-right"
            },
            {
              name: "Florence Oliver",
              img: "/images/founders/florence.jpg",
              bio:
                "Commercial & Corporate Law, Immigration & Business Visas, Real Estate & Property Law, Wills, Trusts & Probate. Practical, client-focused advice.",
              aos: "fade-left"
            }
          ].map((f) => (
            <div key={f.name} className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-soft" data-aos={f.aos}>
              <div className="relative mx-auto h-52 w-52 md:h-60 md:w-60 rounded-full overflow-hidden">
                <Image src={f.img} alt={f.name} fill className="object-cover object-center" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl">{f.name}</h3>
                <p className="text-black/70 dark:text-white/80 mt-2">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-serif text-3xl" data-aos="fade-up">Ready to talk?</h2>
          <p className="mt-3 text-white/80" data-aos="fade-up">Book a confidential consultation with our team today.</p>
          <div className="mt-6" data-aos="fade-up">
            <Link href="/contact"><Button>Get in Touch</Button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
