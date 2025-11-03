"use client"

import { useState } from "react"
import type { ROIInputs, ROIState } from "@/hooks/use-roi-state"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { HelpCircle, Settings } from "lucide-react"

interface ChatIntakeProps {
  state: ROIState
  onUpdateInput: (key: keyof ROIInputs, value: any) => void
  onReset: () => void
}

const QUESTIONS = [
  {
    id: "function",
    label: "What function are you optimizing?",
    type: "select",
    options: ["HR", "IT Service Desk", "Payroll", "Finance Ops"],
    key: "function",
    tooltip: "Select the business function you want to automate with GenFox AI",
  },
  {
    id: "monthly_tickets",
    label: "Monthly tickets/requests handled?",
    type: "number",
    key: "monthly_tickets",
    tooltip: "Total number of tickets or requests processed monthly",
  },
  {
    id: "AHT_minutes",
    label: "Average Handle Time (minutes)?",
    type: "number",
    key: "AHT_minutes",
    tooltip: "Average time to resolve one ticket (in minutes)",
  },
  {
    id: "fcr_percent",
    label: "First Contact Resolution Rate (%)? (optional)",
    type: "number",
    key: "fcr_percent",
    tooltip: "Percentage of tickets resolved on first contact",
  },
  {
    id: "rework_rate_percent",
    label: "Rework Rate (%) or Rework Hours/Month? (optional)",
    type: "number",
    key: "rework_rate_percent",
    tooltip: "Percentage of tickets requiring rework",
  },
  {
    id: "deflection_percent",
    label: "Deflection Rate (0-0.8, default 0.35)?",
    type: "slider",
    min: 0,
    max: 0.8,
    step: 0.05,
    key: "deflection_percent",
    tooltip: "Percentage of tickets AI will handle (TEI case upper bound: 70%)",
  },
  {
    id: "cycle_time_improvement_percent",
    label: "Cycle Time Improvement (0-0.6, default 0.2)?",
    type: "slider",
    min: 0,
    max: 0.6,
    step: 0.05,
    key: "cycle_time_improvement_percent",
    tooltip: "Expected reduction in time per ticket",
  },
  {
    id: "FTE_cost_type",
    label: "FTE Cost: Hourly or Annual?",
    type: "select",
    options: ["hourly", "annual"],
    key: "FTE_cost_type",
    tooltip: "How you want to specify employee cost",
  },
  {
    id: "FTE_cost_annual",
    label: "Annual FTE Cost ($)?",
    type: "number",
    key: "FTE_cost_annual",
    tooltip: "Fully-loaded annual cost per FTE",
  },
  {
    id: "one_time_build_cost",
    label: "One-Time Build Cost ($)?",
    type: "number",
    key: "one_time_build_cost",
    tooltip: "Initial investment to build and deploy the AI agent",
  },
  {
    id: "monthly_infra_cost",
    label: "Monthly Infrastructure Cost ($)?",
    type: "number",
    key: "monthly_infra_cost",
    tooltip: "Ongoing monthly cost for hosting and maintenance",
  },
  {
    id: "include_saas_comparison",
    label: "Compare with SaaS?",
    type: "select",
    options: ["yes", "no"],
    key: "include_saas_comparison",
    tooltip: "Show comparison with traditional SaaS solutions",
  },
  {
    id: "productivity_recapture_percent",
    label: "Productivity Recapture (0.25-0.50, default 0.30)?",
    type: "slider",
    min: 0.25,
    max: 0.5,
    step: 0.05,
    key: "productivity_recapture_percent",
    tooltip: "Percentage of time savings that can be reallocated to value-add work",
  },
  {
    id: "risk_profile",
    label: "Risk Profile?",
    type: "select",
    options: ["conservative", "standard", "aggressive"],
    key: "risk_profile",
    tooltip:
      "Conservative: 75% benefit, 115% cost | Standard: 85% benefit, 110% cost | Aggressive: 95% benefit, 105% cost",
  },
  {
    id: "email",
    label: "Email for PDF report?",
    type: "email",
    key: "email",
    tooltip: "We'll send your ROI report to this email",
  },
]

export function ChatIntake({ state, onUpdateInput, onReset }: ChatIntakeProps) {
  const [localStep, setLocalStep] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const currentQuestion = QUESTIONS[localStep]
  const inputs = state.inputs

  const handleNext = () => {
    if (localStep < QUESTIONS.length - 1) {
      setLocalStep(localStep + 1)
      setShowTooltip(false)
    }
  }

  const handlePrevious = () => {
    if (localStep > 0) {
      setLocalStep(localStep - 1)
      setShowTooltip(false)
    }
  }

  const handleInputChange = (value: any) => {
    const key = currentQuestion.key as keyof ROIInputs
    if (currentQuestion.type === "select" && currentQuestion.id === "include_saas_comparison") {
      onUpdateInput(key, value === "yes")
    } else if (currentQuestion.type === "select" && currentQuestion.id === "FTE_cost_type") {
      onUpdateInput(key, value)
    } else if (currentQuestion.type === "select" && currentQuestion.id === "risk_profile") {
      onUpdateInput(key, value)
    } else if (currentQuestion.type === "number") {
      onUpdateInput(key, Number.parseFloat(value) || 0)
    } else if (currentQuestion.type === "slider") {
      onUpdateInput(key, value)
    } else {
      onUpdateInput(key, value)
    }
  }

  const getInputValue = () => {
    const key = currentQuestion.key as keyof ROIInputs
    const value = inputs[key]
    if (currentQuestion.id === "include_saas_comparison") {
      return value ? "yes" : "no"
    }
    return value
  }

  return (
    <div className="flex flex-col h-full p-8 bg-card">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">ROI Agent</h2>
            <p className="text-sm text-muted-foreground mt-1">Answer a few questions to calculate your ROI</p>
          </div>
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            title="Advanced settings"
          >
            <Settings size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Advanced Settings Panel */}
        {showAdvanced && (
          <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border space-y-4">
            <h3 className="font-semibold text-foreground">Advanced Settings</h3>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Effective Hours per Year (default: 1600)</Label>
              <Input
                type="number"
                value={inputs.effective_hours_per_year}
                onChange={(e) => onUpdateInput("effective_hours_per_year", Number.parseFloat(e.target.value) || 1600)}
                className="text-sm"
              />
            </div>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Annual Support & Maintenance ($)</Label>
              <Input
                type="number"
                value={inputs.annual_support_maint}
                onChange={(e) => onUpdateInput("annual_support_maint", Number.parseFloat(e.target.value) || 0)}
                className="text-sm"
              />
            </div>

            {inputs.include_saas_comparison && (
              <>
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Monthly SaaS Cost ($)</Label>
                  <Input
                    type="number"
                    value={inputs.monthly_saas_cost}
                    onChange={(e) => onUpdateInput("monthly_saas_cost", Number.parseFloat(e.target.value) || 0)}
                    className="text-sm"
                  />
                </div>

                <div>
                  <Label className="text-sm text-foreground mb-2 block">SaaS Onboarding Fees ($)</Label>
                  <Input
                    type="number"
                    value={inputs.onboarding_fees}
                    onChange={(e) => onUpdateInput("onboarding_fees", Number.parseFloat(e.target.value) || 0)}
                    className="text-sm"
                  />
                </div>
              </>
            )}

            <div>
              <Label className="text-sm text-foreground mb-2 block">Analysis Horizon (months, default: 36)</Label>
              <Input
                type="number"
                value={inputs.horizon_months}
                onChange={(e) => onUpdateInput("horizon_months", Number.parseFloat(e.target.value) || 36)}
                className="text-sm"
              />
            </div>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Discount Rate (default: 0.10)</Label>
              <Input
                type="number"
                step="0.01"
                value={inputs.discount_rate}
                onChange={(e) => onUpdateInput("discount_rate", Number.parseFloat(e.target.value) || 0.1)}
                className="text-sm"
              />
            </div>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Annual Ticket Growth % (default: 0)</Label>
              <Input
                type="number"
                step="0.01"
                value={inputs.ticket_growth_percent}
                onChange={(e) => onUpdateInput("ticket_growth_percent", Number.parseFloat(e.target.value) || 0)}
                className="text-sm"
              />
            </div>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Annual Infrastructure Growth % (default: 0)</Label>
              <Input
                type="number"
                step="0.01"
                value={inputs.infra_growth_percent}
                onChange={(e) => onUpdateInput("infra_growth_percent", Number.parseFloat(e.target.value) || 0)}
                className="text-sm"
              />
            </div>

            <div>
              <Label className="text-sm text-foreground mb-2 block">Benefit Compounding % (default: 0)</Label>
              <Input
                type="number"
                step="0.01"
                value={inputs.benefit_compounding_percent}
                onChange={(e) => onUpdateInput("benefit_compounding_percent", Number.parseFloat(e.target.value) || 0)}
                className="text-sm"
              />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Label className="text-lg font-semibold text-foreground">{currentQuestion.label}</Label>
              <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <HelpCircle size={18} />
              </button>
            </div>

            {showTooltip && currentQuestion.tooltip && (
              <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">{currentQuestion.tooltip}</p>
              </div>
            )}

            {currentQuestion.type === "select" ? (
              <div className="space-y-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleInputChange(option)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      getInputValue() === option
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            ) : currentQuestion.type === "slider" ? (
              <div className="space-y-4">
                <Slider
                  value={[getInputValue() as number]}
                  onValueChange={(value) => handleInputChange(value[0])}
                  min={currentQuestion.min}
                  max={currentQuestion.max}
                  step={currentQuestion.step}
                  className="w-full"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {currentQuestion.min} - {currentQuestion.max}
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    {((getInputValue() as number) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ) : (
              <Input
                type={currentQuestion.type}
                value={getInputValue()}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter value..."
                className="text-lg p-3"
              />
            )}
          </div>

          {/* Progress indicator */}
          <div className="mt-8">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((localStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Question {localStep + 1} of {QUESTIONS.length}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        <Button onClick={handlePrevious} disabled={localStep === 0} variant="outline" className="flex-1 bg-transparent">
          Previous
        </Button>
        <Button onClick={handleNext} disabled={localStep === QUESTIONS.length - 1} className="flex-1">
          Next
        </Button>
        <Button onClick={onReset} variant="ghost" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  )
}
