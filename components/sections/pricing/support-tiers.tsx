import { Phone, Mail, MessageSquare, Clock } from "lucide-react"

export default function SupportTiers() {
  const supportTiers = [
    {
      name: "Email Support",
      plan: "Accelerator",
      icon: Mail,
      features: ["Response time: 24-48 hours", "Email-based support", "Knowledge base access", "Community forum"],
    },
    {
      name: "Priority Support",
      plan: "Custom",
      icon: MessageSquare,
      features: [
        "Response time: 4-8 hours",
        "Email & chat support",
        "Phone support available",
        "Dedicated support contact",
        "Knowledge base access",
      ],
    },
    {
      name: "24/7 Dedicated Support",
      plan: "Enterprise",
      icon: Phone,
      features: [
        "Response time: 1 hour",
        "Phone, email & chat",
        "Dedicated support team",
        "Proactive monitoring",
        "Quarterly business reviews",
        "Custom SLA",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Support Tiers</h2>
          <p className="text-lg text-muted-foreground">Get the support level that matches your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportTiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div key={tier.name} className="rounded-xl border border-border bg-card p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-sm text-primary font-medium">{tier.plan} Plan</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Clock size={16} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
