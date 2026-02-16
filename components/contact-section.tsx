"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { Send, Mail, Building2, Phone, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

const benefits = [
  "Appel strategique gratuit de 30 min",
  "Analyse personnalisee de vos besoins",
  "Devis detaille sous 48h",
  "Accompagnement de A a Z",
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.08 })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 sm:py-28 lg:py-40"
    >
      {/* Corner decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary))_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary))_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left info */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Contact
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Parlons de{" "}
              <span className="text-gradient">votre projet</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Vous avez une idee, un besoin, un defi technique ?
              Remplissez le formulaire et notre equipe vous recontactera
              dans les 24 heures.
            </p>

            {/* Benefits */}
            <div className="mt-10 flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit}
                  className={`flex items-center gap-3.5 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${(i + 3) * 150}ms` }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/[0.06]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact details card */}
            <div
              className={`mt-10 flex flex-col gap-5 rounded-2xl border border-border/50 bg-card p-5 transition-all duration-1000 delay-500 sm:mt-12 sm:p-7 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { icon: Mail, label: "Email", value: "wessence2a@gmail.com", href: "mailto:wessence2a@gmail.com" },
                { icon: Phone, label: "Telephone", value: "07 69 08 10 72", href: "tel:+33769081072" },
                { icon: Building2, label: "Localisation", value: "Paris, France", href: undefined },
              ].map((item) => {
                const content = (
                  <>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </>
                )
                return (
                  <div key={item.label} className="flex min-h-[52px] items-center gap-4 touch-manipulation">
                    {item.href ? (
                      <Link href={item.href} className="flex flex-1 items-center gap-4 rounded-lg transition-colors active:bg-secondary/50 hover:bg-secondary/30 -m-2 p-2">
                        {content}
                      </Link>
                    ) : (
                      <div className="flex flex-1 items-center gap-4">{content}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form card */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border/50 bg-card p-8 text-center sm:p-16">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="mt-8 font-heading text-2xl font-bold text-foreground">
                  Message envoye !
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Merci pour votre message. Notre equipe vous recontactera
                  dans les 24 heures pour planifier votre appel strategique.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card p-6 shadow-2xl shadow-foreground/[0.02] sm:p-8 lg:p-10"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Demandez votre appel strategique
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Gratuit et sans engagement
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="min-h-[48px] rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/25 touch-manipulation sm:text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">
                      Entreprise
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      className="min-h-[48px] rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/25 touch-manipulation sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">
                    Email professionnel
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jean@entreprise.fr"
                    className="min-h-[48px] rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/25 touch-manipulation sm:text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Decrivez brievement votre projet, vos besoins et vos objectifs..."
                    className="min-h-[120px] resize-none rounded-xl border border-input bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/40 transition-all focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/25 touch-manipulation sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 active:scale-[0.98] hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 touch-manipulation sm:w-auto sm:py-4.5"
                >
                  <Send className="h-4 w-4" />
                  Etre recontacte sous 24h
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
