import Mission from "../components/about/Mission"
import Timeline from "../components/about/Timeline"
import Gallery from "../components/about/Gallery"
import { Separator } from "../components/ui/separator"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            About <span className="text-red-600">Ajira Club</span>
          </h1>
        </div>
      </div>
      <Mission />
      <Separator />
      <Timeline />
      <Separator />
      <Gallery />
    </main>
  )
}

