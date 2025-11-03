"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SecurityFAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: "How is my data encrypted?",
      a: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Encryption keys are managed separately from data and rotated regularly.",
    },
    {
      q: "Can GenFox access my data?",
      a: "No. Your data is encrypted and isolated. GenFox employees cannot access customer data without explicit authorization and audit logging.",
    },
    {
      q: "What happens if there's a security breach?",
      a: "We maintain a 24/7 SOC with incident response protocols. Affected customers are notified within 1 hour. We provide full transparency and support.",
    },
    {
      q: "Is my data backed up?",
      a: "Yes. We maintain encrypted backups in geographically distributed locations with automated recovery testing.",
    },
    {
      q: "Can I delete my data?",
      a: "Yes. You can request immediate data deletion at any time. We use cryptographic erasure to ensure no recovery is possible.",
    },
    {
      q: "Do you support HIPAA compliance?",
      a: "Yes. We are HIPAA-ready and can sign Business Associate Agreements (BAAs) for healthcare organizations.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Security FAQ</h2>
          <p className="text-lg text-muted-foreground">
            Common questions about security, compliance, and data protection
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-primary transition-transform ${openIdx === idx ? "rotate-180" : ""}`}
                />
              </div>
              {openIdx === idx && <p className="text-muted-foreground mt-4">{faq.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
