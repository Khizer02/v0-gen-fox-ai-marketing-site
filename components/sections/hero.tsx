"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Gradient background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Deploy in 30 Days</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Deploy an AI Employee in 30 Days
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build-to-own AI agents for enterprise operations. One-time cost. Perpetual ownership. No SaaS lock-in.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                Schedule Readiness Workshop
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-card transition">
                Explore Solutions
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by enterprise leaders</p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Deployments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-xs text-muted-foreground">Avg. Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2.5M+</div>
                  <div className="text-xs text-muted-foreground">Client Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative h-full rounded-2xl border border-border bg-card/50 backdrop-blur flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-block p-4 rounded-full bg-primary/10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl">🦊</span>
                  </div>
                </div>
                <p className="text-muted-foreground">AI Employee Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
