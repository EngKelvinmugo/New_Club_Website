import { Users, Megaphone, FileText, Briefcase, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


export default function DashboardOverview() {
  const cards = [
    { title: "Total Members", value: "1,250", icon: Users, color: "blue" },
    { title: "Latest Announcements", value: "5", icon: Megaphone, color: "green" },
    { title: "Available Resources", value: "32", icon: FileText, color: "yellow" },
    { title: "Active Projects", value: "8", icon: Briefcase, color: "purple" },
    { title: "Upcoming Events", value: "3", icon: Calendar, color: "orange" },
    { title: "Completed Tasks", value: "27", icon: CheckCircle, color: "teal" },
  ];

  return (
    <div className="p-12 space-y-12">
      <h2 className="text-4xl font-bold tracking-tight">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-12">
              <div
                className={`flex items-center justify-between p-12 bg-${card.color}-100 rounded-2xl transition-all duration-300 ease-in-out hover:bg-${card.color}-200 hover:shadow-xl`}
              >
                <div className="space-y-4">
                  <p className="text-xl font-semibold text-gray-600">{card.title}</p>
                  <p className="text-4xl font-bold text-gray-900">{card.value}</p>
                </div>
                <div className={`p-6 bg-${card.color}-200 rounded-full`}>
                  <card.icon size={48} className={`text-${card.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
