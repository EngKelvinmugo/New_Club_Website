const timelineEvents = [
  {
    year: "2020",
    title: "Club Foundation",
    description: "Ajira Club was established with 20 founding members",
  },
  {
    year: "2021",
    title: "First Training",
    description: "Successfully organized our first internal Training event  with 50+ participants",
  },
  {
    year: "2022",
    title: "Industry Partnerships",
    description: "Established partnerships with local companies",
  },
  {
    year: "2023",
    title: "University Recognition",
    description: "We sucessfully secured recognition from Muranga University",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our <span className="text-red-600">Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center mb-8 last:mb-0">
              <div className="flex-none">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  {event.year}
                </div>
              </div>
              <div className="ml-8 relative">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-[-28px] top-[50%] h-full border-l-2 border-dashed border-red-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

