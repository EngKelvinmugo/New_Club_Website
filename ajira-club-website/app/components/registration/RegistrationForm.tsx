"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function RegistrationForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      // if (response.success) {
        router.push(`/verify?email=${formData.get("email")}`)
      // }
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form action={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-32 h-32 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200">
              {profileImage ? (
                <Image src={profileImage || "/placeholder.svg"} alt="Profile preview" fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">No image</span>
                </div>
              )}
            </div>
          </div>
          <Input
            type="file"
            name="profilePicture"
            accept="image/*"
            className="w-full max-w-xs"
            onChange={handleImageChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" required placeholder="Enter your phone number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="schoolId">School ID</Label>
            <Input id="schoolId" name="schoolId" required placeholder="Enter your school ID" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="membershipType">Membership Type</Label>
            <Select name="membershipType" required>
              <SelectTrigger>
                <SelectValue placeholder="Select membership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="alumni">Alumni</SelectItem>
                <SelectItem value="mentor">Mentor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
        {isLoading ? "Processing..." : "Continue to Verification"}
      </Button>
    </form>
  )
}

