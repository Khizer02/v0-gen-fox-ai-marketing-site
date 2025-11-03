import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
          <span className="text-sm font-medium text-primary">Transparent Pricing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Simple, Predictable Pricing</h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          One-time investment. Perpetual ownership. No recurring SaaS fees. Choose between our Accelerator for quick
          deployment or Custom for tailored solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/roi"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Calculate Your ROI
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#comparison"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
          >
            View Comparison
          </Link>
        </div>
      </div>
    </section>
  )
}
