"use client"

import { Check } from "lucide-react"

export default function AcceleratorVsCustom() {
  const acceleratorFeatures = [
    "Pre-built AI templates",
    "30-day rapid deployment",
    "Standard integrations",
    "Email & chat support",
    "Monthly performance reviews",
    "Governance framework included",
  ]

  const customFeatures = [
    "Fully custom AI agents",
    "Tailored to your workflows",
    "Advanced integrations",
    "Dedicated support team",
    "Weekly optimization sessions",
    "Custom governance policies",
    "Multi-agent orchestration",
    "Advanced analytics dashboard",
  ]

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Choose Your Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need rapid deployment or a fully customized solution, we have the right option for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Accelerator */}
          <div className="rounded-2xl border border-border bg-background p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Accelerator</h3>
              <p className="text-muted-foreground">Perfect for standard use cases</p>
            </div>

            <div className="space-y-3">
              {acceleratorFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Starting at</p>
                <p className="text-3xl font-bold text-foreground">$50K</p>
                <p className="text-sm text-muted-foreground">One-time cost</p>
              </div>
              <button className="w-full px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-card transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Custom */}
          <div className="rounded-2xl border-2 border-primary bg-background p-8 space-y-8 relative">
            <div className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              Most Popular
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Custom</h3>
              <p className="text-muted-foreground">For complex enterprise needs</p>
            </div>

            <div className="space-y-3">
              {customFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Custom pricing</p>
                <p className="text-3xl font-bold text-foreground">Based on scope</p>
                <p className="text-sm text-muted-foreground">Typically $100K-$500K</p>
              </div>
              <button className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
