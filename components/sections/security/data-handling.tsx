"use client"

import { Shield, Eye, Trash2, Lock } from "lucide-react"

export default function DataHandling() {
  const policies = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All customer data encrypted at rest with AES-256 and in transit with TLS 1.3",
    },
    {
      icon: Eye,
      title: "Data Isolation",
      description: "Complete data separation between customers. No cross-tenant data access under any circumstances",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Role-based access control with principle of least privilege. Multi-factor authentication required",
    },
    {
      icon: Trash2,
      title: "Data Deletion",
      description: "Immediate data deletion upon request. Cryptographic erasure ensures no recovery possible",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Data Handling & Privacy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your data is yours. We implement strict policies to ensure privacy, security, and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {policies.map((policy, idx) => {
            const Icon = policy.icon
            return (
              <div key={idx} className="p-8 rounded-xl border border-border bg-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{policy.title}</h3>
                <p className="text-muted-foreground">{policy.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Data Residency</h3>
            <p className="text-muted-foreground mb-4">
              Choose where your data is stored. We support multiple regions to meet your compliance requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                US (Virginia, Oregon)
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                EU (Frankfurt, Ireland)
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                APAC (Singapore, Sydney)
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">Incident Response</h3>
            <p className="text-muted-foreground mb-4">
              We maintain a 24/7 security operations center with rapid incident response protocols.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                24/7 Security Monitoring
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                &lt;1 Hour Response Time
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Transparent Communication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
