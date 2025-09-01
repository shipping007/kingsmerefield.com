
import type { Metadata } from "next"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AOSProvider from "@/components/AOSProvider"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kingsmerefield Solicitors",
  description: "Kingsmerefield Solicitors — Corporate, Immigration, Real Estate, Litigation, and more.",
  openGraph: { title: "Kingsmerefield Solicitors", description: "Trusted legal advisors for businesses and individuals.", type: "website", locale: "en_GB" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <AOSProvider />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
