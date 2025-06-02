"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

// Gallery data
const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "/images/7.mp4",
    alt: "Introduction Video",
    year: 2024,
    eventType: "workshop",
    location: "Murang'a University of Technology, Kenya",
    description:
      "Step-by-step guide on creating a successful freelancing career with mentorship from industry experts.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/10.jpg",
    alt: "Ajira Digital Freelancing Workshop",
    year: 2024,
    eventType: "workshop",
    location: "Karatina University, Kenya",
    description:
      "Step-by-step guide on creating a successful freelancing career with mentorship from industry experts.",
  },
  {
    id: 3,
    type: "image",
    src: "/images/6.jpeg",
    alt: "Ajira Digital Celebrating Women International Day",
    year: 2024,
    eventType: "workshop",
    location: "Murang'a University of Technology, Kenya",
    description:
      "A celebration of women's achievements in digital careers with mentorship and keynote speeches.",
  },
  {
    id: 4,
    type: "image",
    src: "/images/5.jpeg",
    alt: "Ajira Digital Celebrating Women International Day",
    year: 2024,
    eventType: "workshop",
    location: "Murang'a University of Technology, Kenya",
    description:
      "Panel discussions with successful women in tech and career guidance for students.",
  },
  {
    id: 5,
    type: "image",
    src: "/images/3.jpeg",
    alt: "Ajira Club Leaders Bootcamp",
    year: 2024,
    eventType: "bootcamp",
    location: "Nairobi, Kenya",
    description:
      "Leadership training bootcamp for Ajira Club leaders, featuring industry mentorship and entrepreneurship insights.",
  },
  {
    id: 6,
    type: "image",
    src: "/images/2.jpeg",
    alt: "Ajira Club Leaders Bootcamp",
    year: 2024,
    eventType: "bootcamp",
    location: "Nairobi, Kenya",
    description:
      "Sessions on freelancing, remote work, and personal branding in the digital economy.",
  },
  {
    id: 7,
    type: "image",
    src: "/images/8.jpeg",
    alt: "Ajira Digital Freelancing Workshop",
    year: 2024,
    eventType: "workshop",
    location: "Murang'a  University of Technology, Kenya",
    description:
      "Hands-on training for students to start freelancing on platforms like Upwork and Fiverr.",
  },
  {
    id: 8,
    type: "image",
    src: "/images/4.jpeg",
    alt: "Ajira Digital Freelancing Workshop",
    year: 2024,
    eventType: "workshop",
    location: "Karatina University, Kenya",
    description:
      "Step-by-step guide on creating a successful freelancing career with mentorship from industry experts.",
  },
 
]

export default function GalleryPage() {
  const [filter, setFilter] = useState({ year: "all", eventType: "all" })

  const filteredItems = galleryItems.filter(
    (item) =>
      (filter.year === "all" || item.year.toString() === filter.year) &&
      (filter.eventType === "all" || item.eventType === filter.eventType),
  )

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Event <span className="text-red-600">Gallery</span>
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Select onValueChange={(value) => setFilter((prev) => ({ ...prev, year: value }))}>
            <SelectTrigger className="w-[180px] bg-white shadow-md border-gray-300">
              <SelectValue placeholder="Filter by Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setFilter((prev) => ({ ...prev, eventType: value }))}>
            <SelectTrigger className="w-[180px] bg-white shadow-md border-gray-300">
              <SelectValue placeholder="Filter by Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="bootcamp">Bootcamp</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white">
            <CardContent className="p-0">
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video controls className="w-full h-48 object-cover">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </CardContent>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.alt}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="text-xs text-gray-500 mt-2">
                📍 {item.location} | 📅 {item.year} | 🏷 {item.eventType.toUpperCase()}
              </div>
            </div>
          </Card>
          
          ))}
        </div>
      </div>
    </main>
  )
}
