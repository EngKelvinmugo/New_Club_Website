"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function ContentUpload() {
  const [content, setContent] = useState({
    title: "",
    type: "",
    file: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "file") {
      setContent({ ...content, file: e.target.files ? e.target.files[0] : null })
    } else {
      setContent({ ...content, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle content upload logic here
    console.log("Uploading content:", content)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Upload</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={content.title} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="type">Content Type</Label>
            <Select name="type" onValueChange={(value) => setContent({ ...content, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select content type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="event">Event</SelectItem>
                <SelectItem value="blog">Blog Post</SelectItem>
                <SelectItem value="announcement">Announcement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="file">File Upload</Label>
            <Input id="file" name="file" type="file" onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Upload Content
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

