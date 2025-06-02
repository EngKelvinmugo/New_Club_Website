import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const testimonials = [
  {
    content:
      "Joining MUT Ajira Club opened up countless opportunities for my tech career. The mentorship and practical experience were invaluable.",
    name: "Brenda Kang'acha",
    role: "Infortmation Technology Student",
    avatar: "/images/testimonial1.jpeg",
  },
  {
    content:
      "The workshops and networking events helped me land my dream internship. This club truly prepares you for the industry.",
    name: "Joseph Kiarie",
    role: "Computer Science Student",
    avatar: "/placeholder.svg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our <span className="text-red-600">Members</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

