"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useRouter } from "next/navigation"
export default function PaymentSection() {
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    setIsProcessing(true)
    // Implement payment gateway integration here
    setTimeout(() => {
      setIsProcessing(false)
    }, 2000)
    router.push('dashboard')
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Membership Fee</CardTitle>
          <CardDescription>Complete your payment to activate your membership</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Registration Fee</span>
              <span className="font-semibold">KES 500</span>
            </div>
            <Button onClick={handlePayment} className="w-full bg-red-600 hover:bg-red-700" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

