"use client"

import type { ROIInputs } from "./use-roi-state"
import type { ROICalculations } from "./use-roi-calculations"

export function usePDFExport() {
  const generatePDF = async (inputs: ROIInputs, calculations: ROICalculations) => {
    // Dynamic import to avoid SSR issues
    const html2pdf = (await import("html2pdf.js")).default

    const element = document.createElement("div")
    element.innerHTML = generatePDFContent(inputs, calculations)

    const opt = {
      margin: 10,
      filename: `GenFox-ROI-Report-${new Date().toISOString().split("T")[0]}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    }

    html2pdf().set(opt).from(element).save()
  }

  const generatePDFContent = (inputs: ROIInputs, calculations: ROICalculations) => {
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(value)
    }

    const formatPercent = (value: number) => {
      return `${(value * 100).toFixed(1)}%`
    }

    const formatHours = (value: number) => {
      return `${value.toLocaleString("en-US", { maximumFractionDigits: 0 })} hrs`
    }

    return `
      <div style="font-family: Arial, sans-serif; color: #1a1a2e; line-height: 1.6;">
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #FF6B35; padding-bottom: 20px;">
          <h1 style="color: #FF6B35; margin: 0;">GenFox AI ROI Report</h1>
          <p style="color: #666; margin: 10px 0 0 0;">Generated on ${new Date().toLocaleDateString()}</p>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #1a1a2e; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Executive Summary</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 12px;">Year-1 Net Savings</p>
              <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #FF6B35;">
                ${formatCurrency(calculations.net_savings_y1)}
              </p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 12px;">Payback Period</p>
              <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #FF6B35;">
                ${calculations.payback_weeks > 0 ? `${calculations.payback_weeks.toFixed(1)} weeks` : "N/A"}
              </p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 12px;">3-Year NPV</p>
              <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #FF6B35;">
                ${formatCurrency(calculations.npv_3year)}
              </p>
            </div>
            <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 12px;">3-Year ROI</p>
              <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #FF6B35;">
                ${formatPercent(calculations.roi_3year / 100)}
              </p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #1a1a2e; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Key Metrics</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Metric</td>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; text-align: right;">Value</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Baseline Labor Cost (Year 1)</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(calculations.labor_baseline)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">Post-AI Labor Cost (Year 1)</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(calculations.labor_after)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Labor Time Saved</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatHours(calculations.labor_time_saved)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">Realized Labor Value</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(calculations.realized_labor_value)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Quality Benefit</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(calculations.quality_benefit)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">Year-1 Build TCO</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(calculations.build_TCO_y1)}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 30px;">
          <h2 style="color: #1a1a2e; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Input Assumptions</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Assumption</td>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; text-align: right;">Value</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Function</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${inputs.function || "N/A"}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">Monthly Tickets</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${inputs.monthly_tickets}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Average Handle Time</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${inputs.AHT_minutes} min</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">Deflection Rate</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatPercent(inputs.deflection_percent)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Cycle Time Improvement</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatPercent(inputs.cycle_time_improvement_percent)}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; border: 1px solid #ddd;">FTE Cost (Annual)</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${formatCurrency(inputs.FTE_cost_annual)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">Risk Profile</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${inputs.risk_profile.charAt(0).toUpperCase() + inputs.risk_profile.slice(1)}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #FF6B35; text-align: center; color: #666; font-size: 12px;">
          <p style="margin: 0;">This ROI report was generated by GenFox AI ROI Calculator.</p>
          <p style="margin: 5px 0 0 0;">All calculations are deterministic and based on the assumptions provided.</p>
        </div>
      </div>
    `
  }

  return { generatePDF }
}
