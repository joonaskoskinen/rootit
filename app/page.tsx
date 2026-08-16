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
    <div className="relative min-h-screen bg-background bg-ambient">
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Grid pattern, faded toward the edges */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 30%, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 35%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
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
    </div>
  )
}
