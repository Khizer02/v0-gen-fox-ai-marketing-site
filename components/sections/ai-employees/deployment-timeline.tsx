"use client"

import { CheckCircle2 } from "lucide-react"

export default function DeploymentTimeline() {
  const phases = [
    {
      week: "Week 1",
      title: "Discovery & Planning",
      description: "We analyze your workflows, identify automation opportunities, and define success metrics.",
      tasks: ["Process mapping", "Stakeholder interviews", "Requirements documentation"],
    },
    {
      week: "Week 2-3",
      title: "Build & Integration",
      description: "Our team builds and configures your AI agents, integrating with your existing systems.",
      tasks: ["Agent development", "System integration", "Security hardening"],
    },
    {
      week: "Week 4",
      title: "Testing & Deployment",
      description: "Comprehensive testing, user training, and production deployment.",
      tasks: ["QA testing", "Team training", "Go-live support"],
    },
    {
      week: "Ongoing",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and dedicated support.",
      tasks: ["Performance monitoring", "Regular optimization", "24/7 support"],
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">30-Day Deployment Timeline</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From discovery to production in just 30 days. Here's how we do it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < phases.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}

              <div className="rounded-xl border border-border bg-card p-6 space-y-4 h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{phase.week}</p>
                    <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{phase.description}</p>

                <div className="space-y-2 pt-4 border-t border-border">
                  {phase.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
