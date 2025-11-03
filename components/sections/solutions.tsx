"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "AI Payroll ESS",
    description: "Conversational AI for payroll management and employee self-service",
    benefits: ["40% time savings", "Employee satisfaction +35%", "Error reduction 99%"],
  },
  {
    title: "WhatsApp Billing Assistant",
    description: "Automated invoicing and billing through WhatsApp",
    benefits: ["Invoice generation in seconds", "Payment tracking automated", "Customer satisfaction +50%"],
  },
  {
    title: "Personal AI Assistant",
    description: "Unified WhatsApp assistant for life and work management",
    benefits: ["Schedule management", "Task automation", "Productivity boost 3x"],
  },
  {
    title: "GenFox EdLM",
    description: "AI-powered learning management for educational institutions",
    benefits: ["Personalized learning paths", "Student engagement +60%", "Admin workload -70%"],
  },
]

export default function Solutions() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Solutions</h2>
          <p className="text-xl text-muted-foreground">Purpose-built AI employees for your industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-6 rounded-xl border border-border bg-background hover:border-primary transition cursor-pointer group"
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-4">{solution.description}</p>

              {hoveredIdx === idx && (
                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground">Key Benefits:</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition">
                Learn more
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
