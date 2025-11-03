"use client"

import { Check } from "lucide-react"
import Link from "next/link"

interface PricingTiersProps {
  billingCycle: "monthly" | "annual"
  onBillingCycleChange: (cycle: "monthly" | "annual") => void
}

export default function PricingTiers({ billingCycle, onBillingCycleChange }: PricingTiersProps) {
  const tiers = [
    {
      name: "Accelerator",
      description: "Pre-built AI employee for common use cases",
      price: 45000,
      period: "one-time",
      features: [
        "Pre-configured AI employee",
        "30-day deployment",
        "Single use case",
        "Basic customization",
        "Email support",
        "Standard security",
        "Data ownership",
        "1 year of updates",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Custom",
      description: "Tailored AI employee built for your specific needs",
      price: 75000,
      period: "one-time",
      features: [
        "Custom-built AI employee",
        "30-day deployment",
        "Multiple use cases",
        "Full customization",
        "Priority support",
        "Enterprise security",
        "Data ownership",
        "2 years of updates",
        "Integration support",
        "Advanced governance",
      ],
      cta: "Schedule Demo",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Multi-employee deployment with dedicated support",
      price: 150000,
      period: "one-time",
      features: [
        "Multiple AI employees",
        "30-day deployment",
        "Unlimited use cases",
        "Full customization",
        "24/7 dedicated support",
        "Enterprise security + compliance",
        "Data ownership",
        "Unlimited updates",
        "Custom integrations",
        "Advanced governance",
        "SLA guarantee",
        "Quarterly business reviews",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground">All plans include perpetual ownership and no recurring fees</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border transition-all ${
                tier.highlighted ? "border-primary bg-primary/5 shadow-lg scale-105" : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">${(tier.price / 1000).toFixed(0)}K</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">No recurring fees. Perpetual ownership.</p>
                </div>

                <Link
                  href="#contact"
                  className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="space-y-3 pt-4 border-t border-border">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-center text-foreground">
            <span className="font-semibold">Volume discounts available</span> for multi-employee deployments. Contact
            our sales team for custom pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
