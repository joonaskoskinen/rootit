import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { Features } from "@/components/features"
import { FreeDemoSection } from "@/components/free-demo-section"
import { WhyRune } from "@/components/why-rune"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <FreeDemoSection />
        <WhyRune />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
