"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Créations", href: "/#showcase" },
  { label: "Services", href: "/#services" },
  { label: "Processus", href: "/#processus" },
  { label: "Avis Google", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/40 shadow-sm shadow-foreground/[0.02]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:grid lg:grid-cols-3 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5 lg:justify-self-start">
          <div className={`relative flex h-10 w-28 shrink-0 items-center justify-center rounded-md px-2 py-1.5 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-32 ${
            scrolled ? "" : "bg-white/95"
          }`}>
            <Image
              src="/images/creations/elite-logo.png"
              alt="ELITE"
              width={120}
              height={42}
              className="max-h-full w-auto max-w-full object-contain"
              priority
            />
          </div>
          <span
            className={`hidden font-heading text-lg font-bold tracking-tight transition-colors duration-300 sm:inline ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Elite Agence
          </span>
        </Link>

        {/* Desktop nav - centered */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link-led rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 hover:shadow-[0_0_20px_hsl(217_91%_60%_/_0.4)]"
          >
            Nous contacter
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle - min 44px touch target */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden -mr-2 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-3 transition-colors touch-manipulation ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/[0.06]"
          }`}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto flex h-full w-[85%] max-w-sm flex-col bg-background pb-[env(safe-area-inset-bottom)] shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-4 pt-[env(safe-area-inset-top)] sm:px-6">
              <span className="font-heading text-lg font-bold text-foreground">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-foreground hover:bg-secondary"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[48px] rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary active:bg-secondary flex items-center touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-border/60 p-4">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Nous contacter
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
