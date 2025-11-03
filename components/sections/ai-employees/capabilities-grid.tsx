"use client"

import { Brain, Zap, Shield, BarChart3, Users, Workflow } from "lucide-react"

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI agents that learn from your processes and continuously improve performance.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Handle high-volume transactions with sub-second response times.",
    },
    {
      icon: Shield,
      title: "Governed Autonomy",
      description: "AI operates within defined guardrails with full audit trails and compliance.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards showing performance metrics and ROI impact.",
    },
    {
      icon: Users,
      title: "Human-in-the-Loop",
      description: "Seamless escalation to human teams when needed with context preservation.",
    },
    {
      icon: Workflow,
      title: "Multi-Agent Orchestration",
      description: "Coordinate multiple AI agents for complex, multi-step workflows.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Powerful Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features built for mission-critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="rounded-xl border border-border bg-background p-6 space-y-4 hover:border-primary/50 transition"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
