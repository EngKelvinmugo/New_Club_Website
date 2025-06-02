"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const initialMembers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", expiryDate: "2025-03-15" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", expiryDate: "2025-03-20" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", expiryDate: "2025-03-25" },
]

export default function RenewalReminders() {
  const [members, setMembers] = useState(initialMembers)

  const handleSendReminder = (id: number) => {
    // Handle sending reminder logic here
    console.log("Sending reminder to member with ID:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Renewal Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.expiryDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleSendReminder(member.id)} size="sm">
                    Send Reminder
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

