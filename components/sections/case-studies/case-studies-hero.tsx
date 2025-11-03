export default function CaseStudiesHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Real Results from Enterprise Leaders</h1>
        <p className="text-lg text-muted-foreground mb-8">
          See how organizations across industries are deploying AI employees and achieving measurable ROI with GenFox.AI
        </p>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <p className="text-sm text-muted-foreground">Avg. Time Savings</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$2.1M</div>
            <p className="text-sm text-muted-foreground">Avg. Annual Savings</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8 weeks</div>
            <p className="text-sm text-muted-foreground">Avg. Payback Period</p>
          </div>
        </div>
      </div>
    </section>
  )
}
