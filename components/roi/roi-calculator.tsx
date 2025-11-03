"use client"

import type { ROIInputs, ROIState } from "@/hooks/use-roi-state"
import { ChatIntake } from "./chat-intake"
import { ROICanvas } from "./roi-canvas"
import { useROICalculations } from "@/hooks/use-roi-calculations"

interface ROICalculatorProps {
  state: ROIState
  onUpdateInput: (key: keyof ROIInputs, value: any) => void
  onReset: () => void
}

export function ROICalculator({ state, onUpdateInput, onReset }: ROICalculatorProps) {
  const calculations = useROICalculations(state.inputs)

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel: Chat Intake */}
      <div className="w-1/2 border-r border-border overflow-y-auto">
        <ChatIntake state={state} onUpdateInput={onUpdateInput} onReset={onReset} />
      </div>

      {/* Right Panel: ROI Canvas */}
      <div className="w-1/2 overflow-y-auto">
        <ROICanvas inputs={state.inputs} calculations={calculations} />
      </div>
    </div>
  )
}
