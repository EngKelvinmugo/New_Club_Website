import RegistrationForm from "../components/registration/RegistrationForm"
import { Card } from "../components/ui/card"

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Join <span className="text-red-600">Mut Ajira digital club</span>
          </h1>
          <Card className="p-6">
            <RegistrationForm />
          </Card>
        </div>
      </div>
    </main>
  )
}

