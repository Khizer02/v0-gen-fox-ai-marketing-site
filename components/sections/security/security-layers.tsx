"use client"

import { useState } from "react"
import { Database, Shield, Cloud, Lock } from "lucide-react"

export default function SecurityLayers() {
  const [activeLayer, setActiveLayer] = useState(0)

  const layers = [
    {
      icon: Database,
      title: "Data Layer",
      description: "Encryption at rest and in transit. Data isolation per customer. No cross-tenant data access.",
      details: [
        "AES-256 encryption at rest",
        "TLS 1.3 for data in transit",
        "Customer-specific data partitioning",
        "Automated backup encryption",
      ],
    },
    {
      icon: Shield,
      title: "Model Layer",
      description: "Secure model deployment with access controls and version management.",
      details: [
        "Model integrity verification",
        "Role-based access control",
        "Model version tracking",
        "Unauthorized access prevention",
      ],
    },
    {
      icon: Cloud,
      title: "Deployment Layer",
      description: "Isolated execution environments with resource limits and monitoring.",
      details: [
        "Container isolation",
        "Resource quotas per AI employee",
        "Real-time performance monitoring",
        "Automatic threat detection",
      ],
    },
    {
      icon: Lock,
      title: "Governance Layer",
      description: "Policy enforcement, audit logging, and compliance controls.",
      details: [
        "Policy-based access control",
        "Comprehensive audit logs",
        "Compliance reporting",
        "Incident response automation",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Multi-Layered Security Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Defense in depth across four critical layers ensures comprehensive protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Layer Selector */}
          <div className="space-y-4">
            {layers.map((layer, idx) => {
              const Icon = layer.icon
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                    activeLayer === idx
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon size={24} className={activeLayer === idx ? "text-primary" : "text-muted-foreground"} />
                    <div>
                      <h3 className="font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{layer.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Details */}
          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">{layers[activeLayer].title}</h3>
            <ul className="space-y-4">
              {layers[activeLayer].details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
