"use client"

import type { ROIInputs } from "@/hooks/use-roi-state"
import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

interface ChartSectionProps {
  inputs: ROIInputs
  calculations: ROICalculations
}

export function ChartSection({ inputs, calculations }: ChartSectionProps) {
  const tcoData = [
    {
      year: "Year 1",
      "Build-to-Own": calculations.tco_buildown[0] || 0,
      SaaS: calculations.tco_saas[0] || 0,
    },
    {
      year: "Year 2",
      "Build-to-Own": (calculations.tco_buildown[0] || 0) + (calculations.tco_buildown[1] || 0),
      SaaS: (calculations.tco_saas[0] || 0) + (calculations.tco_saas[1] || 0),
    },
    {
      year: "Year 3",
      "Build-to-Own":
        (calculations.tco_buildown[0] || 0) + (calculations.tco_buildown[1] || 0) + (calculations.tco_buildown[2] || 0),
      SaaS: (calculations.tco_saas[0] || 0) + (calculations.tco_saas[1] || 0) + (calculations.tco_saas[2] || 0),
    },
  ]

  const laborData = [
    {
      year: "Year 1",
      baseline: calculations.labor_hours_baseline[0] || 0,
      "Post-AI": calculations.labor_hours_after[0] || 0,
      "Realized Value": calculations.realized_value[0] || 0,
    },
    {
      year: "Year 2",
      baseline: calculations.labor_hours_baseline[1] || 0,
      "Post-AI": calculations.labor_hours_after[1] || 0,
      "Realized Value": calculations.realized_value[1] || 0,
    },
    {
      year: "Year 3",
      baseline: calculations.labor_hours_baseline[2] || 0,
      "Post-AI": calculations.labor_hours_after[2] || 0,
      "Realized Value": calculations.realized_value[2] || 0,
    },
  ]

  const formatCurrency = (value: number) => {
    return `$${(value / 1000).toFixed(0)}k`
  }

  return (
    <div className="space-y-8 mb-8">
      {/* TCO Comparison */}
      {inputs.include_saas_comparison && (
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Cumulative TCO: Build-to-Own vs SaaS (3-Year)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tcoData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" tickFormatter={formatCurrency} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                formatter={(value) => formatCurrency(value as number)}
              />
              <Legend />
              <Bar dataKey="Build-to-Own" fill="var(--primary)" />
              <Bar dataKey="SaaS" fill="var(--muted)" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-4">
            Cumulative costs over 3 years. Build-to-Own shows one-time build cost + ongoing infrastructure.
          </p>
        </Card>
      )}

      {/* Labor Hours */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Labor Hours: Baseline vs Post-AI</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={laborData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="baseline" fill="var(--muted)" name="Baseline Hours" />
            <Bar dataKey="Post-AI" fill="var(--primary)" name="Post-AI Hours" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-muted-foreground mt-4">
          Shows ticket volume reduction through deflection and cycle time improvement.
        </p>
      </Card>

      {/* Realized Value Trend */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Realized Value Trend (3-Year)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={laborData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" tickFormatter={formatCurrency} />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              formatter={(value) => formatCurrency(value as number)}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Realized Value"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ fill: "var(--primary)" }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-muted-foreground mt-4">
          Annual realized value from labor savings after productivity recapture adjustment.
        </p>
      </Card>
    </div>
  )
}
