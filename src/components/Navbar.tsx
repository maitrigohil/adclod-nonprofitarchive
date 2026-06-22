"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/#newsletter", label: "Newsletter" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isHeroZone, setIsHeroZone] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setIsHeroZone(y < window.innerHeight * 0.7)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const alwaysSolid = pathname === "/podcasts"
  const showDark = alwaysSolid || !isHeroZone || scrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showDark ? "bg-[#111827] shadow-md" : "bg-transparent"
        )}
        style={{ height: "64px" }}
      >
        <nav
          className="h-full flex items-center justify-between px-6 lg:px-10 max-w-none"
          aria-label="Site navigation"
        >
          {/* LEFT: IIMA logo + Ashank Desai Centre logo (white) */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-4 shrink-0 pt-1.5 pl-0 pr-2"
            aria-label="Home"
          >
            <Image
              src="/iima-logo.png"
              alt="Indian Institute of Management Ahmedabad"
              width={140}
              height={56}
              className="h-11 w-auto object-contain object-left select-none"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
            <Image
              src="/ashank-desai-centre-logo.png"
              alt="Ashank Desai Centre for Leadership and Organisational Development"
              width={165}
              height={44}
              className="h-11 w-auto object-contain object-left select-none"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* CENTER: Nav links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && !link.href.includes("#") && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-sans text-sm font-medium tracking-wide transition-all duration-200 relative py-1",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:transition-transform after:duration-200 after:origin-left",
                    isActive
                      ? "text-white after:scale-x-100 after:bg-iima-blue"
                      : "text-white/60 hover:text-white after:scale-x-0 hover:after:scale-x-100 after:bg-white/40"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* RIGHT: placeholder to keep nav centered */}
          <div className="hidden md:block shrink-0 w-[120px] lg:w-[120px]" aria-hidden="true" />

          {/* Mobile logo */}
          <Link
            href="/"
            className="md:hidden flex items-center shrink-0"
            aria-label="Home"
          >
            <Image
              src="/iima-logo.png"
              alt="IIM Ahmedabad"
              width={100}
              height={40}
              className="h-8 w-auto object-contain select-none"
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: "rgba(243,244,244,0.75)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{ background: "rgba(243,244,244,0.08)", opacity: showDark ? 1 : 0 }}
        />
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16" style={{ backgroundColor: "#111827" }}>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl font-normal transition-colors duration-200 hover:text-iima-blue"
                style={{ color: "rgb(243,244,244)", letterSpacing: "-0.1px" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-8 pt-6 border-t" style={{ borderColor: "rgba(243,244,244,0.1)" }}>
            <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "rgba(243,244,244,0.35)" }}>
              Ashank Desai Centre · IIM Ahmedabad
            </p>
          </div>
        </div>
      )}
    </>
  )
}
