"use client"

import { CheckCircle2 } from "lucide-react"

const complianceFeatures = [
  { label: "SOC 2 Type II", status: "certified" },
  { label: "ISO 27001", status: "certified" },
  { label: "HIPAA", status: "certified" },
  { label: "FedRAMP High", status: "certified" },
  { label: "GDPR", status: "compliant" },
  { label: "Data Residency", status: "regional" },
]

const dataResidencyOptions = [
  {
    name: "Global",
    description: "Default deployment across Azure regions",
  },
  {
    name: "Data Zone (EU/US)",
    description: "Data processing and storage within EU or US boundaries",
  },
  {
    name: "Regional",
    description: "Specific Azure region (e.g., Switzerland North, UK South)",
  },
]

const keyDifferences = [
  {
    aspect: "Data Residency",
    azure: "Granular control - data stays in your Azure region",
    openai: "Limited options - processes through OpenAI infrastructure",
  },
  {
    aspect: "Data Usage",
    azure: "Data not used for model training without explicit consent",
    openai: "May use data for model improvement (unless opted out)",
  },
  {
    aspect: "Compliance",
    azure: "FedRAMP High, HIPAA, regional compliance options",
    openai: "SOC 2, but limited compliance certifications",
  },
  {
    aspect: "Tenant Isolation",
    azure: "Data isolated within your Azure tenant",
    openai: "Shared infrastructure across customers",
  },
]

export function ComplianceDataResidency() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Compliance & Data Residency</h2>
          <p className="text-lg text-muted-foreground">Enterprise-grade compliance for regulated industries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Azure OpenAI Certifications</h3>
            <div className="space-y-3">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature.label}</span>
                  <span className="text-xs text-muted-foreground ml-auto capitalize">{feature.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Data Residency Options</h3>
            <div className="space-y-3">
              {dataResidencyOptions.map((option, index) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground">{option.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-border bg-muted/50">
            <h3 className="text-xl font-semibold text-foreground">Azure OpenAI vs OpenAI API</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Azure OpenAI</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">OpenAI API</th>
                </tr>
              </thead>
              <tbody>
                {keyDifferences.map((diff, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30">
                    <td className="px-6 py-4 font-semibold text-foreground">{diff.aspect}</td>
                    <td className="px-6 py-4 text-foreground text-sm">{diff.azure}</td>
                    <td className="px-6 py-4 text-foreground text-sm">{diff.openai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Reference:</span> Azure OpenAI Service Compliance Documentation, Microsoft
            Learn (2024-2025)
          </p>
        </div>
      </div>
    </section>
  )
}
