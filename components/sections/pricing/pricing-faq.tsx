"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What's included in the one-time cost?",
      answer:
        "The one-time cost includes the AI employee build, 30-day deployment, initial training, data setup, and integration with your systems. You also get updates and support for the included period (1-2 years depending on plan).",
    },
    {
      question: "Are there any recurring fees after the initial purchase?",
      answer:
        "No. GenFox.AI is built on a perpetual ownership model. After the one-time investment, there are no recurring SaaS fees. You own the AI employee and can use it indefinitely.",
    },
    {
      question: "Can I upgrade from Accelerator to Custom later?",
      answer:
        "Yes. If you start with Accelerator and want to expand to Custom, we can help you migrate and customize your AI employee. We'll credit your Accelerator investment toward the Custom plan.",
    },
    {
      question: "What happens after the update period ends?",
      answer:
        "Your AI employee continues to work indefinitely. The update period determines how long you receive free updates and improvements. After that, you can choose to purchase extended support or continue using your current version.",
    },
    {
      question: "Do you offer discounts for multiple AI employees?",
      answer:
        "Yes. We offer volume discounts for Enterprise customers deploying multiple AI employees. Contact our sales team for custom pricing based on your specific needs.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We stand behind our work. If you're not satisfied within the first 30 days, we'll work with you to make it right or provide a full refund. After 30 days, you own the AI employee.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Pricing FAQ</h2>
          <p className="text-lg text-muted-foreground">Common questions about our pricing and plans</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
