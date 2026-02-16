"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    name: "Sophie Martin",
    initials: "SM",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "Elite Agence a completement transforme notre facon de travailler. L'application de gestion interne qu'ils ont developpee nous a permis d'automatiser 80% de nos processus. L'equipe est reactive, professionnelle et vraiment a l'ecoute. Je recommande a 100%.",
    response: null,
    color: "bg-blue-600",
  },
  {
    name: "Thomas Durand",
    initials: "TD",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Le dashboard personnalise qu'ils ont concu nous permet de suivre nos KPI en temps reel. La qualite du code, le design et l'accompagnement sont au-dessus de tout ce qu'on a connu. Un vrai partenaire technique.",
    response: "Merci Thomas ! C'est un plaisir de travailler avec votre equipe.",
    color: "bg-emerald-600",
  },
  {
    name: "Marie Lefevre",
    initials: "ML",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "Notre CRM sur mesure a augmente notre taux de conversion de 35% en trois mois. L'interface est intuitive et notre equipe commerciale l'a adopte immediatement. Excellent travail.",
    response: null,
    color: "bg-amber-600",
  },
  {
    name: "Alexandre Petit",
    initials: "AP",
    date: "Il y a 2 mois",
    rating: 5,
    text: "L'integration IA mise en place pour notre service client a reduit nos temps de reponse de 60%. Investissement rentabilise des le premier mois. Equipe serieuse et techniquement tres solide.",
    response: null,
    color: "bg-indigo-600",
  },
  {
    name: "Claire Dubois",
    initials: "CD",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Professionnalisme, rigueur et creativite. Leur application web a completement transforme notre supply chain. Le suivi post-livraison est exemplaire.",
    response: "Merci Claire pour votre confiance ! Nous sommes ravis des resultats.",
    color: "bg-rose-600",
  },
  {
    name: "Nicolas Bernard",
    initials: "NB",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "Agence au top ! Ils ont su comprendre nos besoins complexes et delivrer une solution elegante et performante dans les delais. Le support technique est irreprochable.",
    response: null,
    color: "bg-primary",
  },
]

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export function GoogleReviewsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      ref={ref}
      id="avis"
      className="relative bg-secondary/50 px-4 py-24 sm:px-6 sm:py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Google badge - more prominent */}
          <div className="mb-8 flex items-center gap-4 rounded-2xl border border-border/60 bg-background px-7 py-4 shadow-lg shadow-foreground/[0.03]">
            <GoogleLogo className="h-7 w-7" />
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2.5">
                <span className="font-heading text-2xl font-bold text-foreground">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                Avis verifies Google Business
              </span>
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Ce que nos clients{" "}
            <span className="text-gradient">disent de nous</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Des avis authentiques de dirigeants et responsables
            qui nous font confiance pour leurs projets digitaux.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`group flex flex-col rounded-2xl border border-border/50 bg-background p-7 transition-all duration-700 hover:border-primary/15 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Review header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full ${review.color} text-xs font-bold text-primary-foreground`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <GoogleLogo className="h-5 w-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {review.text}
              </p>

              {/* Owner response */}
              {review.response && (
                <div className="mt-5 rounded-xl border border-border/40 bg-secondary/60 p-4">
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">
                    Reponse de Elite Agence
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/temoignages"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Voir tous les avis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-xl border border-border/60 bg-background px-6 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <GoogleLogo className="h-4 w-4" />
            Voir sur Google
          </a>
        </div>
      </div>
    </section>
  )
}
