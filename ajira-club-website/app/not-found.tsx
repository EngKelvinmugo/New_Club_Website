"use client"

import Link from "next/link"
import { Button } from "./components/ui/button"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6">
      {/* Icon */}
      <div className="mb-6 text-8xl animate-bounce">🚧</div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold tracking-wide">We're Building Something Amazing!</h1>

      {/* Subtext */}
      <p className="text-gray-300 text-lg mt-4 max-w-lg">
        This page isn't ready just yet, but we're working hard behind the scenes. Check back soon for something exciting!
      </p>

      {/* Home Button */}
      <Link href="/">
        <Button className="mt-6 bg-red-600 hover:bg-red-700 text-lg px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        Go Home
        </Button>
      </Link>
    </main>
  )
}
