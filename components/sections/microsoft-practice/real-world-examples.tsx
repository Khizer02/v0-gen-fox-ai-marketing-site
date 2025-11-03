"use client"

const caseStudies = [
  {
    company: "ABB Group",
    industry: "Manufacturing & Operations Automation",
    solution: "Genix Copilot with Azure OpenAI Service",
    metrics: [
      { label: "Operations Cost Savings", value: "Up to 40%" },
      { label: "Production Efficiency", value: "+30%" },
      { label: "Sustainability Improvement", value: "+25%" },
      { label: "Service Call Reduction", value: "-80%" },
    ],
  },
  {
    company: "Air India",
    industry: "Aviation & Customer Service",
    solution: "AI.g Virtual Assistant with Azure OpenAI",
    metrics: [
      { label: "Daily Queries Handled", value: "30,000+" },
      { label: "Automated Interactions", value: "Millions" },
      { label: "Customer Experience", value: "Significantly Enhanced" },
      { label: "Response Time", value: "Real-time" },
    ],
  },
  {
    company: "Bradesco Bank",
    industry: "Financial Services",
    solution: "BIA Virtual Assistant with Azure OpenAI",
    metrics: [
      { label: "First-Level Resolution", value: "82%" },
      { label: "Client Retention", value: "89%" },
      { label: "Manager Query Increase", value: "8x" },
      { label: "Response Time", value: "Days → Hours" },
    ],
  },
  {
    company: "Vodafone",
    industry: "Telecommunications",
    solution: "Microsoft 365 Copilot Rollout (68,000 employees)",
    metrics: [
      { label: "Time Saved Per Week", value: "~3 hours" },
      { label: "User Benefit Rate", value: "90%" },
      { label: "Work Quality Improvement", value: "60%" },
      { label: "Contract Drafting Time", value: "-1 hour" },
    ],
  },
]

export function RealWorldExamples() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Real-World Enterprise Deployments</h2>
          <p className="text-lg text-muted-foreground">Verified case studies from Microsoft customers (2024)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{study.company}</h3>
                <p className="text-sm text-muted-foreground mt-1">{study.industry}</p>
                <p className="text-sm text-primary font-medium mt-2">{study.solution}</p>
              </div>

              <div className="space-y-3">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start justify-between p-3 bg-muted/30 rounded">
                    <span className="text-sm text-foreground font-medium">{metric.label}</span>
                    <span className="text-sm font-semibold text-primary">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <span className="font-semibold">Reference:</span> Microsoft Customer Stories - Generative AI Impact
            (November 2024)
          </p>
        </div>
      </div>
    </section>
  )
}
