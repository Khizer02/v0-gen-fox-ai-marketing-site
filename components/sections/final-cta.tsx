import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-12 sm:p-16">
          {/* Background accent */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-sm font-medium text-primary">Limited Spots Available</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Deploy Your AI Employee?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join 500+ enterprises transforming operations with GenFox.AI. Schedule your readiness workshop today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                Schedule Workshop
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-card transition">
                Download Security Whitepaper
              </button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required. 30-minute consultation with our deployment team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
