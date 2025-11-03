"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import OpenAIPracticeHero from "@/components/sections/openai-practice/hero"
import UseCaseFactory from "@/components/sections/openai-practice/use-case-factory"
import ReferenceArchitectures from "@/components/sections/openai-practice/reference-architectures"
import IntegrationPatterns from "@/components/sections/openai-practice/integration-patterns"
import ComplianceGovernance from "@/components/sections/openai-practice/compliance-governance"
import RealWorldExamples from "@/components/sections/openai-practice/real-world-examples"
import OpenAIPracticeCTA from "@/components/sections/openai-practice/cta"

export default function OpenAIPracticePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <OpenAIPracticeHero />
        <UseCaseFactory />
        <ReferenceArchitectures />
        <IntegrationPatterns />
        <ComplianceGovernance />
        <RealWorldExamples />
        <OpenAIPracticeCTA />
      </main>
      <Footer />
    </div>
  )
}
