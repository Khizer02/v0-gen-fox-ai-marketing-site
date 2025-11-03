import { CheckCircle2, AlertCircle, Lock, Shield } from "lucide-react"

const complianceItems = [
  {
    title: "Data Privacy & Training",
    description: "OpenAI API: Data not used for model training. Enterprise contracts available.",
    icon: Lock,
    status: "Compliant",
    details:
      "OpenAI does not train on API data by default. Azure OpenAI: Data stays in your tenant, never used for training.",
  },
  {
    title: "Audit Logging & Monitoring",
    description: "Complete audit trails for all API calls, inputs, and outputs.",
    icon: CheckCircle2,
    status: "Available",
    details:
      "Implement SIEM/SOC tools for LLM-based applications. Monitor for prompt injection and data poisoning threats.",
  },
  {
    title: "Compliance Certifications",
    description: "OpenAI: SOC 2 Type II. Azure OpenAI: SOC 2, ISO 27001, HIPAA, FedRAMP.",
    icon: Shield,
    status: "Varies by Platform",
    details: "Choose Azure OpenAI for regulated industries requiring HIPAA, FedRAMP, or regional data residency.",
  },
  {
    title: "API Key Management",
    description: "Centralized secret storage, scoped access, automated rotation, least privilege.",
    icon: AlertCircle,
    status: "Required",
    details:
      "Never hardcode API keys. Use environment variables. Implement key rotation policies. Restrict to specific models/endpoints.",
  },
]

export default function ComplianceGovernance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Compliance & Governance</h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade security controls based on OpenAI's official production best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {complianceItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon size={24} className="text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <div className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {item.status}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">{item.details}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-4">OpenAI API</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>SOC 2 Type II certified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Data not used for training</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Enterprise contracts available</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Limited data residency options</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-4">Azure OpenAI (Recommended for Regulated Industries)</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>SOC 2, ISO 27001 certified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>HIPAA, FedRAMP ready</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Regional data residency</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Data stays in your tenant</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
