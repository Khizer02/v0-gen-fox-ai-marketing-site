import { TrendingUp } from "lucide-react"

const examples = [
  {
    title: "Financial Services",
    company: "Global Bank",
    challenge: "Process 10,000+ loan applications monthly",
    solution: "AI agents using GPT-4 for document analysis and decision support",
    result: "85% automation rate, 3-day processing time",
  },
  {
    title: "Healthcare",
    company: "Medical Provider",
    challenge: "Manage patient inquiries and appointment scheduling",
    solution: "Conversational AI with function calling for calendar integration",
    result: "70% deflection, 24/7 availability",
  },
  {
    title: "E-commerce",
    company: "Retail Platform",
    challenge: "Personalized product recommendations at scale",
    solution: "RAG system with product database and customer history",
    result: "35% increase in average order value",
  },
]

export default function RealWorldExamples() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Real-World Examples</h2>
          <p className="text-lg text-muted-foreground">How enterprises are deploying OpenAI at scale</p>
        </div>

        <div className="space-y-6">
          {examples.map((example, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase">{example.title}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">{example.company}</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Challenge</p>
                      <p className="text-foreground">{example.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</p>
                      <p className="text-foreground">{example.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex items-center">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Result</p>
                    <p className="text-2xl font-bold text-primary">{example.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
