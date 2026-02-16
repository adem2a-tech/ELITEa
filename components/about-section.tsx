"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Target, TrendingUp, Zap, Shield, ArrowUpRight } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Sur mesure",
    description:
      "Chaque solution est pensee pour votre entreprise, vos processus et vos objectifs uniques.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Technologies de pointe pour des applications rapides, fiables et scalables a l'infini.",
  },
  {
    icon: TrendingUp,
    title: "Croissance",
    description:
      "Des outils qui generent des resultats concrets et accelerent votre transformation.",
  },
  {
    icon: Shield,
    title: "Accompagnement",
    description:
      "Un suivi personnalise de la conception au deploiement, et bien au-dela.",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-background px-6 py-32 lg:py-40"
    >
      {/* Decorative corner */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary))_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-28">
          {/* Text side */}
          <div
            className={`flex flex-col transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              A propos
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Une agence pensee pour{" "}
              <span className="text-gradient">la performance</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Elite Agence accompagne les entreprises ambitieuses dans leur transformation
              digitale. Nous concevons des outils sur mesure qui optimisent vos operations,
              automatisent vos processus et vous donnent un avantage competitif durable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              De l{"'"}intelligence artificielle aux dashboards internes, en passant par
              les CRM personnalises et les systemes d{"'"}automatisation, nous construisons
              les fondations technologiques de votre reussite.
            </p>

            {/* Mini stats row */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "+25", label: "projets livres" },
                { value: "100%", label: "satisfaction client" },
                { value: "24/7", label: "support reactif" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 200}ms` }}
                >
                  <p className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/#services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Decouvrir nos services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-all duration-700 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${i % 2 === 1 ? "sm:mt-8" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
