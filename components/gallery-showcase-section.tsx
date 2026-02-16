"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight, Sparkles } from "lucide-react"

const creations = [
  {
    image: "/images/creations/piscinistepro-dashboard.png",
    title: "PiscinistePro",
    description: "Dashboard complet pour professionnels de la piscine.",
    tag: "Dashboard",
  },
  {
    image: "/images/creations/elite-dashboard.png",
    title: "ELITE CRM",
    description: "Centre de commande business et gestion prospects.",
    tag: "CRM",
  },
  {
    image: "/images/creations/btppro-dashboard.png",
    title: "BTPPro",
    description: "Tableau de bord secteur BTP et suivi projets.",
    tag: "Dashboard",
  },
]

export function GalleryShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      ref={ref}
      id="showcase"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background px-4 py-20 sm:px-6 sm:py-24 lg:py-36"
    >
      <div className="relative mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Nos réalisations
          </div>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Des outils sur mesure qui{" "}
            <span className="text-gradient">font la différence</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {creations.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all duration-700 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/#services"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all active:scale-[0.98] hover:border-primary/40 hover:bg-primary/10 touch-manipulation"
          >
            Voir tous nos services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
