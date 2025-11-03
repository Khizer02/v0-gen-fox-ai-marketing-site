"use client"
import { ROICalculator } from "@/components/roi/roi-calculator"
import { useROIState } from "@/hooks/use-roi-state"

export default function ROIPage() {
  const { state, updateInput, resetState } = useROIState()

  return (
    <div className="min-h-screen bg-background">
      <ROICalculator state={state} onUpdateInput={updateInput} onReset={resetState} />
    </div>
  )
}
