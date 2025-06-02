import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const announcements = [
  { id: 1, title: "Upcoming Hackathon", date: "2025-03-15" },
  { id: 2, title: "New AI Course Available", date: "2025-02-28" },
  { id: 3, title: "Club Meeting This Friday", date: "2025-02-10" },
]

export default function Announcements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="border-b pb-2 last:border-b-0">
              <h4 className="font-semibold">{announcement.title}</h4>
              <p className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

