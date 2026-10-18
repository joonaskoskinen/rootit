import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { BeforeAfter } from "@/components/before-after"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <div>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Pricing />
        <BeforeAfter />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      </div>
    </div>
  )
}
