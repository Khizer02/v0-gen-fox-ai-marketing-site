"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MicrosoftHero } from "@/components/sections/microsoft-practice/hero"
import { AzureOpenAIArchitecture } from "@/components/sections/microsoft-practice/azure-openai-architecture"
import { M365CopilotGovernance } from "@/components/sections/microsoft-practice/m365-copilot-governance"
import { IntegrationPatterns } from "@/components/sections/microsoft-practice/integration-patterns"
import { ComplianceDataResidency } from "@/components/sections/microsoft-practice/compliance-data-residency"
import { RealWorldExamples } from "@/components/sections/microsoft-practice/real-world-examples"
import { MicrosoftCTA } from "@/components/sections/microsoft-practice/cta"

export default function MicrosoftPracticePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MicrosoftHero />
        <AzureOpenAIArchitecture />
        <M365CopilotGovernance />
        <IntegrationPatterns />
        <ComplianceDataResidency />
        <RealWorldExamples />
        <MicrosoftCTA />
      </main>
      <Footer />
    </div>
  )
}
