"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Progress } from "../ui/progress"
import { CalendarDays, AlertCircle } from "lucide-react"

export default function MembershipStatus() {
  // Mock data - replace with actual data from your backend
  const membershipData = {
    status: "active",
    expiryDate: "2025-12-31",
    memberSince: "2023-01-01",
    daysLeft: 341,
    totalDays: 365,
  }

  const progressPercentage = (membershipData.daysLeft / membershipData.totalDays) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Membership Status
          <Badge
            variant={membershipData.status === "active" ? "default" : "destructive"}
            className={membershipData.status === "active" ? "bg-green-600" : ""}
          >
            {membershipData.status.toUpperCase()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Time Remaining</span>
            <span className="font-medium">{membershipData.daysLeft} days left</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Expiry Date:</span>
            <span className="font-medium">{new Date(membershipData.expiryDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <AlertCircle className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Member Since:</span>
            <span className="font-medium">{new Date(membershipData.memberSince).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

