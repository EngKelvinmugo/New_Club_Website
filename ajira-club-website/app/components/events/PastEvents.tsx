import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, MapPin } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    title: "Ajira Digital Celebrating Women International Day at Murang'a University of Technology",
    date: "2024-03-17",
    location: "Murang'a University of Technology, Kenya",
    description:
      "A special event dedicated to celebrating the achievements and contributions of women in the digital space. The event featured keynote speeches, mentorship sessions, and panel discussions with successful women in tech.",
    highlights: [
      "Keynote speech from prominent women leaders in ICT.",
      "Mentorship and networking opportunities for students.",
      "Workshops on digital freelancing and career growth.",
    ],
    images: ["/images/6.jpeg", "/images/5.jpeg", "/images/6.jpeg", "/images/5.jpeg" ],
  },
  {
    id: 2,
    title: "Ajira Club Leaders Bootcamp",
    date: "2024-11-20",
    location: "Nairobi, Kenya",
    description:
      "An exclusive leadership training event for Ajira Club leaders across various institutions. Led by PMO Antony Chege, the bootcamp aimed to equip students with leadership, entrepreneurship, and digital work skills.",
    highlights: [
      "Leadership development sessions.",
      "Training on freelancing and remote work opportunities.",
      "Panel discussion with industry experts.",
    ],
    images: ["/images/3.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/2.jpeg"],
  },
  {
    id: 3,
    title: "Ajira Digital Freelancing Workshop",
    date: "2024-06-10",
    location: "Kenyatta University, Kenya",
    description:
      "A practical workshop aimed at training university students on how to start and grow a career in freelancing. The event featured hands-on sessions on platforms like Upwork, Fiverr, and PeoplePerHour.",
    highlights: [
      "Step-by-step guide on creating a winning freelance profile.",
      "Hands-on training on Upwork and Fiverr.",
      "One-on-one mentorship with experienced freelancers.",
    ],
    images: [ "/images/8.jpeg", "/images/8.jpeg", "/images/10.jpg", "/images/8.jpeg"],
  },
];

export default function PastEvents() {
  return (
    <div className="space-y-10 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">✨ Past Events ✨</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastEvents.map((event) => (
          <Card
            key={event.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={event.images[0] || "/placeholder.svg"}
                alt={`${event.title} main image`}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <CardHeader className="p-6">
              <CardTitle className="text-lg font-semibold text-gray-800">{event.title}</CardTitle>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <Calendar size={16} className="mr-2 text-red-500" />
                {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={16} className="mr-2 text-blue-500" />
                {event.location}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-gray-800 font-semibold mb-2">🌟 Highlights</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-3">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="relative w-20 h-20">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${event.title} photo ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
