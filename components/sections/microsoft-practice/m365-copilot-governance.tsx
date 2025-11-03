"use client"

import { Shield, Users, Settings, BarChart3 } from "lucide-react"

const governancePhases = [
  {
    phase: "Preparation",
    icon: Settings,
    items: [
      "Data and identity readiness assessment",
      "Sensitivity label configuration",
      "Data Loss Prevention (DLP) policy setup",
      "SharePoint site access review",
    ],
  },
  {
    phase: "Implementation",
    icon: Shield,
    items: [
      "Multi-layered security defense",
      "Copilot Center of Excellence (CoE) establishment",
      "Role definition and access controls",
      "Agent registration and approval workflows",
    ],
  },
  {
    phase: "Management",
    icon: BarChart3,
    items: [
      "Continuous monitoring and auditing",
      "Performance KPI tracking",
      "Compliance reporting",
      "Data lifecycle management (archive/delete)",
    ],
  },
]

const coeFunctions = [
  "Define core roles and responsibilities",
  "Create reusable templates and assets",
  "Set standards for quality, content, and security",
  "Manage solution lifecycle and policies",
  "Conduct regular audits and assessments",
  "Track adoption metrics and ROI",
]

export function M365CopilotGovernance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Microsoft 365 Copilot Governance</h2>
          <p className="text-lg text-muted-foreground">
            Three-phase governance framework for enterprise-scale deployment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {governancePhases.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg text-foreground">{item.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((subitem, i) => (
                    <li key={i} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{subitem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Center of Excellence (CoE) Functions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {coeFunctions.map((func, index) => (
              <div key={index} className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Reference:</span> Microsoft 365 Copilot Security and Governance - Microsoft
            Learn & Microsoft Insider Track (2024)
          </p>
        </div>
      </div>
    </section>
  )
}
