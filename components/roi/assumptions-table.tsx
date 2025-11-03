"use client"

import type { ROIInputs } from "@/hooks/use-roi-state"
import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AssumptionsTableProps {
  inputs: ROIInputs
  calculations: ROICalculations
}

export function AssumptionsTable({ inputs, calculations }: AssumptionsTableProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("inputs")

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatPercent = (value: number) => {
    return `${(value * 100).toFixed(1)}%`
  }

  const sections = [
    {
      id: "inputs",
      title: "Input Assumptions",
      rows: [
        { label: "Function", value: inputs.function || "N/A" },
        { label: "Monthly Tickets", value: inputs.monthly_tickets },
        { label: "Average Handle Time", value: `${inputs.AHT_minutes} min` },
        { label: "Deflection Rate", value: formatPercent(inputs.deflection_percent) },
        { label: "Cycle Time Improvement", value: formatPercent(inputs.cycle_time_improvement_percent) },
        { label: "FTE Cost (Annual)", value: formatCurrency(inputs.FTE_cost_annual) },
        { label: "Productivity Recapture", value: formatPercent(inputs.productivity_recapture_percent) },
      ],
    },
    {
      id: "costs",
      title: "Cost Assumptions",
      rows: [
        { label: "One-Time Build Cost", value: formatCurrency(inputs.one_time_build_cost) },
        { label: "Monthly Infrastructure Cost", value: formatCurrency(inputs.monthly_infra_cost) },
        { label: "Annual Support & Maintenance", value: formatCurrency(inputs.annual_support_maint) },
        { label: "Year-1 Total Build TCO", value: formatCurrency(calculations.build_TCO_y1) },
      ],
    },
    {
      id: "risk",
      title: "Risk Profile",
      rows: [
        { label: "Risk Profile", value: inputs.risk_profile.charAt(0).toUpperCase() + inputs.risk_profile.slice(1) },
        { label: "Benefit Risk Adjustment", value: formatPercent(calculations.benefit_risk) },
        { label: "Cost Risk Adjustment", value: formatPercent(calculations.cost_risk) },
      ],
    },
  ]

  if (inputs.include_saas_comparison) {
    sections.push({
      id: "saas",
      title: "SaaS Comparison",
      rows: [
        { label: "Monthly SaaS Cost", value: formatCurrency(inputs.monthly_saas_cost) },
        { label: "Onboarding Fees", value: formatCurrency(inputs.onboarding_fees) },
        { label: "Year-1 Total SaaS TCO", value: formatCurrency(calculations.saas_TCO_y1) },
      ],
    })
  }

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Inputs & Assumptions</h3>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border border-border rounded-lg">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ChevronDown
                size={18}
                className={`text-muted-foreground transition-transform ${
                  expandedSection === section.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedSection === section.id && (
              <div className="border-t border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {section.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-border hover:bg-muted/50 ${
                          idx === section.rows.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <td className="py-3 px-4 text-foreground">{row.label}</td>
                        <td className="text-right py-3 px-4 text-foreground font-semibold">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-xs text-muted-foreground">
          All calculations are deterministic and performed client-side. Data persists in your browser. Hover over KPIs
          to see formulas.
        </p>
      </div>
    </Card>
  )
}
