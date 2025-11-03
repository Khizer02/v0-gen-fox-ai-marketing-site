"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const architectures = [
  {
    name: "Hub/Spoke Fine-Tuning",
    description: "Enterprise-safe model training and deployment",
    details: [
      "Hub: Dedicated Azure OpenAI training resource with automated pipelines",
      "Spoke: Distinct Azure OpenAI endpoints for production/testing environments",
      "Cross-tenant deployment: Fine-tuned models span subscriptions or tenants",
      "Centralized governance: Consistent model delivery across business units",
      "Use case: Organizations with multiple lines of business requiring custom models",
    ],
  },
  {
    name: "Baseline Chat Architecture",
    description: "Production-ready end-to-end chat deployment",
    details: [
      "Azure OpenAI Service for LLM inference",
      "Azure Cognitive Search for RAG (Retrieval Augmented Generation)",
      "Azure App Service or Container Instances for application hosting",
      "Azure Key Vault for secure credential management",
      "Azure Monitor for observability and compliance logging",
    ],
  },
  {
    name: "Landing Zone Architecture",
    description: "Enterprise-scale deployment with governance",
    details: [
      "Integrated with Azure landing zones for security and compliance",
      "Shared platform services managed by central teams",
      "Network isolation and private endpoints",
      "Centralized identity and access management",
      "Audit logging and compliance monitoring built-in",
    ],
  },
  {
    name: "Azure AI Foundry Hub",
    description: "Unified platform for AI development and deployment",
    details: [
      "Top-level resource based on Azure Machine Learning",
      "Managed network spanning projects and model endpoints",
      "Centralized security configuration and governance",
      "Multi-project support with shared resources",
      "Integrated monitoring and compliance controls",
    ],
  },
]

export function AzureOpenAIArchitecture() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Azure OpenAI Reference Architectures</h2>
          <p className="text-lg text-muted-foreground">
            Production-ready deployment patterns from Microsoft's Well-Architected Framework
          </p>
        </div>

        <div className="space-y-4">
          {architectures.map((arch, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-semibold text-foreground text-lg">{arch.name}</h3>
                  <p className="text-sm text-muted-foreground">{arch.description}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <ul className="space-y-2">
                    {arch.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="text-primary font-semibold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Reference:</span> Microsoft Azure Well-Architected Framework - Azure OpenAI
            Service Guide (2025)
          </p>
        </div>
      </div>
    </section>
  )
}
