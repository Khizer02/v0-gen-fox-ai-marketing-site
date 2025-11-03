"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

const comparisonData = [
  { feature: "Perpetual Ownership", genfox: true, saas: false },
  { feature: "One-Time Cost", genfox: true, saas: false },
  { feature: "No Vendor Lock-in", genfox: true, saas: false },
  { feature: "Enterprise Security", genfox: true, saas: true },
  { feature: "Custom Training", genfox: true, saas: false },
  { feature: "Governed Autonomy", genfox: true, saas: false },
]

export default function Comparison() {
  const [showTable, setShowTable] = useState(true)

  return (
    <section className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Build-to-Own vs SaaS</h2>
          <p className="text-xl text-muted-foreground mb-8">Why GenFox.AI is different</p>

          {/* Toggle */}
          <div className="inline-flex rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setShowTable(true)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                showTable ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Comparison Table
            </button>
            <button
              onClick={() => setShowTable(false)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                !showTable ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Download PDF
            </button>
          </div>
        </div>

        {showTable && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">GenFox.AI</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Traditional SaaS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition">
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.genfox ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.saas ? (
                        <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
