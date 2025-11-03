"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import SecurityHero from "@/components/sections/security/security-hero"
import GovernedAutonomy from "@/components/sections/security/governed-autonomy"
import SecurityLayers from "@/components/sections/security/security-layers"
import ComplianceCertifications from "@/components/sections/security/compliance-certifications"
import DataHandling from "@/components/sections/security/data-handling"
import SecurityFAQ from "@/components/sections/security/security-faq"
import TrustCTA from "@/components/sections/security/trust-cta"

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SecurityHero />
      <GovernedAutonomy />
      <SecurityLayers />
      <ComplianceCertifications />
      <DataHandling />
      <SecurityFAQ />
      <TrustCTA />
      <Footer />
    </main>
  )
}
