import Image from "next/image"
import { Card, CardContent } from "../ui/card"

const activities = [
  {
    title: "Club Orientation 2023",
    description: "Welcome session for new members to learn about the club's activities and benefits.",
    image: "/images/orientation.jpeg",
  },
  {
    title: "Networking & Fun Games",
    description: "An engaging event combining networking opportunities with fun games to help members build connections while having a great time.",
    image: "/images/Networking and fun games.jpeg",
  },
  {
    title: "Digital Skills & Remote Work Training",
    description: "A workshop focused on enhancing digital skills and preparing members for remote work opportunities in the global job market.",
    image: "/images/Digital skills training.jpeg",
  },
  {
    title: "Inter-University Hike with Karatina University",
    description: "A collaborative outdoor adventure with Karatina University, combining nature exploration, team-building activities, and networking between students from both universities.",
    image: "/images/Inter university hike.jpeg",
  },
  {
    title: "Finance Training Workshop",
    description: "An educational event where members learn about personal finance management and investment strategies.",
    image: "/images/Finance event.jpeg",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Club <span className="text-red-600">Activities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4">
                <div className="relative mb-4 rounded-lg overflow-hidden h-64 md:h-48 lg:h-56">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
