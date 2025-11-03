import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent/50">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Ready to Deploy Your AI Employee?</h2>

        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Schedule a readiness workshop with our team to discuss your specific needs and get a custom proposal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition"
          >
            Schedule Workshop
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/roi"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition"
          >
            Calculate ROI
          </Link>
        </div>

        <p className="text-sm text-primary-foreground/80 pt-4">
          Questions? Email us at{" "}
          <a href="mailto:sales@genfox.ai" className="underline hover:no-underline">
            sales@genfox.ai
          </a>
        </p>
      </div>
    </section>
  )
}
