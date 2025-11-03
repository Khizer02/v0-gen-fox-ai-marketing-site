"use client"

import { useState } from "react"
import { MessageSquare, FileText, BarChart3, Users } from "lucide-react"

const useCases = [
  {
    id: "customer-support",
    title: "Customer Support Automation",
    icon: MessageSquare,
    description: "AI-powered support agents handling high-volume inquiries with human oversight",
    benefits: [
      "55% of Tier 1 inquiries resolved autonomously (Nubank)",
      "70% reduction in chat response times",
      "2M+ monthly chats handled",
    ],
    implementation:
      "GPT-4o with function calling for ticket routing, conversation summarization, and recommended responses",
    realWorld: "Nubank deployed Call Center Copilot assisting agents + autonomous chat assistant",
  },
  {
    id: "document-processing",
    title: "Document Processing & Analysis",
    icon: FileText,
    description: "Multi-modal document understanding with vision capabilities",
    benefits: [
      "Vision API for text + visual data analysis",
      "Fraud detection across documents and communications",
      "Enterprise search with RAG (Retrieval-Augmented Generation)",
    ],
    implementation:
      "GPT-4o Vision + RAG for analyzing transaction records, customer communications, and submitted documents",
    realWorld: "Nubank piloting fraud detection analyzing both text and visual data in documents",
  },
  {
    id: "business-intelligence",
    title: "Enterprise Search & Knowledge Access",
    icon: BarChart3,
    description: "Instant access to company FAQs, brand guidelines, and internal policies",
    benefits: [
      "RAG-powered semantic search",
      "Reduced time finding internal information",
      "Consistent policy enforcement",
    ],
    implementation: "GPT-4o + RAG with vector embeddings for semantic search across enterprise knowledge bases",
    realWorld: "Nubank custom enterprise search providing employees instant access to company resources",
  },
  {
    id: "hr-operations",
    title: "HR Operations & Employee Services",
    icon: Users,
    description: "Conversational AI for payroll, benefits, and HR inquiries",
    benefits: ["24/7 employee self-service", "Reduced HR team workload", "Consistent policy application"],
    implementation: "Function calling for HR system integration, fine-tuned for HR-specific terminology and policies",
    realWorld: "GenFox AI Payroll ESS - conversational interface for employee payroll and benefits queries",
  },
]

export default function UseCaseFactory() {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Use Case Factory</h2>
          <p className="text-lg text-muted-foreground">
            Verified enterprise use cases with real-world metrics and proven implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Use Case List */}
          <div className="space-y-3">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <button
                  key={useCase.id}
                  onClick={() => setSelectedUseCase(useCase)}
                  className={`w-full text-left p-4 rounded-lg border transition ${
                    selectedUseCase.id === useCase.id
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      size={20}
                      className={selectedUseCase.id === useCase.id ? "text-primary" : "text-muted-foreground"}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Use Case Details */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedUseCase.title}</h3>
                <p className="text-muted-foreground">{selectedUseCase.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Verified Metrics & Benefits</h4>
                <ul className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Technical Implementation</h4>
                <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                  {selectedUseCase.implementation}
                </p>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Real-World Example:</span> {selectedUseCase.realWorld}
                </p>
              </div>

              <button className="w-full px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
                View Full Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
