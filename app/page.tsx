import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { WhyRootit } from "@/components/why-rootit"
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
        <div className="site-section"><Problems /></div>
        <div className="site-section"><Services /></div>
        <div className="site-section"><BeforeAfter /></div>
        <div className="site-section"><WhyRootit /></div>
        <div className="site-section"><FaqSection /></div>
        <div className="site-section"><FinalCta /></div>
      </main>
      <Footer />
      </div>
    </div>
  )
}
