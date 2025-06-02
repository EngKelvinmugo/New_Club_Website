import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-01-28",
    time: "14:00 - 16:00",
    location: "Computer Lab 2",
    description: "Introduction to Machine Learning and AI concepts",
  },
  {
    id: 2,
    title: "Tech Meetup",
    date: "2025-01-30",
    time: "15:00 - 17:00",
    location: "Main Auditorium",
    description: "Networking event with industry professionals",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {upcomingEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <p className="text-sm text-gray-600">{event.description}</p>
              <Button className="w-full bg-red-600 hover:bg-red-700">RSVP Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

