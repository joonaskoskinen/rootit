import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { WhyRootit } from "@/components/why-rootit"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { MobileContactBar, MobileContactBarSpacer } from "@/components/mobile-contact-bar"

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <div>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <BeforeAfter />
        <WhyRootit />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileContactBarSpacer />
      <MobileContactBar />
      </div>
    </div>
  )
}
