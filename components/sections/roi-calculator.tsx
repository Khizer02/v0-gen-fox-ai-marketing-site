"use client"

import { useState } from "react"
import { Download } from "lucide-react"

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(50)
  const [costPerProcess, setCostPerProcess] = useState(100000)
  const [timeSaved, setTimeSaved] = useState(40)

  const annualSavings = (teamSize * costPerProcess * timeSaved) / 100
  const paybackMonths = 3
  const threeyearROI = annualSavings * 3

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-muted-foreground">See how much you can save with GenFox.AI</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Team Size: <span className="text-primary">{teamSize}</span>
              </label>
              <input
                type="range"
                min="10"
                max="500"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Annual Process Cost: <span className="text-primary">${costPerProcess.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={costPerProcess}
                onChange={(e) => setCostPerProcess(Number(e.target.value))}
                className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Time Saved: <span className="text-primary">{timeSaved}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="80"
                value={timeSaved}
                onChange={(e) => setTimeSaved(Number(e.target.value))}
                className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
              <p className="text-4xl font-bold text-primary">${(annualSavings / 1000000).toFixed(1)}M</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground mb-2">Payback Period</p>
                <p className="text-2xl font-bold text-foreground">{paybackMonths} months</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-xs text-muted-foreground mb-2">3-Year ROI</p>
                <p className="text-2xl font-bold text-primary">${(threeyearROI / 1000000).toFixed(1)}M</p>
              </div>
            </div>

            <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
              <Download size={18} />
              Download ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
