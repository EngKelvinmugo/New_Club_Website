"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const initialMembers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Pending" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Approved" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Pending" },
]

export default function MemberManagement() {
  const [members, setMembers] = useState(initialMembers)

  const handleApprove = (id: number) => {
    setMembers(members.map((member) => (member.id === id ? { ...member, status: "Approved" } : member)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Member Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.status}</TableCell>
                <TableCell>
                  {member.status === "Pending" && (
                    <Button onClick={() => handleApprove(member.id)} size="sm">
                      Approve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

