import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Benefits } from "@/components/benefits"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { Process } from "@/components/process"
import { WhyRootit } from "@/components/why-rootit"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <Services />
        <BeforeAfter />
        <Process />
        <WhyRootit />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
