"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Check, CreditCard, Smartphone } from "lucide-react"

export default function RenewalForm() {
  const [paymentMethod, setPaymentMethod] = useState("mpesa")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleRenewal = async () => {
    setIsProcessing(true)
    // Implement payment processing logic here
    setTimeout(() => setIsProcessing(false), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Renew Membership</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Select Payment Method</Label>
          <RadioGroup defaultValue="mpesa" onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-4">
            <Label
              htmlFor="mpesa"
              className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 [&:has(:checked)]:border-red-600"
            >
              <RadioGroupItem value="mpesa" id="mpesa" />
              <Smartphone className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <div className="font-medium">M-Pesa</div>
                <div className="text-sm text-gray-500">Pay via M-Pesa</div>
              </div>
              {paymentMethod === "mpesa" && <Check className="w-5 h-5 text-green-600" />}
            </Label>

            <Label
              htmlFor="card"
              className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 [&:has(:checked)]:border-red-600"
            >
              <RadioGroupItem value="card" id="card" />
              <CreditCard className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <div className="font-medium">Credit Card</div>
                <div className="text-sm text-gray-500">Pay with credit/debit card</div>
              </div>
              {paymentMethod === "card" && <Check className="w-5 h-5 text-green-600" />}
            </Label>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between py-4 border-t">
            <span className="font-medium">Annual Membership Fee</span>
            <span className="font-bold">KES 500</span>
          </div>
          <Button onClick={handleRenewal} className="w-full bg-red-600 hover:bg-red-700" disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Renew Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

