"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingHero from "@/components/sections/pricing/pricing-hero"
import PricingTiers from "@/components/sections/pricing/pricing-tiers"
import ComparisonMatrix from "@/components/sections/pricing/comparison-matrix"
import SupportTiers from "@/components/sections/pricing/support-tiers"
import NoSaasLockIn from "@/components/sections/pricing/no-saas-lock-in"
import PricingFAQ from "@/components/sections/pricing/pricing-faq"
import PricingCTA from "@/components/sections/pricing/pricing-cta"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PricingHero />
        <PricingTiers billingCycle={billingCycle} onBillingCycleChange={setBillingCycle} />
        <ComparisonMatrix />
        <SupportTiers />
        <NoSaasLockIn />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  )
}
