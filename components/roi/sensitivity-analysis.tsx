"use client"

import type { ROIInputs } from "@/hooks/use-roi-state"
import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useState } from "react"

interface SensitivityAnalysisProps {
  inputs: ROIInputs
  calculations: ROICalculations
}

export function SensitivityAnalysis({ inputs, calculations }: SensitivityAnalysisProps) {
  const [selectedVariable, setSelectedVariable] = useState<"deflection" | "productivity">("deflection")

  const calculateSensitivity = () => {
    const baselineNPV = calculations.npv_3year

    // Deflection sensitivity: -20% to +20%
    const deflectionVariations = []
    for (let i = -0.2; i <= 0.2; i += 0.1) {
      const adjustedDeflection = Math.max(0, Math.min(0.8, inputs.deflection_percent + i))
      const impact =
        (adjustedDeflection - inputs.deflection_percent) *
        inputs.monthly_tickets *
        12 *
        (inputs.AHT_minutes / 60) *
        (inputs.FTE_cost_annual / 1600)
      deflectionVariations.push({
        label: `${((adjustedDeflection - inputs.deflection_percent) * 100).toFixed(0)}%`,
        value: baselineNPV + impact,
        impact: impact,
      })
    }

    // Productivity recapture sensitivity: -20% to +20%
    const productivityVariations = []
    for (let i = -0.1; i <= 0.1; i += 0.05) {
      const adjustedProductivity = Math.max(0.25, Math.min(0.5, inputs.productivity_recapture_percent + i))
      const impact =
        (adjustedProductivity - inputs.productivity_recapture_percent) *
        calculations.labor_time_saved *
        (inputs.FTE_cost_annual / 1600) *
        3
      productivityVariations.push({
        label: `${((adjustedProductivity - inputs.productivity_recapture_percent) * 100).toFixed(0)}%`,
        value: baselineNPV + impact,
        impact: impact,
      })
    }

    return { deflectionVariations, productivityVariations }
  }

  const { deflectionVariations, productivityVariations } = calculateSensitivity()
  const data = selectedVariable === "deflection" ? deflectionVariations : productivityVariations

  const formatCurrency = (value: number) => {
    return `$${(value / 1000).toFixed(0)}k`
  }

  return (
    <Card className="p-6 bg-card border-border mb-8">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Sensitivity Analysis (Tornado)</h3>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedVariable("deflection")}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            selectedVariable === "deflection"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background border-border hover:border-primary"
          }`}
        >
          Deflection Rate Impact
        </button>
        <button
          onClick={() => setSelectedVariable("productivity")}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            selectedVariable === "productivity"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background border-border hover:border-primary"
          }`}
        >
          Productivity Recapture Impact
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis type="number" stroke="var(--muted-foreground)" tickFormatter={formatCurrency} />
          <YAxis dataKey="label" type="category" stroke="var(--muted-foreground)" width={80} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
            formatter={(value) => formatCurrency(value as number)}
          />
          <Bar dataKey="value" fill="var(--primary)" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Sensitivity Analysis:</span> Shows how changes in key
          assumptions impact your 3-year NPV. Each bar represents a ±10-20% variation from your baseline assumption.
        </p>
      </div>
    </Card>
  )
}
