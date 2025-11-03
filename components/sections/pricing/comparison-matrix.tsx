import { Check, X } from "lucide-react"

export default function ComparisonMatrix() {
  const features = [
    {
      category: "Deployment",
      name: "Deployment Time",
      accelerator: "30 days",
      custom: "30 days",
      enterprise: "30 days",
    },
    { category: "Deployment", name: "Customization Level", accelerator: "Basic", custom: "Full", enterprise: "Full" },
    { category: "Deployment", name: "Use Cases", accelerator: "1", custom: "Multiple", enterprise: "Unlimited" },
    {
      category: "Support",
      name: "Support Level",
      accelerator: "Email",
      custom: "Priority",
      enterprise: "24/7 Dedicated",
    },
    { category: "Support", name: "SLA Guarantee", accelerator: false, custom: false, enterprise: true },
    { category: "Support", name: "Quarterly Reviews", accelerator: false, custom: false, enterprise: true },
    { category: "Security", name: "Enterprise Security", accelerator: true, custom: true, enterprise: true },
    {
      category: "Security",
      name: "Compliance Ready",
      accelerator: "Standard",
      custom: "Advanced",
      enterprise: "Advanced",
    },
    { category: "Ownership", name: "Data Ownership", accelerator: true, custom: true, enterprise: true },
    { category: "Ownership", name: "Perpetual License", accelerator: true, custom: true, enterprise: true },
    { category: "Ownership", name: "No Recurring Fees", accelerator: true, custom: true, enterprise: true },
    { category: "Updates", name: "Years of Updates", accelerator: "1", custom: "2", enterprise: "Unlimited" },
  ]

  const categories = ["Deployment", "Support", "Security", "Ownership", "Updates"]

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Detailed Comparison</h2>
          <p className="text-lg text-muted-foreground">See how each plan compares across key features</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Accelerator</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Custom</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tbody key={category}>
                  <tr>
                    <td colSpan={4} className="py-3 px-4 bg-muted/50 font-semibold text-sm text-muted-foreground">
                      {category}
                    </td>
                  </tr>
                  {features
                    .filter((f) => f.category === category)
                    .map((feature) => (
                      <tr key={feature.name} className="border-b border-border hover:bg-muted/30 transition">
                        <td className="py-4 px-4 text-foreground">{feature.name}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.accelerator === "boolean" ? (
                            feature.accelerator ? (
                              <Check size={20} className="mx-auto text-primary" />
                            ) : (
                              <X size={20} className="mx-auto text-muted-foreground" />
                            )
                          ) : (
                            <span className="text-foreground font-medium">{feature.accelerator}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.custom === "boolean" ? (
                            feature.custom ? (
                              <Check size={20} className="mx-auto text-primary" />
                            ) : (
                              <X size={20} className="mx-auto text-muted-foreground" />
                            )
                          ) : (
                            <span className="text-foreground font-medium">{feature.custom}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check size={20} className="mx-auto text-primary" />
                            ) : (
                              <X size={20} className="mx-auto text-muted-foreground" />
                            )
                          ) : (
                            <span className="text-foreground font-medium">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
