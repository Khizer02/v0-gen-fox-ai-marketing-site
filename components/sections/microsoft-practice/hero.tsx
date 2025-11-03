"use client"

import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export function MicrosoftHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Enterprise AI with Microsoft
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Azure OpenAI Service and Microsoft 365 Copilot governance for regulated industries. Data residency,
            compliance, and enterprise-grade security built-in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">FedRAMP High Certified</h3>
            <p className="text-sm text-muted-foreground">
              Azure OpenAI approved for government and regulated industries
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Regional Data Residency</h3>
            <p className="text-sm text-muted-foreground">
              Data stays in your Azure region. No cross-border data transfer
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">M365 Integration</h3>
            <p className="text-sm text-muted-foreground">
              Native integration with Teams, Outlook, Word, Excel, and SharePoint
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/roi"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Calculate ROI
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Schedule Workshop
          </Link>
        </div>
      </div>
    </section>
  )
}
