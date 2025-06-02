"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"

export default function MemberProfile() {
  const [member, setMember] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    membershipStatus: "Active",
    memberSince: "2023-01-01",
    expiryDate: "2024-12-31",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg" alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Membership Status:</span>
            <Badge variant={member.membershipStatus === "Active" ? "default" : "secondary"}>
              {member.membershipStatus}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span>Member Since:</span>
            <span>{new Date(member.memberSince).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Expiry Date:</span>
            <span>{new Date(member.expiryDate).toLocaleDateString()}</span>
          </div>
        </div>
        <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Renew Membership</Button>
      </CardContent>
    </Card>
  )
}

