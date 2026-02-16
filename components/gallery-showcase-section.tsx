"use client"

import dynamic from "next/dynamic"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Globe,
  LayoutDashboard,
  Bot,
  BarChart3,
  Monitor,
  MousePointer2,
  Keyboard,
  Hand,
} from "lucide-react"

const InfiniteGallery = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[70vh] w-full items-center justify-center bg-secondary/30">
        <p className="text-sm text-muted-foreground">Chargement de la galerie…</p>
      </div>
    ),
  }
)

const SAMPLE_IMAGES = [
  "/images/creations/piscinistepro-dashboard.png",
  "/images/creations/elite-dashboard.png",
  "/images/creations/btppro-dashboard.png",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
]

export function GalleryShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      ref={ref}
      id="showcase"
      className="relative overflow-hidden bg-secondary/30 px-6 py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Nos réalisations
          </div>
          <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Ce que nous{" "}
            <span className="text-gradient">créons</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Dashboards, CRM et applications web sur mesure pour nos clients.
            Molette ou doigt pour faire défiler.
          </p>
        </div>

        <div
          className={`relative mt-12 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ minHeight: "70vh" }}
        >
          <InfiniteGallery
            images={SAMPLE_IMAGES}
            speed={1.5}
            visibleCount={12}
            autoPlaySpeed={3}
            autoPlayDelayMs={1000}
            className="h-[70vh] w-full"
            fadeSettings={{
              fadeIn: { start: 0.05, end: 0.25 },
              fadeOut: { start: 0.75, end: 0.85 },
            }}
            blurSettings={{
              blurIn: { start: 0.0, end: 0.08 },
              blurOut: { start: 0.8, end: 0.9 },
              maxBlur: 6.0,
            }}
          />
        </div>

        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-center transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <MousePointer2 className="h-4 w-4" />
            Molette
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Hand className="h-4 w-4" />
            Doigt / tactile
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Keyboard className="h-4 w-4" />
            Flèches clavier
          </div>
        </div>

        {/* Ce qu'on propose */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="mb-10 text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Ce que nous proposons
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Applications Web",
                desc: "Sites et apps sur mesure, scalables et performantes.",
              },
              {
                icon: LayoutDashboard,
                title: "Dashboards & CRM",
                desc: "Tableaux de bord et gestion clients pour piloter votre activité.",
              },
              {
                icon: Bot,
                title: "Automatisation & IA",
                desc: "Intelligence artificielle et workflows automatisés.",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "Visualisation des KPI et décisions data-driven.",
              },
              {
                icon: Monitor,
                title: "Sites vitrines",
                desc: "Sites web rapides, optimisés SEO, qui convertissent.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
