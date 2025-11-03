"use client"

import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { Card } from "@/components/ui/card"

interface DetailedMetricsProps {
  calculations: ROICalculations
}

export function DetailedMetrics({ calculations }: DetailedMetricsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const formatHours = (value: number) => {
    return `${value.toLocaleString("en-US", { maximumFractionDigits: 0 })} hrs`
  }

  const formatPercent = (value: number) => {
    return `${(value * 100).toFixed(1)}%`
  }

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Baseline Labor Cost (Year 1)</p>
        <p className="text-xl font-bold text-foreground">{formatCurrency(calculations.labor_baseline)}</p>
        <p className="text-xs text-muted-foreground mt-2">{formatHours(calculations.hours_baseline)}</p>
      </Card>

      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Post-AI Labor Cost (Year 1)</p>
        <p className="text-xl font-bold text-foreground">{formatCurrency(calculations.labor_after)}</p>
        <p className="text-xs text-muted-foreground mt-2">{formatHours(calculations.hours_after)}</p>
      </Card>

      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Labor Time Saved</p>
        <p className="text-xl font-bold text-primary">{formatHours(calculations.labor_time_saved)}</p>
        <p className="text-xs text-muted-foreground mt-2">
          {formatPercent(calculations.labor_time_saved / calculations.hours_baseline)}
        </p>
      </Card>

      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Realized Labor Value</p>
        <p className="text-xl font-bold text-primary">{formatCurrency(calculations.realized_labor_value)}</p>
        <p className="text-xs text-muted-foreground mt-2">After productivity recapture</p>
      </Card>

      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Quality Benefit</p>
        <p className="text-xl font-bold text-primary">{formatCurrency(calculations.quality_benefit)}</p>
        <p className="text-xs text-muted-foreground mt-2">From rework reduction</p>
      </Card>

      <Card className="p-6 bg-card border-border">
        <p className="text-sm text-muted-foreground mb-2">Total Year-1 Benefits</p>
        <p className="text-xl font-bold text-primary">{formatCurrency(calculations.benefits_y1)}</p>
        <p className="text-xs text-muted-foreground mt-2">Before risk adjustment</p>
      </Card>
    </div>
  )
}
