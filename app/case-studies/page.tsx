import Header from "@/components/header"
import Footer from "@/components/footer"
import CaseStudiesHero from "@/components/sections/case-studies/case-studies-hero"
import CaseStudiesGrid from "@/components/sections/case-studies/case-studies-grid"
import ResultsSummary from "@/components/sections/case-studies/results-summary"
import Testimonials from "@/components/sections/case-studies/testimonials"
import CaseStudiesCTA from "@/components/sections/case-studies/case-studies-cta"

export const metadata = {
  title: "Case Studies | GenFox.AI",
  description: "See how enterprises are deploying AI employees and achieving measurable ROI with GenFox.AI",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <ResultsSummary />
        <Testimonials />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  )
}
