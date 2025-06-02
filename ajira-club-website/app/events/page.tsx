import EventCalendar from "../components/events/EventCalendar"
import UpcomingEvents from "../components/events/UpcomingEvents"
import PastEvents from "../components/events/PastEvents"
import { Separator } from "../components/ui/separator"

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Club <span className="text-red-600">Events</span>
        </h1>
        <div className="space-y-12">
          <EventCalendar />
          <Separator className="my-12" />
          <UpcomingEvents />
          <Separator className="my-12" />
          <PastEvents />
        </div>
      </div>
    </main>
  )
}

