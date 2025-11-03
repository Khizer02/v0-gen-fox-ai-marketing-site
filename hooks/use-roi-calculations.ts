"use client"

import { useMemo } from "react"
import type { ROIInputs } from "./use-roi-state"

export interface ROICalculations {
  // Year 1 Metrics
  tickets_year: number
  hours_baseline: number
  FTE_cost_hr: number
  labor_baseline: number
  deflected: number
  residual: number
  new_AHT: number
  hours_after: number
  labor_after: number
  labor_time_saved: number
  realized_labor_value: number
  quality_benefit: number
  build_TCO_y1: number
  saas_TCO_y1: number
  benefits_y1: number
  risk_adj_benefits_y1: number
  risk_adj_costs_y1: number
  net_savings_y1: number
  payback_weeks: number

  // Multi-year
  npv_3year: number
  roi_3year: number
  tco_buildown: number[]
  tco_saas: number[]
  labor_hours_baseline: number[]
  labor_hours_after: number[]
  realized_value: number[]

  // Risk adjustments
  benefit_risk: number
  cost_risk: number
}

export function useROICalculations(inputs: ROIInputs): ROICalculations {
  return useMemo(() => {
    // Year 1 Calculations
    const tickets_year = inputs.monthly_tickets * 12
    const hours_baseline = (tickets_year * inputs.AHT_minutes) / 60

    // FTE Cost per hour
    let FTE_cost_hr = inputs.FTE_cost_hourly
    if (inputs.FTE_cost_type === "annual") {
      FTE_cost_hr = inputs.FTE_cost_annual / inputs.effective_hours_per_year
    }

    const labor_baseline = hours_baseline * FTE_cost_hr
    const deflected = tickets_year * inputs.deflection_percent
    const residual = tickets_year - deflected
    const new_AHT = inputs.AHT_minutes * (1 - inputs.cycle_time_improvement_percent)
    const hours_after = (residual * new_AHT) / 60
    const labor_after = hours_after * FTE_cost_hr
    const labor_time_saved = hours_baseline - hours_after
    const realized_labor_value = labor_time_saved * FTE_cost_hr * inputs.productivity_recapture_percent

    // Quality benefit
    let quality_benefit = 0
    if (inputs.rework_rate_percent > 0) {
      quality_benefit = inputs.rework_rate_percent * FTE_cost_hr * 12
    } else if (inputs.rework_hours_month > 0) {
      quality_benefit = inputs.rework_hours_month * FTE_cost_hr * 12
    }

    // TCO Calculations
    const build_TCO_y1 = inputs.one_time_build_cost + inputs.monthly_infra_cost * 12 + inputs.annual_support_maint
    const saas_TCO_y1 = inputs.include_saas_comparison ? inputs.monthly_saas_cost * 12 + inputs.onboarding_fees : 0

    // Benefits
    const benefits_y1 = realized_labor_value + quality_benefit

    // Risk adjustments
    const riskMap = {
      conservative: { benefit_risk: 0.75, cost_risk: 1.15 },
      standard: { benefit_risk: 0.85, cost_risk: 1.1 },
      aggressive: { benefit_risk: 0.95, cost_risk: 1.05 },
    }

    const { benefit_risk, cost_risk } = riskMap[inputs.risk_profile]
    const risk_adj_benefits_y1 = benefits_y1 * benefit_risk
    const risk_adj_costs_y1 = build_TCO_y1 * cost_risk
    const net_savings_y1 = risk_adj_benefits_y1 - risk_adj_costs_y1
    const payback_weeks = inputs.one_time_build_cost > 0 ? inputs.one_time_build_cost / (net_savings_y1 / 52) : 0

    // Multi-year calculations
    const tco_buildown: number[] = []
    const tco_saas: number[] = []
    const labor_hours_baseline: number[] = []
    const labor_hours_after: number[] = []
    const realized_value: number[] = []

    let cumulative_npv = 0
    let cumulative_costs = 0

    for (let year = 1; year <= Math.ceil(inputs.horizon_months / 12); year++) {
      // Ticket growth
      const tickets_year_n = tickets_year * Math.pow(1 + inputs.ticket_growth_percent, year - 1)

      // Infrastructure growth
      const infra_cost_n = inputs.monthly_infra_cost * Math.pow(1 + inputs.infra_growth_percent, year - 1) * 12

      // Build-to-Own TCO
      const build_tco_n =
        year === 1
          ? inputs.one_time_build_cost + infra_cost_n + inputs.annual_support_maint
          : infra_cost_n + inputs.annual_support_maint
      tco_buildown.push(build_tco_n)

      // SaaS TCO
      if (inputs.include_saas_comparison) {
        const saas_tco_n = inputs.monthly_saas_cost * Math.pow(1 + inputs.ticket_growth_percent, year - 1) * 12
        tco_saas.push(saas_tco_n)
      }

      // Labor calculations
      const hours_baseline_n = (tickets_year_n * inputs.AHT_minutes) / 60
      const deflected_n = tickets_year_n * inputs.deflection_percent
      const residual_n = tickets_year_n - deflected_n
      const hours_after_n = (residual_n * new_AHT) / 60

      labor_hours_baseline.push(hours_baseline_n)
      labor_hours_after.push(hours_after_n)

      // Realized value with compounding
      const labor_time_saved_n = hours_baseline_n - hours_after_n
      const realized_value_n =
        labor_time_saved_n *
        FTE_cost_hr *
        inputs.productivity_recapture_percent *
        Math.pow(1 + inputs.benefit_compounding_percent, year - 1)
      realized_value.push(realized_value_n)

      // NPV calculation
      const discount_factor = Math.pow(1 + inputs.discount_rate, year - 1)
      cumulative_npv += (realized_value_n - build_tco_n) / discount_factor
      cumulative_costs += build_tco_n / discount_factor
    }

    const npv_3year = cumulative_npv
    const roi_3year = cumulative_costs > 0 ? (cumulative_npv / cumulative_costs) * 100 : 0

    const tco_buildown_3yr = tco_buildown.slice(0, 3)
    const tco_saas_3yr = tco_saas.slice(0, 3)

    return {
      tickets_year,
      hours_baseline,
      FTE_cost_hr,
      labor_baseline,
      deflected,
      residual,
      new_AHT,
      hours_after,
      labor_after,
      labor_time_saved,
      realized_labor_value,
      quality_benefit,
      build_TCO_y1,
      saas_TCO_y1,
      benefits_y1,
      risk_adj_benefits_y1,
      risk_adj_costs_y1,
      net_savings_y1,
      payback_weeks,
      npv_3year,
      roi_3year,
      tco_buildown: tco_buildown_3yr,
      tco_saas: tco_saas_3yr,
      labor_hours_baseline: labor_hours_baseline.slice(0, 3),
      labor_hours_after: labor_hours_after.slice(0, 3),
      realized_value: realized_value.slice(0, 3),
      benefit_risk,
      cost_risk,
    }
  }, [inputs])
}
