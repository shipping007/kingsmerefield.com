
"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
export default function AOSProvider() {
  useEffect(() => { AOS.init({ once: false, duration: 700, easing: "ease-out-quart" }) }, [])
  return null
}
