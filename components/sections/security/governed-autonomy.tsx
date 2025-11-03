"use client"

import { CheckCircle2, AlertCircle, Zap } from "lucide-react"

export default function GovernedAutonomy() {
  const features = [
    {
      icon: Zap,
      title: "Autonomous Operation",
      description:
        "AI employees work independently within defined parameters, handling routine tasks without human intervention.",
    },
    {
      icon: AlertCircle,
      title: "Guardrails & Constraints",
      description:
        "Set boundaries on actions, data access, and decision-making. AI respects your governance policies automatically.",
    },
    {
      icon: CheckCircle2,
      title: "Audit & Transparency",
      description: "Every action is logged and auditable. Full visibility into what your AI employee did and why.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Governed Autonomy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI employees operate independently while staying within your governance framework. The best of both
            worlds: efficiency and control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">How It Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">Define Policies</p>
                <p className="text-muted-foreground">
                  Set rules for data access, action limits, and decision thresholds
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">Deploy AI Employee</p>
                <p className="text-muted-foreground">AI operates within your guardrails automatically</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">Monitor & Audit</p>
                <p className="text-muted-foreground">Review all actions in real-time with full audit trails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
