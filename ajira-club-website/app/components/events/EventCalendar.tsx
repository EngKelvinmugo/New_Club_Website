"use client"

import { useState } from "react"
import { Calendar } from "../ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { useRouter } from "next/navigation"

export default function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const router = useRouter()

  // Mock events data - replace with actual data from your backend
  const events = [
    { date: new Date(2025, 0, 28), type: "workshop" },
    { date: new Date(2025, 0, 30), type: "meetup" },
    { date: new Date(2025, 1, 5), type: "conference" },
    { date: new Date(2025, 1, 10), type: "webinar" },
    { date: new Date(2025, 1, 15), type: "workshop" },
    { date: new Date(2025, 2, 20), type: "meetup" },
    { date: new Date(2025, 3, 3), type: "conference" },
    { date: new Date(2025, 3, 8), type: "webinar" },
    { date: new Date(2025, 4, 1), type: "workshop" },
    // Add more events
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Event Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                event: events.map((event) => event.date),
              }}
              modifiersStyles={{
                event: { fontWeight: "bold", color: "#DC2626" },
              }}
            />
            <div className="md:w-64">
              <h3 className="font-semibold mb-3">Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-red-600">Workshop</Badge>
                  <span className="text-sm text-gray-600">Technical sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-600">Meetup</Badge>
                  <span className="text-sm text-gray-600">Networking events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-600">Conference</Badge>
                  <span className="text-sm text-gray-600">Industry talks and sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-purple-600">Webinar</Badge>
                  <span className="text-sm text-gray-600">Online learning sessions</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Encouragement Card */}
      <Card className="bg-white text-gray-900 shadow-xl w-full sm:w-1/2 lg:w-1/3">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Involved and Grow!</h2>
          <p className="text-lg mb-6">
            Join our exciting events to network, learn new skills, and grow with our amazing community. Don't miss out on these amazing opportunities to engage and connect with like-minded individuals.
          </p>
          <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition-colors" onClick={()=>{router.push('/contact')}}>
            Contact us
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
