"use client"

import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Deploy Your AI Employee?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a 30-minute consultation with our team to explore how GenFox AI can transform your operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-card transition">
              View Pricing
            </button>
          </div>

          <p className="text-sm text-muted-foreground">No credit card required. Takes 15 minutes to get started.</p>
        </div>
      </div>
    </section>
  )
}
