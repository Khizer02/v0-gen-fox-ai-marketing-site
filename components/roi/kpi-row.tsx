"use client"

import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign, Percent } from "lucide-react"
import { useState } from "react"

interface KPIRowProps {
  calculations: ROICalculations
}

export function KPIRow({ calculations }: KPIRowProps) {
  const [showFormulas, setShowFormulas] = useState<string | null>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatWeeks = (value: number) => {
    if (value === Number.POSITIVE_INFINITY || value < 0) return "N/A"
    return `${value.toFixed(1)} weeks`
  }

  const formatPercent = (value: number) => {
    return `${(value * 100).toFixed(1)}%`
  }

  const kpis = [
    {
      id: "net-savings",
      label: "Year-1 Net Savings",
      value: formatCurrency(calculations.net_savings_y1),
      icon: DollarSign,
      formula: "Risk-Adjusted Benefits - Risk-Adjusted Costs",
      color: "text-green-500",
    },
    {
      id: "payback",
      label: "Payback Period",
      value: formatWeeks(calculations.payback_weeks),
      icon: Clock,
      formula: "One-Time Build Cost / (Annual Net Savings / 52)",
      color: "text-blue-500",
    },
    {
      id: "npv",
      label: "3-Year NPV",
      value: formatCurrency(calculations.npv_3year),
      icon: TrendingUp,
      formula: "Sum of discounted annual net benefits over 3 years",
      color: "text-purple-500",
    },
    {
      id: "roi",
      label: "3-Year ROI",
      value: formatPercent(calculations.roi_3year / 100),
      icon: Percent,
      formula: "(3-Year NPV / Total Costs) × 100",
      color: "text-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <div
            key={kpi.id}
            className="relative"
            onMouseEnter={() => setShowFormulas(kpi.id)}
            onMouseLeave={() => setShowFormulas(null)}
          >
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors cursor-help h-full">
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                <Icon className={`${kpi.color} w-5 h-5`} />
              </div>
              <p className="text-2xl font-bold text-primary">{kpi.value}</p>

              {showFormulas === kpi.id && (
                <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-muted border border-border rounded-lg z-10 text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Formula:</p>
                  <p>{kpi.formula}</p>
                </div>
              )}
            </Card>
          </div>
        )
      })}
    </div>
  )
}
