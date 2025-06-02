import { Button } from "./ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-16 lg:py-24">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Empowering Students Through
              <span className="text-red-600"> Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join a community of innovators, creators, and future tech leaders. Experience{" "}
              <span className="text-green-600">hands-on learning</span> and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Register Now</Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src="/images/5.jpeg"
              alt="Tech Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

