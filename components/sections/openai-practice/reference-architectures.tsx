import { Database, Cloud, Shield, Zap } from "lucide-react"

const architectures = [
  {
    name: "Synchronous Processing",
    description: "Real-time AI responses for interactive applications with sub-2s latency",
    components: ["API Gateway", "Load Balancer", "OpenAI API", "Cache Layer"],
    icon: Zap,
    latency: "<2s",
    details:
      "Ideal for customer-facing applications. Use Priority Processing for guaranteed low latency during peak demand.",
    rateLimit: "Tier 5: $200K/month with auto-scaling",
  },
  {
    name: "Asynchronous Processing",
    description: "Batch processing for high-volume, non-urgent tasks with message queuing",
    components: ["Message Queue", "Worker Pool", "OpenAI API", "Result Store"],
    icon: Cloud,
    latency: "Minutes to hours",
    details: "Cost-effective for bulk operations. Implement exponential backoff for rate limit handling.",
    rateLimit: "Optimized for TPM (tokens per minute) efficiency",
  },
  {
    name: "Hybrid Architecture",
    description: "Combine sync and async for optimal performance and cost efficiency",
    components: ["API Gateway", "Queue System", "Cache", "Database"],
    icon: Database,
    latency: "Flexible",
    details: "Route urgent requests synchronously, batch non-urgent work asynchronously. Implement circuit breakers.",
    rateLimit: "Balanced TPM and RPM usage",
  },
  {
    name: "Secure Enterprise",
    description: "VPC-isolated deployment with compliance controls and data residency",
    components: ["VPC", "Private Endpoints", "Audit Logging", "Encryption"],
    icon: Shield,
    latency: "Configurable",
    details: "Consider Azure OpenAI for HIPAA, FedRAMP, and regional data residency requirements.",
    rateLimit: "Enterprise SLAs with uptime guarantees",
  },
]

export default function ReferenceArchitectures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Reference Architectures</h2>
          <p className="text-lg text-muted-foreground">
            Production-ready patterns based on enterprise best practices and OpenAI's official guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {architectures.map((arch) => {
            const Icon = arch.icon
            return (
              <div
                key={arch.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{arch.name}</h3>
                    <p className="text-sm text-muted-foreground">{arch.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Components</p>
                    <div className="flex flex-wrap gap-2">
                      {arch.components.map((comp) => (
                        <span key={comp} className="px-2 py-1 rounded bg-muted text-xs text-foreground">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border space-y-2">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Latency:</span> {arch.latency}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Rate Limits:</span> {arch.rateLimit}
                    </p>
                    <p className="text-xs text-muted-foreground">{arch.details}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">Key Considerations</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Implement separate API keys for dev, staging, and production environments</li>
            <li>• Use OpenAI's Priority Processing for guaranteed low latency and SLAs</li>
            <li>• Monitor TPM (tokens per minute) and RPM (requests per minute) quotas</li>
            <li>• For HIPAA/FedRAMP compliance, use Azure OpenAI with regional data residency</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
