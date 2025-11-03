import Link from "next/link"

export default function CaseStudiesCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Achieve Similar Results?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join enterprise leaders who are transforming their operations with GenFox.AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
            Schedule Readiness Workshop
          </button>
          <Link
            href="/roi"
            className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition"
          >
            Calculate Your ROI
          </Link>
        </div>
      </div>
    </section>
  )
}
