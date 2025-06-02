"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { Modal } from "../components/ui/readMore"
const featuredStories = [
  {
    id: 1,
    title: "Ajira Club Empowers 500+ Youth with Job Placement Program",
    excerpt: "Through our new job placement initiative, over 500 youth have secured positions in various tech and non-tech fields. Here's how we did it...",
    image: "/images/9.jpg",
    date: "2025-01-15",
  },
  {
    id: 2,
    title: "Ajira Club Hosts Career Development Workshop with Industry Leaders",
    excerpt: "In our latest workshop, experts from top tech companies shared their insights on how to thrive in the fast-evolving job market...",
    image: "/images/10.jpg",
    date: "2025-01-20",
  },
  {
    id: 3,
    title: "How Ajira Club Helped Over 1000 Freelancers Launch Their Careers",
    excerpt: "Through targeted training and mentorship, Ajira Club has helped over 1000 aspiring freelancers start their own businesses and thrive in the gig economy...",
    image: "/images/11.jpg",
    date: "2025-01-10",
  },
  // {
  //   id: 4,
  //   title: "Ajira Club Hosts Annual Hackathon: The Future of Digital Jobs",
  //   excerpt: "This year’s hackathon brought together innovators, developers, and entrepreneurs to solve real-world problems. Here’s a look at the top projects...",
  //   image: "/images/12.jpg",
  //   date: "2025-01-25",
  // },
  {
    id: 5,
    title: "Ajira Club Partners with Top Companies for Internship Opportunities",
    excerpt: "We’ve partnered with several leading companies to provide valuable internship opportunities for youth in tech, design, and digital marketing fields...",
    image: "/images/13.jpg",
    date: "2025-01-18",
  },
]

const blogPosts = [
  {
    id: 1,
    title: "How to Land Your First Tech Job",
    excerpt: "Breaking into the tech industry can be tough, but with the right strategy, you can land your first job in no time...",
    image: "/images/14.jpg",
    date: "2025-01-10",
  },
  {
    id: 2,
    title: "Top Skills Employers Are Looking For in 2025",
    excerpt: "Stay ahead of the curve with the latest in-demand skills for the modern workforce, including AI, data science, and soft skills...",
    image: "/images/14.png",
    date: "2025-01-05",
  },
  {
    id: 3,
    title: "Building a Successful Freelance Career",
    excerpt: "Freelancing offers flexibility and growth. Learn the steps to build a sustainable freelance career and manage your workload...",
    image: "/images/15.jpeg",
    date: "2024-12-28",
  },
  // {
  //   id: 4,
  //   title: "Navigating the Gig Economy: A Beginner’s Guide",
  //   excerpt: "The gig economy is booming. Here's what you need to know to get started with gig work and manage your career in this new economy...",
  //   image: "/placeholder.svg",
  //   date: "2024-12-15",
  // },
  // {
  //   id: 5,
  //   title: "Ajira Club's Impact on Youth Employment in Kenya",
  //   excerpt: "Ajira Club is playing a significant role in empowering youth by providing training, mentorship, and job opportunities. Here’s how it’s changing lives...",
  //   image: "/placeholder.svg",
  //   date: "2024-11-20",
  // },
]

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalContent, setModalContent] = useState("")

  const openModal = (title: string, content: string) => {
    setModalTitle(title)
    setModalContent(content)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Ajira Club <span className="text-red-600">News</span>
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(story.date).toLocaleDateString()}</span>
                    <Button variant="outline" onClick={() => openModal(story.title, story.excerpt)}>
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Button variant="link" onClick={() => openModal(post.title, post.excerpt)}>
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={modalTitle} content={modalContent} />
    </main>
  )
}