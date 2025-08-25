
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl">Kingsmerefield Solicitors</h3>
          <p className="text-white/70 mt-2">City of London, EC2, United Kingdom</p>
          <p className="text-white/70">+44 (0)20 7946 0123</p>
          <p className="text-white/70">contact@kingsmerefieldsolicitors.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><Link className="hover:text-gold" href="/about">About</Link></li>
            <li><Link className="hover:text-gold" href="/services">Services</Link></li>
            <li><Link className="hover:text-gold" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <div className="flex items-center gap-4 mt-3">
            <a aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a aria-label="Facebook" href="https://facebook.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold transition-colors">
              <Linkedin size={20} />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-gold transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Kingsmerefield Solicitors. All rights reserved.
      </div>
    </footer>
  )
}
