"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const initialPayments = [
  { id: 1, member: "Alice Johnson", amount: 500, date: "2025-02-01", status: "Pending" },
  { id: 2, member: "Bob Smith", amount: 500, date: "2025-02-02", status: "Verified" },
  { id: 3, member: "Charlie Brown", amount: 500, date: "2025-02-03", status: "Pending" },
]

export default function PaymentVerification() {
  const [payments, setPayments] = useState(initialPayments)

  const handleVerify = (id: number) => {
    setPayments(payments.map((payment) => (payment.id === id ? { ...payment, status: "Verified" } : payment)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Verification</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.member}</TableCell>
                <TableCell>KES {payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>
                  {payment.status === "Pending" && (
                    <Button onClick={() => handleVerify(payment.id)} size="sm">
                      Verify
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

