import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/sections/ai-employees/product-hero"
import AcceleratorVsCustom from "@/components/sections/ai-employees/accelerator-vs-custom"
import DeploymentTimeline from "@/components/sections/ai-employees/deployment-timeline"
import CapabilitiesGrid from "@/components/sections/ai-employees/capabilities-grid"
import UseCases from "@/components/sections/ai-employees/use-cases"
import ComparisonTable from "@/components/sections/ai-employees/comparison-table"
import CTASection from "@/components/sections/ai-employees/cta-section"

export default function AIEmployeesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductHero />
      <AcceleratorVsCustom />
      <DeploymentTimeline />
      <CapabilitiesGrid />
      <UseCases />
      <ComparisonTable />
      <CTASection />
      <Footer />
    </main>
  )
}
