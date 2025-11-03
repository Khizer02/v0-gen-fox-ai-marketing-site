import { Code2, Zap } from "lucide-react"

const patterns = [
  {
    title: "Function Calling",
    description: "Enable AI to call your APIs and tools",
    code: 'const tools = [{ name: "get_user", description: "..." }]',
    useCases: ["Tool integration", "API orchestration", "Workflow automation"],
  },
  {
    title: "Retrieval Augmented Generation",
    description: "Ground AI responses in your data",
    code: "const context = await vectorDB.search(query)",
    useCases: ["Knowledge bases", "Document Q&A", "Custom training"],
  },
  {
    title: "Fine-tuning",
    description: "Customize models for your domain",
    code: "await openai.fineTuning.jobs.create(...)",
    useCases: ["Domain expertise", "Terminology", "Style consistency"],
  },
]

export default function IntegrationPatterns() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Integration Patterns</h2>
          <p className="text-lg text-muted-foreground">Proven patterns for integrating OpenAI into your systems</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <div key={pattern.title} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={20} className="text-primary" />
                <h3 className="font-bold text-foreground">{pattern.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{pattern.description}</p>

              <div className="bg-muted/50 rounded p-3 mb-4 font-mono text-xs text-foreground overflow-x-auto">
                {pattern.code}
              </div>

              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Use Cases</p>
                <ul className="space-y-1">
                  {pattern.useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-foreground flex items-center gap-2">
                      <Zap size={14} className="text-primary" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
