interface CaseStudyCardProps {
  title: string
  company: string
  industry: string
  size: string
  problem: string
  solution: string
  results: {
    label: string
    value: string
  }[]
  quote: string
  author: string
  role: string
}

export default function CaseStudyCard({
  title,
  company,
  industry,
  size,
  problem,
  solution,
  results,
  quote,
  author,
  role,
}: CaseStudyCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{company}</p>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{industry}</span>
        </div>
        <p className="text-xs text-muted-foreground">Company Size: {size}</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
          <p className="text-sm text-muted-foreground">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Solution</h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-primary/5 rounded-lg">
        {results.map((result, idx) => (
          <div key={idx} className="text-center">
            <div className="text-lg font-bold text-primary">{result.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4">
        <p className="text-sm italic text-muted-foreground mb-3">"{quote}"</p>
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
