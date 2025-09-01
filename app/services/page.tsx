
import Image from "next/image"

export const metadata = {
  title: "Services — Kingsmerefield Solicitors",
  description: "Explore our practice areas."
}

const services = [
  { title: "Company Incorporation & Business Setup", items: ["UK Limited Companies", "Incorporation of Brokerage Companies"]},
  { title: "Commercial & Corporate Law", items: ["Shareholder Agreements", "Partnership Deeds", "Mergers & Acquisitions", "Business Contracts & Legal Advisory"]},
  { title: "Immigration & Business Visas", items: ["Sole Representative Visas", "UK Start-up & Innovator Visas", "Skilled Worker Sponsorship Licences"]},
  { title: "Real Estate & Property Law", items: ["Residential & Commercial Conveyancing", "Landlord & Tenant Services", "Property Disputes"]},
  { title: "Employment Law", items: ["Employment Contracts & Handbooks", "Disciplinary & Grievance Procedures", "Settlement Agreements"]},
  { title: "Litigation & Dispute Resolution", items: ["Civil & Commercial Disputes", "Debt Recovery", "Mediation & Arbitration"]},
  { title: "Wills, Trusts & Probate", items: ["Will Drafting", "Probate Applications", "Estate Planning & Trusts"]},
  { title: "Regulatory & Compliance", items: ["FCA Registration Support", "AML Compliance", "GDPR & Data Protection Advisory"]},
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image src="/images/hero/services-hero.jpg" alt="Services Hero" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-4xl" data-aos="fade-up">Our Services</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, idx)=> (
            <div key={svc.title} className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-soft" data-aos={idx%2===0? "fade-right":"fade-left"}>
              <div className="relative h-40">
                <Image src={`/images/services/service${idx+1}.jpg`} alt={svc.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl">{svc.title}</h3>
                <ul className="mt-2 list-disc list-inside text-black/70 dark:text-white/80">
                  {svc.items.map(it => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
