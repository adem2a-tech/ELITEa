"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star } from "lucide-react"

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

const testimonials = [
  {
    name: "Sophie Martin",
    initials: "SM",
    role: "Directrice Operations",
    company: "LogiTech Solutions",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "Grace a Elite Agence, nous avons automatise 80% de nos processus internes. Le gain de temps est considerable et notre equipe peut enfin se concentrer sur des taches a forte valeur ajoutee. Le projet a ete livre dans les temps avec un accompagnement exemplaire.",
    response: "Merci Sophie ! Nous sommes ravis de l'impact sur vos operations quotidiennes.",
    color: "bg-blue-600",
  },
  {
    name: "Thomas Durand",
    initials: "TD",
    role: "Fondateur & CEO",
    company: "NovaPharma",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Le dashboard personnalise qu'ils ont developpe nous permet de suivre nos KPI en temps reel. La qualite du code, le design et l'accompagnement sont au-dessus de tout ce qu'on a connu. Un vrai partenaire technique, pas juste un prestataire.",
    response: "Merci Thomas ! C'est un plaisir de travailler avec votre equipe.",
    color: "bg-emerald-600",
  },
  {
    name: "Marie Lefevre",
    initials: "ML",
    role: "Responsable Digital",
    company: "Groupe Arcadia",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "Notre CRM sur mesure a transforme notre relation client. Nous avons augmente notre taux de conversion de 35% en seulement trois mois. L'interface est intuitive et notre equipe commerciale l'a adopte immediatement.",
    response: null,
    color: "bg-amber-600",
  },
  {
    name: "Alexandre Petit",
    initials: "AP",
    role: "Directeur Technique",
    company: "FinanceFlow",
    date: "Il y a 2 mois",
    rating: 5,
    text: "L'integration IA qu'Elite Agence a mise en place pour notre service client a reduit nos temps de reponse de 60%. Un investissement rentabilise des le premier mois. L'equipe est techniquement tres solide et toujours disponible.",
    response: null,
    color: "bg-indigo-600",
  },
  {
    name: "Claire Dubois",
    initials: "CD",
    role: "Co-fondatrice",
    company: "EcoTrade",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Professionnalisme, rigueur et creativite. Leur application web a completement transforme notre facon de gerer notre supply chain. Le suivi post-livraison est exemplaire, ils sont toujours disponibles pour ajuster et optimiser.",
    response: "Merci Claire pour votre confiance ! Nous sommes ravis des resultats obtenus.",
    color: "bg-rose-600",
  },
  {
    name: "Nicolas Bernard",
    initials: "NB",
    role: "Directeur General",
    company: "Urbanova",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "Agence au top ! Ils ont su comprendre nos besoins complexes et delivrer une solution elegante et performante dans les delais. Le support technique apres livraison est irreprochable. Je recommande les yeux fermes.",
    response: null,
    color: "bg-primary",
  },
  {
    name: "Julie Moreau",
    initials: "JM",
    role: "Directrice Marketing",
    company: "BrewLab",
    date: "Il y a 6 semaines",
    rating: 5,
    text: "Notre nouveau site vitrine a double notre nombre de leads entrants en deux mois. Le design est magnifique, le SEO est au point et la performance est impeccable. Elite Agence comprend vraiment les enjeux business.",
    response: "Merci Julie ! Ces resultats sont le fruit d'une super collaboration.",
    color: "bg-sky-600",
  },
  {
    name: "Pierre Garnier",
    initials: "PG",
    role: "Responsable IT",
    company: "MedConnect",
    date: "Il y a 5 semaines",
    rating: 5,
    text: "Le systeme de gestion interne qu'ils ont developpe a remplace 4 outils differents. Tout est centralise, les donnees sont fiables et l'equipe a gagne en efficacite. L'investissement en valait largement la peine.",
    response: null,
    color: "bg-violet-600",
  },
  {
    name: "Camille Roux",
    initials: "CR",
    role: "CEO",
    company: "VentureLab",
    date: "Il y a 2 mois",
    rating: 5,
    text: "J'ai travaille avec plusieurs agences avant et la difference est nette. Elite Agence est professionnel, transparent et livre un travail de qualite superieure. Notre systeme de booking tourne parfaitement depuis la livraison.",
    response: "Merci Camille ! Votre confiance nous motive a toujours viser l'excellence.",
    color: "bg-teal-600",
  },
]

export function TestimonialsList() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.02 })

  return (
    <section ref={ref} className="bg-background px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all duration-700 hover:border-primary/15 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color} text-xs font-bold text-primary-foreground`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} - {t.company}
                    </p>
                  </div>
                </div>
                <GoogleLogo className="h-5 w-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Rating + date */}
              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-muted-foreground">{t.date}</span>
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </p>

              {/* Owner response */}
              {t.response && (
                <div className="mt-5 rounded-xl border border-border/40 bg-secondary/60 p-4">
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">
                    Reponse de Elite Agence
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {t.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
