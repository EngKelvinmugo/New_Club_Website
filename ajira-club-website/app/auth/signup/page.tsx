"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

export default function SignupPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "",
    yearOfCompletion: "",
    disability: "",
    idNumber: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signing up with:", user)
    router.push("/verify")
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign Up for Mut Ajira Digital Club</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={user.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={user.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={user.password} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" value={user.confirmPassword} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="course">Course of Study</Label>
              <Input id="course" name="course" value={user.course} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="yearOfCompletion">Year of Completion</Label>
              <Input id="yearOfCompletion" name="yearOfCompletion" type="number" value={user.yearOfCompletion} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="disability">Disability</Label>
              <Select onValueChange={(value) => setUser({ ...user, disability: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="idNumber">ID Number</Label>
              <Input id="idNumber" name="idNumber" type="text" value={user.idNumber} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <Link href="/auth/login" className="text-sm text-red-600 hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
