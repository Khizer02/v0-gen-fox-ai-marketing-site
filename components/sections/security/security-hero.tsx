"use client"

import { Shield } from "lucide-react"

export default function SecurityHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Shield size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Security</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Security & Governance Built for Enterprise
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy AI employees with confidence. Multi-layered security, enterprise compliance, and governed autonomy
            ensure your data stays protected while AI operates within your guardrails.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">SOC 2</div>
              <p className="text-sm text-muted-foreground">Type II Certified</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">ISO 27001</div>
              <p className="text-sm text-muted-foreground">Compliant</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">HIPAA</div>
              <p className="text-sm text-muted-foreground">Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
