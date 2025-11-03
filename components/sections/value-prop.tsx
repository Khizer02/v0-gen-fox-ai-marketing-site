import { Shield, Zap, TrendingUp, Lock } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Build-to-Own",
    description: "Perpetual ownership. No recurring SaaS fees. Your AI, forever.",
  },
  {
    icon: Shield,
    title: "Governed Autonomy",
    description: "AI operates within your guardrails. Full control and transparency.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2, ISO 27001, HIPAA-ready. Bank-grade encryption.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Track savings, efficiency gains, and business impact in real-time.",
  },
]

export default function ValueProp() {
  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why GenFox.AI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The only AI employee platform built for enterprise operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-background hover:bg-card/50 transition group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
