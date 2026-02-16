"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Search, Code2, Rocket, Settings, Check } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analyse strategique",
    description:
      "Etude approfondie de vos besoins, processus et objectifs pour definir une feuille de route claire et adaptee.",
    details: ["Audit de l'existant", "Definition des objectifs", "Feuille de route"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Developpement sur mesure",
    description:
      "Conception et developpement de votre solution avec les technologies les plus performantes du marche.",
    details: ["Architecture technique", "Design UI/UX", "Developpement agile"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Mise en production",
    description:
      "Deploiement securise, tests rigoureux et accompagnement pour une mise en ligne sans accroc.",
    details: ["Tests complets", "Deploiement securise", "Formation equipe"],
  },
  {
    icon: Settings,
    number: "04",
    title: "Suivi & optimisation",
    description:
      "Maintenance proactive, optimisations continues et support dedie pour garantir vos performances.",
    details: ["Monitoring 24/7", "Mises a jour", "Support prioritaire"],
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.08 })

  return (
    <section
      ref={ref}
      id="processus"
      className="relative bg-background px-4 py-24 sm:px-6 sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Notre methode
          </div>
          <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Un processus{" "}
            <span className="text-gradient">structure et eprouve</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Une approche methodique en 4 etapes pour transformer votre vision
            en solution operationnelle.
          </p>
        </div>

        {/* Steps - horizontal cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-700 hover:border-primary/15 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1.5 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col p-7">
                {/* Step number */}
                <span className="font-heading text-5xl font-bold text-primary/[0.08] transition-colors duration-300 group-hover:text-primary/15">
                  {step.number}
                </span>

                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                  <step.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                <div className="mt-6 flex flex-col gap-2">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground"
                    >
                      <Check className="h-3 w-3 text-primary" />
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection line (desktop) */}
        <div className="mt-8 hidden lg:flex lg:items-center lg:justify-center lg:gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`flex items-center transition-all duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 5) * 150}ms` }}
            >
              <div className="h-px w-32 bg-gradient-to-r from-border to-primary/20" />
              <div className="h-2 w-2 rounded-full bg-primary/20" />
              <div className="h-px w-32 bg-gradient-to-r from-primary/20 to-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
