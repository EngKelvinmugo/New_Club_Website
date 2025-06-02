"use client"
import VerificationStatus from "../components/registration/VerificationStatus"
import PaymentSection from "../components/registration/PaymentSection"
import { Card } from "../components/ui/card"
export default function VerifyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Complete Your <span className="text-red-600">Verification</span>
          </h1>
          <Card className="p-6">
            <VerificationStatus email={'kindly refresh'} />
            <PaymentSection />
          </Card>
        </div>
      </div>
    </main>
  )
}

