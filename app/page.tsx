import { Header } from "@/components/header"
import { RootitHome } from "@/components/rootit-home"
import { Footer } from "@/components/footer"

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background bg-ambient">
      <Header />
      <main>
        <RootitHome />
      </main>
      <Footer />
    </div>
  )
}
