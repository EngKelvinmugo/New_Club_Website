"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Logging in with:", credentials)
    // Redirect to dashboard after successful login
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login to Mut Ajira digital club</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={credentials.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/auth/forgot-password" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <Link href="/auth/signup" className="text-sm text-red-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

