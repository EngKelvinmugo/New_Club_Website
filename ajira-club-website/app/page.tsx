import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Highlights />
        <Testimonials />
      </main>
    </>
  )
}

