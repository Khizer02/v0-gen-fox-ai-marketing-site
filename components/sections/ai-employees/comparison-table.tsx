"use client"

import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    { name: "Perpetual Ownership", genfox: true, saas: false },
    { name: "No Recurring Fees", genfox: true, saas: false },
    { name: "Data Portability", genfox: true, saas: false },
    { name: "Custom Governance", genfox: true, saas: false },
    { name: "On-Premise Option", genfox: true, saas: false },
    { name: "Multi-Agent Orchestration", genfox: true, saas: false },
    { name: "Enterprise Security", genfox: true, saas: true },
    { name: "24/7 Support", genfox: true, saas: true },
    { name: "API Access", genfox: true, saas: true },
    { name: "Analytics Dashboard", genfox: true, saas: true },
  ]

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">GenFox vs Traditional SaaS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why enterprises choose build-to-own over SaaS lock-in.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">GenFox AI</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Traditional SaaS</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50 transition">
                  <td className="py-4 px-4 text-foreground">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.genfox ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.saas ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
