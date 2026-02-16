"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import {
  Globe,
  LayoutDashboard,
  Bot,
  BarChart3,
  Monitor,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

const creations = [
  {
    image: "/images/creations/piscinistepro-dashboard.png",
    title: "PiscinistePro",
    description: "Dashboard complet pour professionnels de la piscine : chantiers, prospects, devis, IA visualisation.",
  },
  {
    image: "/images/creations/elite-dashboard.png",
    title: "ELITE CRM",
    description: "Centre de commande business : prospects, calendrier, finances, rappels et indicateurs clés.",
  },
  {
    image: "/images/creations/btppro-dashboard.png",
    title: "BTPPro",
    description: "Tableau de bord secteur BTP : CA, projets actifs, clients et graphiques d'évolution.",
  },
]

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description:
      "Applications web performantes et scalables, adaptees a vos processus metier et vos objectifs de croissance.",
    tag: "Developpement",
    accent: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: LayoutDashboard,
    title: "Systemes de gestion",
    description:
      "Outils internes personnalises pour centraliser vos donnees et piloter votre activite en temps reel.",
    tag: "Back-office",
    accent: "from-indigo-500/10 to-indigo-600/5",
  },
  {
    icon: Bot,
    title: "Automatisation & IA",
    description:
      "Intelligence artificielle et automatisations pour eliminer les taches repetitives et decupler votre productivite.",
    tag: "Innovation",
    accent: "from-sky-500/10 to-sky-600/5",
  },
  {
    icon: BarChart3,
    title: "CRM & Dashboards",
    description:
      "Tableaux de bord et CRM sur mesure pour visualiser vos KPI et optimiser votre relation client.",
    tag: "Analytics",
    accent: "from-cyan-500/10 to-cyan-600/5",
  },
  {
    icon: Monitor,
    title: "Sites vitrines premium",
    description:
      "Sites web ultra-rapides et optimises SEO, concus pour convertir vos visiteurs en clients fideles.",
    tag: "Web design",
    accent: "from-blue-500/10 to-indigo-600/5",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.06 })

  return (
    <section
      ref={ref}
      id="services"
      className="relative bg-secondary/50 px-4 py-24 sm:px-6 sm:py-28 lg:py-40"
    >
      {/* Background decor */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary))_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Nos services
          </div>
          <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Des solutions concretes pour{" "}
            <span className="text-gradient">chaque besoin</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Nous concevons des outils digitaux sur mesure pour transformer
            votre facon de travailler et vous demarquer de la concurrence.
          </p>
        </div>

        {/* Service cards - bento grid */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background p-8 transition-all duration-700 hover:border-primary/15 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1.5 ${
                i === 0 ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-10" : ""
              } ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative flex flex-col">
                <div className="mb-2 inline-flex w-fit rounded-full border border-border/40 bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {service.tag}
                </div>
                <div className="my-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  En savoir plus
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exemples de nos créations */}
        <div className="mt-28">
          <div
            className={`mb-12 text-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Exemples de nos créations
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Dashboards et applications livrés
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {creations.map((item, i) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg transition-all duration-700 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.08] hover:-translate-y-2 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(i + 6) * 100}ms` }}
              >
                <div className="relative aspect-[4/3] min-h-[200px] overflow-hidden bg-secondary/50 sm:min-h-[250px] lg:min-h-[320px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
