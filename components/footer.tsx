import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Créations", href: "/#showcase" },
    { label: "Services", href: "/#services" },
    { label: "Processus", href: "/#processus" },
    { label: "Avis Google", href: "/#avis" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "Applications Web", href: "/#services" },
    { label: "Automatisation & IA", href: "/#services" },
    { label: "CRM & Dashboards", href: "/#services" },
    { label: "Sites vitrines", href: "/#services" },
    { label: "Systemes de gestion", href: "/#services" },
  ],
  legal: [
    { label: "Mentions legales", href: "#" },
    { label: "Politique de confidentialite", href: "#" },
    { label: "CGV", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/[0.06] bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Top CTA bar */}
        <div className="mb-12 flex flex-col items-center gap-6 rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-6 text-center sm:mb-16 sm:p-8 lg:flex-row lg:justify-between lg:p-10 lg:text-left">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-foreground lg:text-2xl">
              Pret a lancer votre prochain projet ?
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/40">
              Discutons ensemble de vos objectifs et construisons votre solution ideale.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/20 touch-manipulation w-full sm:w-auto"
          >
            Nous contacter
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-24 items-center">
                <Image
                  src="/images/creations/elite-logo.png"
                  alt="ELITE"
                  width={96}
                  height={32}
                  className="h-auto w-24 object-contain object-left brightness-0 invert"
                />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">
                Elite Agence
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/35">
              Nous developpons les outils digitaux qui font evoluer les entreprises.
              Applications sur mesure, IA et automatisation.
            </p>
            {/* Mini rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-primary-foreground/30">5.0 sur Google</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/25">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/25">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/25">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-primary-foreground/[0.06] pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-primary-foreground/25">
            {"© 2026 Elite Agence. Tous droits reserves."}
          </p>
          <p className="text-xs text-primary-foreground/15">
            Concu avec soin a Paris, France
          </p>
        </div>
      </div>
    </footer>
  )
}
