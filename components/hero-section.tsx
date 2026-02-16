"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Star, Play } from "lucide-react"
import { useEffect, useState } from "react"

const words = ["entreprises", "startups", "PME", "agences"]

function TypingAnimation() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const speed = deleting ? 40 : 80

    if (!deleting && displayed === word) {
      const timeout = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (deleting && displayed === "") {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        deleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="relative">
      <span className="text-primary-foreground">{displayed}</span>
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] animate-pulse bg-blue-400 align-middle" />
    </span>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(100,150,255,0.12),transparent)]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] animate-float" />
      <div className="absolute bottom-[15%] right-[5%] h-[600px] w-[600px] rounded-full bg-indigo-500/[0.04] blur-[120px] animate-float animation-delay-400" />
      <div className="absolute top-[50%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.03] blur-[100px]" />

      <div
        className={`relative z-10 mx-auto max-w-6xl px-4 text-center transition-all duration-1000 sm:px-6 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Trust badge - responsive */}
        <div
          className={`mb-8 flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.04] px-4 py-2 transition-all duration-700 delay-300 sm:mb-10 sm:gap-3 sm:px-5 sm:py-2.5 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="h-3 w-px bg-primary-foreground/10" />
          <span className="text-xs font-medium text-primary-foreground/50">
            Note 5.0 sur Google
          </span>
          <div className="h-3 w-px bg-primary-foreground/10" />
          <span className="text-xs font-medium text-primary-foreground/40">
            +25 projets livres
          </span>
        </div>

        <h1
          className={`font-heading text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Les outils digitaux qui font{" "}
          <br className="hidden sm:block" />
          evoluer les <TypingAnimation />
        </h1>

        <p
          className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/45 sm:text-lg md:text-xl transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Applications web sur mesure, automatisation intelligente et solutions IA.
          Nous transformons vos operations et accelerons votre croissance.
        </p>

        <div
          className={`mt-10 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 transition-all duration-1000 delay-[900ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/#contact"
            className="group relative inline-flex min-h-[48px] items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/20 touch-manipulation sm:py-4.5"
          >
            <span className="relative z-10">Demander un appel strategique</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#services"
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-8 py-4 text-sm font-semibold text-primary-foreground/80 transition-all duration-300 active:scale-[0.98] hover:bg-primary-foreground/[0.08] hover:text-primary-foreground hover:border-primary-foreground/20 touch-manipulation sm:py-4.5"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Decouvrir nos services
          </Link>
        </div>

        {/* Client logos marquee */}
        <div
          className={`mt-16 transition-all duration-1000 delay-[1100ms] sm:mt-24 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/20">
            Ils nous font confiance
          </p>
          <div className="relative mx-auto max-w-3xl overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-primary to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-primary to-transparent" />
            <div className="flex animate-marquee items-center gap-16 whitespace-nowrap">
              {[...Array(2)].map((_, loop) => (
                <div key={loop} className="flex items-center gap-16">
                  {["LogiTech Solutions", "NovaPharma", "Groupe Arcadia", "FinanceFlow", "Urbanova", "BrewLab", "MedConnect", "VentureLab"].map(
                    (name) => (
                      <span
                        key={`${loop}-${name}`}
                        className="font-heading text-sm font-semibold text-primary-foreground/15 transition-colors hover:text-primary-foreground/30"
                      >
                        {name}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <Link
          href="/#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/15 transition-colors hover:text-primary-foreground/30"
          aria-label="Descendre"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
