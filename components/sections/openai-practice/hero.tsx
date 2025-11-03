import { ArrowRight, Zap } from "lucide-react"

export default function OpenAIPracticeHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">OpenAI Integration</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">OpenAI Practice</h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy enterprise-grade AI agents powered by OpenAI's latest models. Reference architectures, integration
            patterns, and real-world use cases for maximum impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2">
              Explore Use Cases <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition">
              View Architecture Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
