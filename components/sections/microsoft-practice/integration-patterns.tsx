"use client"

import { Code2, Zap, Database } from "lucide-react"

const patterns = [
  {
    name: "Declarative Agents",
    icon: Code2,
    description: "Customize Microsoft 365 Copilot for specific business scenarios",
    capabilities: [
      "Custom instructions and system prompts",
      "Multiple plugins simultaneously",
      "Knowledge integration from SharePoint",
      "External system integration via REST APIs",
      "Real-time data retrieval and task execution",
    ],
    examples: [
      "Employee IT self-help with internal knowledge",
      "Customer support integrated with order management",
      "HR policy assistant with real-time data access",
    ],
  },
  {
    name: "API Plugins",
    icon: Zap,
    description: "Connect external REST APIs to Microsoft 365 Copilot",
    capabilities: [
      "OpenAPI description support",
      "Query, create, update, delete operations",
      "Natural language interface to external systems",
      "Secure authentication and authorization",
      "Rate limiting and error handling",
    ],
    examples: [
      "CRM integration for customer data access",
      "ERP system queries for inventory management",
      "Third-party service integrations",
    ],
  },
  {
    name: "Copilot Studio Connectors",
    icon: Database,
    description: "Integrate enterprise data sources and systems",
    capabilities: [
      "Microsoft 365 native connectors",
      "Dynamics 365 integration",
      "Microsoft Fabric data access",
      "Non-Microsoft enterprise systems",
      "Custom connector development",
    ],
    examples: [
      "Dynamics 365 sales data integration",
      "Microsoft Fabric analytics queries",
      "Legacy system data access",
      "Custom business application connectors",
    ],
  },
]

export function IntegrationPatterns() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Microsoft 365 Copilot Integration Patterns
          </h2>
          <p className="text-lg text-muted-foreground">Three proven patterns for extending Copilot capabilities</p>
        </div>

        <div className="space-y-8">
          {patterns.map((pattern, index) => {
            const Icon = pattern.icon
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{pattern.name}</h3>
                    <p className="text-muted-foreground mt-1">{pattern.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Capabilities</h4>
                    <ul className="space-y-2">
                      {pattern.capabilities.map((cap, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Real-World Examples</h4>
                    <ul className="space-y-2">
                      {pattern.examples.map((example, i) => (
                        <li key={i} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Reference:</span> Microsoft Learn - API Plugins, Declarative Agents, and
            Copilot Studio Documentation (2024)
          </p>
        </div>
      </div>
    </section>
  )
}
