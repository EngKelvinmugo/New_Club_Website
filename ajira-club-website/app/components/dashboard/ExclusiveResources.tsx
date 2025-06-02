import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { FileText, Video, Download } from "lucide-react"

const resources = [
  { id: 1, title: "AI Workshop Materials", type: "document", icon: FileText },
  { id: 2, title: "Web Dev Course Videos", type: "video", icon: Video },
  { id: 3, title: "Hackathon Starter Kit", type: "download", icon: Download },
]

export default function ExclusiveResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exclusive Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <resource.icon className="w-5 h-5 text-gray-500" />
                <span>{resource.title}</span>
              </div>
              <Button variant="outline" size="sm">
                Access
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

