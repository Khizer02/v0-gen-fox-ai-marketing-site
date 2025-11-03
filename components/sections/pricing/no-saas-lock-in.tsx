import { Lock, Unlock, TrendingUp, Shield } from "lucide-react"

export default function NoSaasLockIn() {
  const benefits = [
    {
      icon: Unlock,
      title: "Complete Data Ownership",
      description: "Your data belongs to you. Full access, portability, and control at all times.",
    },
    {
      icon: TrendingUp,
      title: "Perpetual License",
      description: "One-time investment. Use your AI employee indefinitely without recurring fees.",
    },
    {
      icon: Shield,
      title: "No Vendor Lock-in",
      description: "Built on open standards. Migrate or integrate with other systems freely.",
    },
    {
      icon: Lock,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise charges. Know exactly what you're paying for.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">No SaaS Lock-in</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GenFox.AI is built on the principle of ownership. You own your AI employee, your data, and your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="flex gap-4 p-6 rounded-lg border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
