"use client"

import { CheckCircle2 } from "lucide-react"

export default function ComplianceCertifications() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, processing integrity, confidentiality, and privacy controls",
      status: "Certified",
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
    },
    {
      name: "HIPAA",
      description: "Healthcare data protection and privacy compliance",
      status: "Ready",
    },
    {
      name: "GDPR",
      description: "European data protection and privacy regulations",
      status: "Compliant",
    },
    {
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program",
      status: "In Progress",
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Compliance & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the strictest regulatory requirements with our comprehensive compliance framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-medium text-primary">{cert.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-card border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Security Questionnaire</h3>
          <p className="text-muted-foreground mb-6">
            We maintain comprehensive documentation for vendor security assessments. Download our security questionnaire
            responses and audit reports.
          </p>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
            Download Security Documentation
          </button>
        </div>
      </div>
    </section>
  )
}
