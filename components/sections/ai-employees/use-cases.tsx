"use client"

export default function UseCases() {
  const useCases = [
    {
      title: "HR & Payroll",
      description: "Automate employee queries, leave management, and payroll processing.",
      metrics: "60% workload reduction",
    },
    {
      title: "Customer Support",
      description: "Handle tier-1 support tickets with intelligent routing and resolution.",
      metrics: "40% ticket deflection",
    },
    {
      title: "Finance & Accounting",
      description: "Automate invoice processing, expense management, and reconciliation.",
      metrics: "50% processing time saved",
    },
    {
      title: "Operations",
      description: "Streamline procurement, scheduling, and resource allocation.",
      metrics: "35% operational efficiency gain",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Use Cases Across Industries</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            GenFox AI Employees are deployed across diverse business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-card p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-1">Typical Impact</p>
                <p className="text-lg font-semibold text-primary">{useCase.metrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
