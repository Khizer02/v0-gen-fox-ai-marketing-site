"use client"

export default function TrustCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Deploy with Confidence</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Enterprise-grade security, compliance, and governance. Your data is protected. Your AI employees operate
          within your guardrails.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
            Schedule Security Review
          </button>
          <button className="px-8 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition">
            Download Security Whitepaper
          </button>
        </div>
      </div>
    </section>
  )
}
