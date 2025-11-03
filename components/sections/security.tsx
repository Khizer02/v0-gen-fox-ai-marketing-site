"use client"

import { useState } from "react"
import { Shield, Lock, Eye, Zap } from "lucide-react"

const securityLayers = [
  {
    icon: Lock,
    title: "Data Security",
    description: "End-to-end encryption, secure data handling, compliance-ready",
  },
  {
    icon: Shield,
    title: "Model Security",
    description: "Isolated model training, secure inference, audit trails",
  },
  {
    icon: Eye,
    title: "Governance",
    description: "Role-based access, activity monitoring, compliance reporting",
  },
  {
    icon: Zap,
    title: "Deployment",
    description: "Secure infrastructure, DDoS protection, 99.99% uptime SLA",
  },
]

export default function Security() {
  const [activeLayer, setActiveLayer] = useState(0)

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-muted-foreground">Bank-level security for your AI employees</p>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {["SOC 2 Type II", "ISO 27001", "HIPAA Ready", "FedRAMP"].map((badge, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border bg-card text-center">
              <p className="text-sm font-medium text-foreground">{badge}</p>
            </div>
          ))}
        </div>

        {/* Security Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {securityLayers.map((layer, idx) => {
              const Icon = layer.icon
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full p-4 rounded-lg border transition text-left ${
                    activeLayer === idx ? "border-primary bg-primary/10" : "border-border bg-background hover:bg-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`w-6 h-6 flex-shrink-0 ${
                        activeLayer === idx ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Diagram */}
          <div className="p-8 rounded-xl border border-border bg-card/50 flex items-center justify-center min-h-96">
            <div className="text-center space-y-4">
              <div className="inline-block p-4 rounded-full bg-primary/10">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <p className="text-muted-foreground">Security architecture diagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
