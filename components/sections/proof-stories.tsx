"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    metric: "40%",
    description: "Time Savings",
    company: "Fortune 500 Tech",
    detail: "HR team reduced manual payroll processing by 40%",
  },
  {
    metric: "60%",
    description: "Cost Reduction",
    company: "Global Financial Services",
    detail: "Operational expenses cut by 60% in first year",
  },
  {
    metric: "3x",
    description: "Productivity Increase",
    company: "Enterprise SaaS",
    detail: "Team productivity tripled with AI employee support",
  },
]

export default function ProofStories() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % stories.length)
  const prev = () => setCurrent((current - 1 + stories.length) % stories.length)

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Proven Results</h2>
          <p className="text-xl text-muted-foreground">Real outcomes from enterprise deployments</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border transition ${
                  idx === current ? "border-primary bg-primary/5" : "border-border bg-card/50"
                }`}
              >
                <div className="text-4xl font-bold text-primary mb-2">{story.metric}</div>
                <p className="text-lg font-semibold text-foreground mb-4">{story.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{story.company}</p>
                <p className="text-sm text-muted-foreground">{story.detail}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-lg border border-border hover:bg-card transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-2 rounded-lg border border-border hover:bg-card transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
