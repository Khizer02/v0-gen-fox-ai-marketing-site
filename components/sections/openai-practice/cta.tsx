import { ArrowRight } from "lucide-react"

export default function OpenAIPracticeCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Deploy OpenAI at Scale?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's discuss which use case and architecture pattern fits your enterprise needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2">
            Schedule Architecture Review <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition">
            Download Architecture Guide
          </button>
        </div>
      </div>
    </section>
  )
}
