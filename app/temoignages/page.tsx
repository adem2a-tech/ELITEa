import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TestimonialsList } from "@/components/testimonials-list"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Avis Google | Elite Agence",
  description:
    "Decouvrez les avis Google authentiques de nos clients. Note 5.0/5 pour nos projets digitaux sur mesure.",
}

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

export default function TemoignagesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden bg-primary px-6 pb-28 pt-40 lg:pb-36 lg:pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(100,150,255,0.1),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Google badge */}
            <div className="mb-10 inline-flex items-center gap-4 rounded-2xl border border-primary-foreground/[0.08] bg-primary-foreground/[0.04] px-7 py-4">
              <GoogleLogo className="h-7 w-7" />
              <div className="h-8 w-px bg-primary-foreground/[0.08]" />
              <div className="flex items-center gap-2.5">
                <span className="font-heading text-2xl font-bold text-primary-foreground">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
              Avis verifies de nos clients
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/40 lg:text-lg">
              Des avis authentiques de dirigeants et responsables
              qui ont choisi Elite Agence pour transformer leur entreprise.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsList />

        {/* CTA */}
        <section className="bg-secondary/50 px-6 py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Votre tour
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Pret a transformer{" "}
              <span className="text-gradient">votre entreprise ?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Rejoignez nos clients satisfaits et lancez votre projet digital
              avec une equipe qui delivre des resultats.
            </p>
            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Demander un appel strategique
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
