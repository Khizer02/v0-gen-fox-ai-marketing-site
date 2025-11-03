"use client"

import { useState } from "react"
import CaseStudyCard from "./case-study-card"

const caseStudies = [
  {
    title: "HR Operations Automation",
    company: "Fortune 500 Tech Company",
    industry: "Technology",
    size: "10,000+ employees",
    problem: "Manual HR processes consuming 40% of team capacity, high error rates in employee data management",
    solution: "Deployed GenFox AI Employee for payroll, leave management, and employee queries",
    results: [
      { label: "Time Savings", value: "45%" },
      { label: "Cost Reduction", value: "$1.8M/yr" },
      { label: "Payback", value: "6 weeks" },
    ],
    quote:
      "GenFox transformed our HR operations. We went from reactive to proactive, and our team can now focus on strategic initiatives.",
    author: "Sarah Chen",
    role: "VP of Human Resources",
  },
  {
    title: "Finance & Billing Automation",
    company: "Mid-Market Financial Services",
    industry: "Finance",
    size: "500-1000 employees",
    problem: "Invoice processing delays, manual billing errors, customer inquiry backlog",
    solution: "Implemented GenFox WhatsApp Billing Assistant for invoice generation and customer support",
    results: [
      { label: "Time Savings", value: "38%" },
      { label: "Cost Reduction", value: "$650K/yr" },
      { label: "Payback", value: "9 weeks" },
    ],
    quote:
      "The WhatsApp bot handles 80% of billing inquiries automatically. Our team productivity increased dramatically.",
    author: "Michael Rodriguez",
    role: "CFO",
  },
  {
    title: "Customer Support Excellence",
    company: "SaaS Platform Leader",
    industry: "Software",
    size: "2000+ employees",
    problem: "High support ticket volume, long response times, customer satisfaction declining",
    solution: "Deployed GenFox AI for first-line support and ticket routing",
    results: [
      { label: "Time Savings", value: "42%" },
      { label: "Cost Reduction", value: "$2.3M/yr" },
      { label: "Payback", value: "7 weeks" },
    ],
    quote: "Our CSAT scores improved by 25% while reducing support costs. GenFox is a game-changer.",
    author: "Jennifer Park",
    role: "Head of Customer Success",
  },
  {
    title: "Operations Process Optimization",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    size: "5000+ employees",
    problem: "Complex operational workflows, manual data entry, compliance documentation burden",
    solution: "Built custom GenFox AI Employee for operations management and compliance tracking",
    results: [
      { label: "Time Savings", value: "35%" },
      { label: "Cost Reduction", value: "$1.5M/yr" },
      { label: "Payback", value: "10 weeks" },
    ],
    quote: "GenFox's build-to-own model gave us complete control. We own the AI, not the other way around.",
    author: "David Thompson",
    role: "Chief Operations Officer",
  },
]

export default function CaseStudiesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)))
  const filteredStudies = selectedIndustry ? caseStudies.filter((cs) => cs.industry === selectedIndustry) : caseStudies

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Case Studies</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedIndustry(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedIndustry === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              All Industries
            </button>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedIndustry === industry
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <CaseStudyCard key={idx} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}
