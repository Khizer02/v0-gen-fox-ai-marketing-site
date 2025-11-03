"use client"

import type { ROIInputs } from "@/hooks/use-roi-state"
import type { ROICalculations } from "@/hooks/use-roi-calculations"
import { KPIRow } from "./kpi-row"
import { ChartSection } from "./chart-section"
import { AssumptionsTable } from "./assumptions-table"
import { DetailedMetrics } from "./detailed-metrics"
import { SensitivityAnalysis } from "./sensitivity-analysis"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { usePDFExport } from "@/hooks/use-pdf-export"
import { useState } from "react"

interface ROICanvasProps {
  inputs: ROIInputs
  calculations: ROICalculations
}

export function ROICanvas({ inputs, calculations }: ROICanvasProps) {
  const { generatePDF } = usePDFExport()
  const [isExporting, setIsExporting] = useState(false)

  const handleExportPDF = async () => {
    setIsExporting(true)
    try {
      await generatePDF(inputs, calculations)
    } catch (error) {
      console.error("Failed to export PDF:", error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="p-8 bg-background">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Your ROI</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {inputs.function ? `${inputs.function} Function` : "ROI Analysis"}
          </p>
        </div>
        <Button onClick={handleExportPDF} disabled={isExporting} className="gap-2">
          <Download size={18} />
          {isExporting ? "Exporting..." : "Export PDF"}
        </Button>
      </div>

      {/* KPIs */}
      <KPIRow calculations={calculations} />

      {/* Detailed Metrics */}
      <DetailedMetrics calculations={calculations} />

      {/* Charts */}
      <ChartSection inputs={inputs} calculations={calculations} />

      {/* Sensitivity Analysis */}
      <SensitivityAnalysis inputs={inputs} calculations={calculations} />

      {/* Assumptions Table */}
      <AssumptionsTable inputs={inputs} calculations={calculations} />
    </div>
  )
}
