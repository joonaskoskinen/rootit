import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { ClientShowcase } from "@/components/client-showcase"
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
        <ClientShowcase />
        <BeforeAfter />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      </div>
    </div>
  )
}
