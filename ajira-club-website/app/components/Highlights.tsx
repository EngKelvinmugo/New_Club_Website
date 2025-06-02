import { Card, CardContent } from "./ui/card"
import { Code, Users, Trophy } from "lucide-react"

const highlights = [
  {
    icon: <Code className="w-8 h-8 text-red-600" />,
    title: "Technical Workshops",
    content: "Hands-on learning experiences with cutting-edge technologies",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Networking",
    content: "Connect with industry professionals and like-minded peers",
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-600" />,
    title: "Competitions",
    content: "Participate in hackathons and coding challenges",
  },
]

export default function Highlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Join <span className="text-red-600">Ajira Club</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-50 rounded-full">{highlight.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

