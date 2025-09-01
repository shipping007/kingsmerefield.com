
"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-navy/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="Kingsmerefield Solicitors" width={40} height={40} className="rounded" />
          <span className="font-serif text-xl text-navy dark:text-white">Kingsmerefield Solicitors</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          <button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-xl border border-black/10 dark:border-white/10 hover:shadow-soft">
            {mounted && theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </nav>
        <button className="md:hidden p-2 rounded-xl border border-black/10 dark:border-white/10" onClick={() => setOpen(v=>!v)}>
          <span className="sr-only">Toggle Menu</span>☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-navy border-t border-black/5 dark:border-white/10">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
            <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
            <button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-fit p-2 rounded-xl border border-black/10 dark:border-white/10 hover:shadow-soft">
              {mounted && theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
