import { Card, CardContent } from "../ui/card"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: <Target className="w-8 h-8 text-red-600" />,
    title: "Mission",
    content:
      "To empower over one million young people annually to access digital and digitally enabled jobs in the gig and freelancing economy.",
  },
  {
    icon: <Eye className="w-8 h-8 text-green-600" />,
    title: "Vision",
    content: "Position Kenya as the preferred labor destination for multinational companies while encouraging local companies and the public sector to create digital work opportunities.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "Values",
    content: "Promote youth empowerment,  skill development, Foster innovation, digital transformation, Support economic growth through digital job creation and Enhance accessibility to online job opportunities. ",
  },
]

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
          <p className="text-gray-600">
            Founded in 2020, Ajira Club has been at the forefront of technological innovation and student development at
            our university.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-50 rounded-full transition-all duration-300 hover:bg-red-50 hover:text-red-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
