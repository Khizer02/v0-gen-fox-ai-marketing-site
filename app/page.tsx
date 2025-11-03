import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import ValueProp from "@/components/sections/value-prop"
import ROICalculator from "@/components/sections/roi-calculator"
import Timeline from "@/components/sections/timeline"
import ProofStories from "@/components/sections/proof-stories"
import Comparison from "@/components/sections/comparison"
import Security from "@/components/sections/security"
import Solutions from "@/components/sections/solutions"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueProp />
      <ROICalculator />
      <Timeline />
      <ProofStories />
      <Comparison />
      <Security />
      <Solutions />
      <FinalCTA />
      <Footer />
    </main>
  )
}
