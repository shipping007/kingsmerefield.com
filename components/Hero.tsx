
import Image from "next/image"
export default function Hero({ image, title }: { image: string; title: string }) {
  return (
    <section className="relative h-[40vh]">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <h1 className="font-serif text-4xl" data-aos="fade-up">{title}</h1>
      </div>
    </section>
  )
}
