"use client"

import { CheckCircle, Circle } from "lucide-react"
import { useState, useEffect } from "react"
import type { VerificationStatus } from "@/types/registration"

export default function VerificationStatus({ email }: { email: string }) {
  const [status, setStatus] = useState<VerificationStatus>({
    personalInfo: true,
    payment: false,
    emailVerification: false,
  })

  return (
    <div className="mb-8">
      <div className="flex flex-col space-y-4">
        <StatusItem
          title="Personal Information"
          description="Basic details submitted"
          completed={status.personalInfo}
        />
        <StatusItem title="Payment" description="Membership fee payment" completed={status.payment} />
        <StatusItem
          title="Email Verification"
          description="Verify your email address"
          completed={status.emailVerification}
        />
      </div>
    </div>
  )
}

function StatusItem({
  title,
  description,
  completed,
}: {
  title: string
  description: string
  completed: boolean
}) {
  return (
    <div className="flex items-start space-x-4">
      {completed ? (
        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
      ) : (
        <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" />
      )}
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

