"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function MicrosoftCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Ready to Deploy Enterprise AI with Microsoft?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          GenFox builds custom AI employees on Azure OpenAI with enterprise governance, compliance, and data residency
          built-in.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule Readiness Workshop
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/roi"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Calculate Your ROI
          </Link>
        </div>
      </div>
    </section>
  )
}
