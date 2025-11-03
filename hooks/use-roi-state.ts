"use client"

import { useState, useCallback, useEffect } from "react"

export interface ROIInputs {
  // Function & Volume
  function: "HR" | "IT Service Desk" | "Payroll" | "Finance Ops" | null
  monthly_tickets: number
  AHT_minutes: number
  fcr_percent: number
  rework_rate_percent: number
  rework_hours_month: number
  deflection_percent: number
  cycle_time_improvement_percent: number

  // Costs
  FTE_cost_type: "hourly" | "annual"
  FTE_cost_hourly: number
  FTE_cost_annual: number
  effective_hours_per_year: number
  one_time_build_cost: number
  monthly_infra_cost: number
  annual_support_maint: number

  // SaaS Comparison
  include_saas_comparison: boolean
  monthly_saas_cost: number
  onboarding_fees: number

  // Advanced
  productivity_recapture_percent: number
  risk_profile: "conservative" | "standard" | "aggressive"
  horizon_months: number
  discount_rate: number
  ticket_growth_percent: number
  infra_growth_percent: number
  benefit_compounding_percent: number

  // Contact
  email: string
}

export interface ROIState {
  inputs: ROIInputs
  currentStep: number
  completed: boolean
}

const DEFAULT_INPUTS: ROIInputs = {
  function: null,
  monthly_tickets: 0,
  AHT_minutes: 0,
  fcr_percent: 0,
  rework_rate_percent: 0,
  rework_hours_month: 0,
  deflection_percent: 0.35,
  cycle_time_improvement_percent: 0.2,
  FTE_cost_type: "annual",
  FTE_cost_hourly: 0,
  FTE_cost_annual: 65000,
  effective_hours_per_year: 1600,
  one_time_build_cost: 0,
  monthly_infra_cost: 0,
  annual_support_maint: 0,
  include_saas_comparison: false,
  monthly_saas_cost: 0,
  onboarding_fees: 0,
  productivity_recapture_percent: 0.3,
  risk_profile: "standard",
  horizon_months: 36,
  discount_rate: 0.1,
  ticket_growth_percent: 0,
  infra_growth_percent: 0,
  benefit_compounding_percent: 0,
  email: "",
}

export function useROIState() {
  const [state, setState] = useState<ROIState>({
    inputs: DEFAULT_INPUTS,
    currentStep: 0,
    completed: false,
  })

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("roi-calculator-state")
    if (saved) {
      try {
        setState(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to load saved state:", e)
      }
    }
  }, [])

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("roi-calculator-state", JSON.stringify(state))
  }, [state])

  const updateInput = useCallback((key: keyof ROIInputs, value: any) => {
    setState((prev) => ({
      ...prev,
      inputs: {
        ...prev.inputs,
        [key]: value,
      },
    }))
  }, [])

  const resetState = useCallback(() => {
    setState({
      inputs: DEFAULT_INPUTS,
      currentStep: 0,
      completed: false,
    })
    localStorage.removeItem("roi-calculator-state")
  }, [])

  return { state, updateInput, resetState }
}
