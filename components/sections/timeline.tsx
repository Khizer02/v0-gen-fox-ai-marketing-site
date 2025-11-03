"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

const phases = [
  {
    number: 1,
    title: "Discovery",
    duration: "Week 1-2",
    details: "Understand your processes, requirements, and success metrics",
  },
  {
    number: 2,
    title: "Build",
    duration: "Week 2-3",
    details: "Develop and train your custom AI employee",
  },
  {
    number: 3,
    title: "Deploy",
    duration: "Week 3-4",
    details: "Launch with full support and monitoring",
  },
  {
    number: 4,
    title: "Optimize",
    duration: "Ongoing",
    details: "Continuous improvement and scaling",
  },
]

export default function Timeline() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">30-Day Deployment Timeline</h2>
          <p className="text-xl text-muted-foreground">From discovery to live AI employee in just 4 weeks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline Steps */}
          <div className="space-y-4">
            {phases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`w-full p-4 rounded-lg border transition text-left ${
                  activePhase === idx ? "border-primary bg-primary/10" : "border-border bg-background hover:bg-card"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      activePhase === idx ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
                    }`}
                  >
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <div className="p-8 rounded-xl border border-border bg-background">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{phases[activePhase].title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{phases[activePhase].details}</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Key Activities:</p>
                <ul className="space-y-2">
                  {["Stakeholder alignment", "Process documentation", "Success metrics defined"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
