"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const stats = [
  { end: 25, prefix: "+", suffix: "", label: "Projets livres" },
  { end: 100, prefix: "", suffix: "%", label: "Satisfaction client" },
  { end: 24, prefix: "", suffix: "/7", label: "Support reactif" },
  { end: 100, prefix: "", suffix: "%", label: "Solutions sur mesure" },
]

function Counter({ end, prefix, suffix, active }: { end: number; prefix: string; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, end])

  return (
    <span>
      {prefix}
      {count}
      <span className="text-primary-foreground/30">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="resultats"
      className="relative overflow-hidden bg-primary px-4 py-24 sm:px-6 sm:py-28 lg:py-40"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(100,150,255,0.06),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/40" />
              Resultats
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
              Des resultats concrets,{" "}
              <br className="hidden sm:block" />
              pas des promesses.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/40 lg:text-lg">
              Chaque projet que nous livrons genere un impact mesurable
              sur les operations de nos clients.
            </p>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-2xl bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/20 touch-manipulation sm:mt-10"
            >
              Lancer votre projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group flex flex-col rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-5 transition-all duration-700 sm:p-8 hover:bg-primary-foreground/[0.06] hover:border-primary-foreground/[0.1] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <span className="font-heading text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
                  <Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} active={isInView} />
                </span>
                <span className="mt-3 text-sm font-medium text-primary-foreground/35">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
