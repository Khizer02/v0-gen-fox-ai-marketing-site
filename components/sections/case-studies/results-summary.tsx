export default function ResultsSummary() {
  const metrics = [
    { label: "Average Time Savings", value: "40%", description: "Across all deployments" },
    { label: "Average Annual Savings", value: "$2.1M", description: "Per enterprise customer" },
    { label: "Average Payback Period", value: "8 weeks", description: "From deployment" },
    { label: "Customer Satisfaction", value: "98%", description: "Post-deployment NPS" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Aggregate Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{metric.label}</h3>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
