"use client"

import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react"

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Gradient accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">AI Employees</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              Enterprise-Grade AI Agents Built for Your Operations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deploy autonomous AI employees that integrate seamlessly with your existing systems. Choose between our
              Accelerator for rapid deployment or Custom for tailored solutions.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">30-Day Deployment</h3>
                <p className="text-sm text-muted-foreground">From discovery to production</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground">SOC 2, ISO 27001 compliant</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Measurable ROI</h3>
                <p className="text-sm text-muted-foreground">40% avg. time savings</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
              Schedule Demo
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-card transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
